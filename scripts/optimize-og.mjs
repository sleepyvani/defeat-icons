import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT_DIR = process.cwd();
const SOURCE_IMG = path.join(ROOT_DIR, 'og.png');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const TARGET_PNG = path.join(PUBLIC_DIR, 'og.png');
const TARGET_WEBP = path.join(PUBLIC_DIR, 'og.webp');

async function optimizeOg() {
  if (!fs.existsSync(SOURCE_IMG)) {
    console.error('Source image og.png not found at', SOURCE_IMG);
    process.exit(1);
  }

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  const initialStat = fs.statSync(SOURCE_IMG);
  const meta = await sharp(SOURCE_IMG).metadata();
  console.log(`Source: ${meta.width}x${meta.height} (${(initialStat.size / (1024 * 1024)).toFixed(2)} MB)`);

  await sharp(SOURCE_IMG)
    .resize(1200, 630, {
      fit: 'cover',
      position: 'center',
      kernel: sharp.kernel.lanczos3
    })
    .png({
      compressionLevel: 9,
      effort: 10
    })
    .toFile(TARGET_PNG);

  const pngStat = fs.statSync(TARGET_PNG);
  console.log(`Optimized PNG: 1200x630 (${(pngStat.size / 1024).toFixed(1)} KB) -> Saved ${(((initialStat.size - pngStat.size) / initialStat.size) * 100).toFixed(1)}%`);

  await sharp(SOURCE_IMG)
    .resize(1200, 630, {
      fit: 'cover',
      position: 'center',
      kernel: sharp.kernel.lanczos3
    })
    .webp({
      quality: 92,
      effort: 6
    })
    .toFile(TARGET_WEBP);

  const webpStat = fs.statSync(TARGET_WEBP);
  console.log(`Optimized WebP: 1200x630 (${(webpStat.size / 1024).toFixed(1)} KB) -> Saved ${(((initialStat.size - webpStat.size) / initialStat.size) * 100).toFixed(1)}%`);
}

optimizeOg().catch((err) => {
  console.error(err);
  process.exit(1);
});
