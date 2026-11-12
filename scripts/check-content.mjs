import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { projects } from "../src/data/projects.js";
import { translations } from "../src/data/translations.js";
import { profile } from "../src/data/profile.js";

const excluded = [
  "ruh",
  "altered",
  "mindCapitalMeme",
  "qrraul",
  "samsw",
  "brijes",
  "poly",
  "nbet-scrape",
  "oddsapiworker",
];
assert.equal(
  new Set(projects.map((project) => project.id)).size,
  projects.length,
);
for (const project of projects) {
  assert(!excluded.includes(project.id), `Excluded project: ${project.id}`);
  assert(project.repo === null || project.repo.startsWith("https://github.com/"));
  assert(project.description.es && project.description.en);
  assert(translations.es.categories[project.category]);
  assert(!project.website || project.website.startsWith("https://"));
}
assert.deepEqual(
  Object.keys(translations.es).sort(),
  Object.keys(translations.en).sort(),
);
for (const path of Object.values(profile.cv)) {
  assert(existsSync(`public${path}`), `Missing CV: ${path}`);
  assert.equal(readFileSync(`public${path}`).subarray(0, 4).toString(), "%PDF");
}
function checkDirectory(directory) {
  for (const item of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, item.name);
    if (item.isDirectory()) checkDirectory(path);
    else
      assert(
        !/\.tsx?$|\.module\.css$/.test(path),
        `Disallowed source file: ${path}`,
      );
  }
}
checkDirectory("src");
console.log(
  `Verified ${projects.length} bilingual projects, exclusions, language keys and both PDF downloads.`,
);
