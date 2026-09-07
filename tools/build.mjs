import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { readRepository } from "./validate.mjs";

const { manifest, records } = await readRepository();
const escape = (text) => String(text).replace(/[\\`*_{}\[\]<>#|]/g, "\\$&");
const label = (key) => key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase());

function prose(value, depth = 0) {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return /^https?:\/\//.test(value) ? `[Source](${value})` : escape(value);
  if (typeof value !== "object") return "";
  if (Array.isArray(value)) return value.map((v) => `- ${prose(v, depth + 1)}`).join("\n\n");
  const ignored = new Set(["kinds", "termStyles", "playfieldReferences", "simplePilotKey", "hideSummaryTitle", "showBirdEyeView", "format"]);
  return Object.entries(value).filter(([k]) => !ignored.has(k)).map(([key, child]) => {
    const rendered = prose(child, depth + 1);
    if (!rendered) return "";
    if (["text", "title", "name"].includes(key)) return rendered;
    return `${depth < 1 ? "### " : ""}${label(key)}\n\n${rendered}`;
  }).filter(Boolean).join("\n\n");
}
const catalog = ["# Machine guides", "", "Edit the JSON files to propose changes. Readable pages are generated from those files.", ""];
for (const record of records) {
  const f = record.files;
  const content = f["ruleset.json"].content;
  const guide = f["ruleset.json"].kind === "catalog" ? content : { strategy: content.tournamentStrategy };
  const sources = guide.source ? [guide.source, ...(guide.supportingSources ?? [])]
    : [content.primaryStrategy, ...(content.sources ?? [])];
  const lines = [
    `# ${escape(record.title)}`, "", `[View on FlutterCatch](${record.website}) · [Propose a correction](https://github.com/jaronsjarons/fluttercatch-rulesets/issues/new/choose)`, "",
    "Generated reading copy. Edit [ruleset.json](ruleset.json), [simple.json](simple.json), or [mappings.json](mappings.json) to contribute.", "",
    "## Simple strategy", "", prose(f["simple.json"].contexts[0].content), "",
    "## Full strategy", "", prose(guide.strategy), "",
  ];
  if (guide.romOptions) lines.push("## ROM options", "", prose(guide.romOptions), "");
  if (f["editions.json"].editions.length) lines.push("## Editions", "", "See [edition-specific rules](editions.json).", "");
  if (f["modes.json"].modes.length) lines.push("## Game modes", "", "See [mode-specific rules](modes.json).", "");
  lines.push("## Sources", "", ...sources.filter((s) => s?.url).map((s) => `- [${escape(s.label ?? s.title ?? "Source")}](${s.url})`), "",
    "## Playfield", "", f["image.json"].url ? `[View the current playfield image](${f["image.json"].url}).` : "No playfield image is available.", "",
    "[Image credit and rights](image.json) · [Crop recipe](crop.json) · [Mappings](mappings.json)", "",
    "Ruleset text and mapping data: CC BY-SA 4.0, FlutterCatch contributors. External images retain their separate rights.", "");
  const markdown = lines.join("\n");
  await writeFile(resolve(record.directory, "README.md"), markdown);
  await mkdir(resolve("dist", record.directory), { recursive: true });
  await writeFile(resolve("dist", record.directory, "README.md"), markdown);
  catalog.push(`- [${escape(record.title)}](${record.directory}/README.md)`);
}
await writeFile("CATALOG.md", `${catalog.join("\n")}\n`);
await writeFile("dist/CATALOG.md", `${catalog.join("\n")}\n`);
await writeFile("dist/rulesets.json", `${JSON.stringify({ manifest, machines: records })}\n`);
console.log(`Built ${records.length} readable guides and dist/rulesets.json.`);
