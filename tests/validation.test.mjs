import test from "node:test";
import assert from "node:assert/strict";
import { checkUrl, inspectData, validateReference, validateStrategy, validateMachine } from "../tools/validate.mjs";
import { readFile } from "node:fs/promises";

test("mapping coordinates are centers, while rectangles must fit the image", () => {
  validateReference({ term: "lane", label: "lane", xPercent: 95, yPercent: 50, widthPercent: 10, heightPercent: 20, precision: "area" });
  assert.throws(() => validateReference({ term: "lane", label: "lane", xPercent: 98, yPercent: 50, widthPercent: 10, precision: "area" }));
});
test("unverified mappings cannot expose interactive coordinates", () => {
  validateReference({ term: "lane", label: "lane", precision: "unverified" });
  assert.throws(() => validateReference({ term: "lane", label: "lane", precision: "unverified", xPercent: 50, yPercent: 50 }));
});
test("data cannot include executable URLs, signed URLs, private paths or unsafe keys", () => {
  for (const url of ["javascript:alert(1)", "file:///tmp/a", "https://user:password@example.com", "https://example.com/?api_token=secret"]) assert.throws(() => checkUrl(url));
  assert.throws(() => inspectData("/Users/someone/private.txt"));
  assert.throws(() => inspectData(JSON.parse('{"__proto__": {"polluted": true}}')));
  checkUrl("https://example.com/rules?revision=2");
});
test("empty advice is rejected", () => {
  assert.throws(() => validateStrategy({ summary: "", steps: [] }));
});
test("publicly accessible images cannot be relabeled as licensed without permission", async () => {
  const names = ["ruleset", "simple", "mappings", "editions", "modes", "image", "crop"];
  const files = Object.fromEntries(await Promise.all(names.map(async (name) =>
    [`${name}.json`, JSON.parse(await readFile(new URL(`../machines/aerosmith/${name}.json`, import.meta.url)))])));
  files["image.json"].file = "playfield.webp";
  files["image.json"].rightsStatus = "licensed";
  files["image.json"].license = "CC-BY-SA-4.0";
  assert.throws(() => validateMachine(files, { id: files["ruleset.json"].id }), /permission evidence/);
});
