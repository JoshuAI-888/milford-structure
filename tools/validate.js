#!/usr/bin/env node
/* Sanity-checks data/people.js. Run locally or in CI:  node tools/validate.js  */
const path = require("path");
const M = require(path.join(__dirname, "..", "data", "people.js"));

const errors = [];
const slugs = new Set();

for (const p of M.people) {
  if (!p.slug) errors.push(`person with no slug: ${p.name}`);
  if (slugs.has(p.slug)) errors.push(`duplicate slug: ${p.slug}`);
  slugs.add(p.slug);
  for (const f of ["name", "title", "unit", "summary"]) {
    if (!p[f]) errors.push(`${p.slug}: missing ${f}`);
  }
  if (!M.units[p.unit]) errors.push(`${p.slug}: unknown unit "${p.unit}"`);
  if (!p.sources || !p.sources.length) errors.push(`${p.slug}: no sources`);
}

for (const p of M.people) {
  if (p.reportsTo && !slugs.has(p.reportsTo)) {
    errors.push(`${p.slug}: reportsTo "${p.reportsTo}" does not exist`);
  }
}

// Every person needs an avatar committed, or their card renders broken.
const fs = require("fs");
const avatarDir = path.join(__dirname, "..", "assets", "avatars");
for (const p of M.people) {
  if (!fs.existsSync(path.join(avatarDir, p.slug + ".svg"))) {
    errors.push(`${p.slug}: missing assets/avatars/${p.slug}.svg`);
  }
}

// No reporting cycles.
for (const p of M.people) {
  const seen = new Set();
  let cur = p;
  while (cur && cur.reportsTo) {
    if (seen.has(cur.slug)) { errors.push(`reporting cycle at ${p.slug}`); break; }
    seen.add(cur.slug);
    cur = M.people.find(x => x.slug === cur.reportsTo);
  }
}

if (errors.length) {
  console.error("Dataset validation failed:");
  errors.forEach(e => console.error("  - " + e));
  process.exit(1);
}
console.log(`OK — ${M.people.length} people, ${M.timeline.length} timeline entries, no broken reporting lines.`);
