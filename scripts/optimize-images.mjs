import { access, mkdir, readdir, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const imagesDir = path.join(root, "public", "images");
const outputDir = path.join(imagesDir, "optimized");
const widths = [480, 768, 1024, 1536];
const skip = new Set(["logo.png"]);

const exists = async (filePath) => {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
};

const files = (await readdir(imagesDir)).filter(
  (file) => file.endsWith(".png") && !skip.has(file),
);

await mkdir(outputDir, { recursive: true });

for (const file of files) {
  const input = path.join(imagesDir, file);
  const baseName = file.replace(/\.png$/, "");
  const source = sharp(input).rotate();
  const compressed = path.join(outputDir, `${baseName}.tmp.png`);

  await source
    .clone()
    .resize({ width: 1536, withoutEnlargement: true })
    .png({ quality: 82, compressionLevel: 9 })
    .toFile(compressed);

  await sharp(compressed).toFile(input);
  await unlink(compressed);

  const optimizedSource = sharp(input).rotate();

  for (const width of widths) {
    const resized = optimizedSource.clone().resize({ width, withoutEnlargement: true });

    await resized
      .clone()
      .avif({ quality: 55 })
      .toFile(path.join(outputDir, `${baseName}-${width}.avif`));

    await resized
      .clone()
      .webp({ quality: 78 })
      .toFile(path.join(outputDir, `${baseName}-${width}.webp`));
  }

  console.log(`Optimized ${file}`);
}

const ogSource = path.join(imagesDir, "og-default.png");

if (await exists(ogSource)) {
  const ogShare = sharp(ogSource).rotate().resize(1200, 630, {
    fit: "cover",
    position: "centre",
  });

  await ogShare.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(imagesDir, "og-share.jpg"));
  await ogShare.clone().webp({ quality: 80 }).toFile(path.join(imagesDir, "og-share.webp"));
  console.log("Generated og-share.jpg and og-share.webp (1200x630)");
}

console.log(`Done. Processed ${files.length} images.`);
