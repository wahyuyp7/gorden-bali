import { writeFile } from "node:fs/promises";
import path from "node:path";
import { site } from "../src/data/site.js";

const robotsPath = path.resolve(import.meta.dirname, "../public/robots.txt");
const robots = `User-agent: *
Allow: /

Sitemap: ${site.domain}/sitemap-index.xml
`;

await writeFile(robotsPath, robots, "utf8");
console.log(`robots.txt synced for ${site.domain}`);
