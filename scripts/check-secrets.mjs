#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = new URL("../", import.meta.url);
const ignore = new Set([".git", "node_modules", "dist"]);
const suspicious = [
  /(?:^|[;\s])sessionid(?:_ss)?=/i,
  /(?:^|[;\s])sid_tt=/i,
  /(?:^|[;\s])msToken=/i,
  /(?:^|[;\s])ttwid=/i,
];

const hits = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignore.has(entry.name)) continue;
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(full);
      continue;
    }

    if (entry.name === "check-secrets.mjs") continue;

    const stat = fs.statSync(full);
    if (stat.size > 5_000_000) continue;

    let text;
    try {
      text = fs.readFileSync(full, "utf8");
    } catch {
      continue;
    }

    for (const pattern of suspicious) {
      if (pattern.test(text)) {
        hits.push(path.relative(path.fileURLToPath(root), full));
        break;
      }
    }
  }
}

walk(path.fileURLToPath(root));

if (hits.length) {
  console.error("Potential live session material found:");
  for (const hit of hits) console.error(`  - ${hit}`);
  process.exit(1);
}

console.log("No obvious live TikTok cookie values found.");
