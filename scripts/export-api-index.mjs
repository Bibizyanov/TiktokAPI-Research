import fs from "node:fs";

const apis = JSON.parse(fs.readFileSync(new URL("../data/api-registry.json", import.meta.url)));
const routed = apis.filter((x) => x.route);

let md = "# IM API index\n\n";
md += "| cmd | symbol | route | request | response |\n";
md += "|---:|---|---|---|---|\n";

for (const x of routed) {
  md += `| ${x.cmd} | \`${x.symbol}\` | \`${x.route}\` | \`${x.requestType ?? "—"}\` | \`${x.responseType ?? "—"}\` |\n`;
}

fs.writeFileSync(new URL("../docs/API_INDEX.md", import.meta.url), md);
console.log(`wrote ${routed.length} routed commands`);
