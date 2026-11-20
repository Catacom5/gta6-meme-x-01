import * as fs from "node:fs";
import * as path from "node:path";

// make.fun bounty gta6-meme-x-01: copy POST.json to /output
// Standard library only, no network.
const outDir = process.env.OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const src = path.join(process.cwd(), "POST.json");
const data = fs.readFileSync(src, "utf8");
// Validate it is a JSON object naming an X post
const parsed = JSON.parse(data);
if (!parsed || typeof parsed !== "object" || !parsed.url) {
  throw new Error("POST.json must be a JSON object with a url field");
}
fs.writeFileSync(path.join(outDir, "POST.json"), JSON.stringify(parsed, null, 2) + "\n");
console.log("Wrote POST.json to", outDir);
