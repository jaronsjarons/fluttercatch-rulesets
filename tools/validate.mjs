import assert from "node:assert/strict";
import { readFile, readdir, lstat } from "node:fs/promises";
import { createHash } from "node:crypto";
import { resolve, relative } from "node:path";
import { pathToFileURL } from "node:url";

export const dataFiles = ["ruleset.json", "simple.json", "mappings.json", "editions.json", "modes.json", "image.json", "crop.json"];
const imageLicenses = new Set(["CC0-1.0", "CC-BY-4.0", "CC-BY-SA-4.0"]);
export function checkUrl(value) {
  const url = new URL(value);
  assert(["https:", "http:"].includes(url.protocol), "Only http(s) links are allowed");
  assert(!url.username && !url.password, "Credentials are not allowed in URLs");
  assert(!["localhost", "127.0.0.1", "0.0.0.0", "[::1]"].includes(url.hostname), "Local URLs cannot be published");
  assert(!/[?&](?:api[_-]?token|access[_-]?token|secret|password|signature|x-amz-signature)=/i.test(value), "Secret or signed URL");
}
export function inspectData(value) {
  if (typeof value === "string") {
    assert(!/(?:\/Users\/|\/private\/|file:\/\/|-----BEGIN [A-Z ]*PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,})/.test(value), "Private path or credential in data");
    if (/^https?:\/\//.test(value)) checkUrl(value);
  } else if (Array.isArray(value)) value.forEach(inspectData);
  else if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      assert(!["__proto__", "constructor", "prototype"].includes(key), "Unsafe object key");
      inspectData(child);
    }
  }
}
export function validateReference(ref) {
  assert(typeof ref.term === "string" && ref.term.trim(), "Mapping needs a term");
  assert(typeof ref.label === "string" && ref.label.trim(), "Mapping needs a label");
  if (ref.precision === "unverified") {
    assert(ref.xPercent === undefined && ref.yPercent === undefined && !ref.locations?.length,
      "Unverified mappings must not contain coordinates");
    return;
  }
  for (const location of [ref, ...(ref.locations ?? [])]) {
    assert(["exact", "area", undefined].includes(location.precision), "Unknown precision");
    for (const axis of ["xPercent", "yPercent"]) {
      assert(Number.isFinite(location[axis]) && location[axis] >= 0 && location[axis] <= 100, `Invalid ${axis}`);
    }
    for (const [size, position] of [["widthPercent", "xPercent"], ["heightPercent", "yPercent"]]) {
      if (location[size] !== undefined) assert(Number.isFinite(location[size]) && location[size] > 0 &&
        location[size] <= 100 && location[position] - location[size] / 2 >= -0.02 &&
        location[position] + location[size] / 2 <= 100.02, `Invalid ${size}`);
    }
  }
}
export function validateStrategy(strategy) {
  assert(strategy && typeof strategy.summary === "string" && strategy.summary.trim(), "Strategy needs a summary");
  assert(Array.isArray(strategy.steps) && strategy.steps.length, "Strategy needs steps");
  for (const step of strategy.steps) assert(typeof step.text === "string" && step.text.trim(), "Step needs text");
  for (const ref of strategy.playfieldReferences ?? []) validateReference(ref);
}
export function validateMachine(files, entry) {
  for (const name of dataFiles) {
    assert(files[name]?.schemaVersion === 1 && files[name].id === entry.id, `${name}: schema or machine mismatch`);
    inspectData(files[name]);
  }
  const ruleset = files["ruleset.json"];
  assert(["catalog", "curated"].includes(ruleset.kind), "Unknown ruleset kind");
  validateStrategy(ruleset.kind === "catalog" ? ruleset.content.strategy : ruleset.content.tournamentStrategy);
  for (const option of ruleset.content.romOptions?.items ?? []) if (option.strategy) validateStrategy(option.strategy);
  for (const item of files["mappings.json"].entries) {
    assert(Array.isArray(item.path) && item.path.at(-1) === "playfieldReferences", "Invalid mapping path");
    assert(!item.path.some((p) => ["__proto__", "constructor", "prototype"].includes(p)), "Unsafe mapping path");
    assert(Array.isArray(item.references), "Mapping references must be an array");
    item.references.forEach(validateReference);
  }
  const contexts = files["simple.json"].contexts;
  assert(contexts.length && contexts[0].name === "default", "Simple needs a default view");
  assert(new Set(contexts.map((c) => c.name)).size === contexts.length, "Duplicate Simple context");
  for (const context of contexts) {
    validateStrategy(context.input);
    validateStrategy(context.content);
    assert(["roadmap", "feature-guide", "scoring-loop"].includes(context.content.format), "Invalid Simple format");
  }
  for (const edition of files["editions.json"].editions) {
    assert(typeof edition.id === "string" && edition.id.startsWith(`${entry.id}-`), "Edition belongs to another family");
    for (const context of edition.contexts) { validateStrategy(context.input); validateStrategy(context.strategy); }
  }
  for (const mode of files["modes.json"].modes) { validateStrategy(mode.input); validateStrategy(mode.strategy); }
  const image = files["image.json"];
  if (image.url) checkUrl(image.url);
  if (image.file) {
    assert(/^playfield\.(webp|png|jpe?g)$/.test(image.file), "Invalid image filename");
    assert(image.rightsStatus === "licensed" && imageLicenses.has(image.license), "Image lacks an approved open license");
    assert(image.permissionEvidence?.creator && image.permissionEvidence?.url, "Image needs author and permission evidence");
    checkUrl(image.permissionEvidence.url);
    assert(/^[a-f0-9]{64}$/.test(image.sha256), "Image needs SHA-256");
    assert(image.width > 0 && image.height > 0, "Image needs dimensions");
  } else assert(["permission-required", "no-image"].includes(image.rightsStatus), "Missing licensed image file");
  const crop = files["crop.json"].applied?.crop;
  if (crop) {
    for (const [size, position] of [["widthPercent", "xPercent"], ["heightPercent", "yPercent"]]) {
      assert(Number.isFinite(crop[position]) && Number.isFinite(crop[size]) && crop[position] >= 0 &&
        crop[size] > 0 && crop[position] + crop[size] <= 100.02, "Crop falls outside the source image");
    }
    for (const key of ["rotationDegrees", "perspectiveDegrees"]) assert(Number.isFinite(crop[key]) && Math.abs(crop[key]) <= 180, "Invalid crop correction");
  }
}

export async function readRepository(root = process.cwd()) {
  const read = async (path) => {
    const stat = await lstat(path);
    assert(stat.isFile() && !stat.isSymbolicLink() && stat.size < 2_000_000, "Expected a small regular data file");
    return JSON.parse(await readFile(path, "utf8"));
  };
  const manifest = await read(resolve(root, "manifest.json"));
  assert(manifest.schemaVersion === 1 && manifest.contentLicense === "CC-BY-SA-4.0", "Invalid manifest");
  assert(Array.isArray(manifest.machines) && manifest.machines.length, "Empty collection");
  const ids = new Set(), slugs = new Set(), records = [];
  for (const entry of manifest.machines) {
    assert(/^G[A-Za-z0-9]+$/.test(entry.id), "Invalid machine family ID");
    assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.slug), "Invalid slug");
    assert(entry.directory === `machines/${entry.slug}`, "Unexpected directory");
    assert(!ids.has(entry.id) && !slugs.has(entry.slug), "Duplicate machine");
    ids.add(entry.id); slugs.add(entry.slug);
    const directory = resolve(root, entry.directory);
    assert((await lstat(directory)).isDirectory() && !(await lstat(directory)).isSymbolicLink(), "Invalid machine directory");
    const files = Object.fromEntries(await Promise.all(dataFiles.map(async (name) => [name, await read(resolve(directory, name))])));
    try { validateMachine(files, entry); } catch (error) { throw new Error(`${entry.slug}: ${error.message}`); }
    for (const name of await readdir(directory)) {
      assert([...dataFiles, "README.md", files["image.json"].file].includes(name), `Unexpected public file ${relative(root, directory)}/${name}`);
      assert(!(await lstat(resolve(directory, name))).isSymbolicLink(), "Symlinks are not allowed");
    }
    if (files["image.json"].file) {
      const bytes = await readFile(resolve(directory, files["image.json"].file));
      assert(bytes.length <= 10_000_000, "Image exceeds 10 MB");
      assert(createHash("sha256").update(bytes).digest("hex") === files["image.json"].sha256, "Image hash mismatch");
    }
    records.push({ ...entry, files });
  }
  assert((await readdir(resolve(root, "machines"))).length === records.length, "Unindexed machine directory");
  return { manifest, records };
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const { records } = await readRepository();
  console.log(`Validated ${records.length} rulesets and their Simple views, editions, mappings, crops, and image rights records.`);
}
