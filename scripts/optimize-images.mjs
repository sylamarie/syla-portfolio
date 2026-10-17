// Converts large PNG/JPG images in public/ to WebP and moves the originals to
// assets-src/ (git-ignored) so they are kept but not shipped.
// Usage: node scripts/optimize-images.mjs
import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
sharp.cache(false);

const root = path.resolve('public');
const backup = path.resolve('assets-src');
const rules = [
  { dir: 'page-heroes', width: 1920, quality: 78 },
  { dir: 'projects', width: 1600, quality: 80 },
  { dir: 'certificates', width: 1600, quality: 82 },
];
const converted = [];

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(full));
    else out.push(full);
  }
  return out;
}

for (const rule of rules) {
  const base = path.join(root, rule.dir);
  for (const file of await walk(base)) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;
    const target = file.replace(/\.(png|jpe?g)$/i, '.webp');
    const before = (await fs.stat(file)).size;
    await sharp(await fs.readFile(file)).resize({ width: rule.width, withoutEnlargement: true }).webp({ quality: rule.quality }).toFile(target);
    const after = (await fs.stat(target)).size;
    const kept = path.join(backup, path.relative(root, file));
    await fs.mkdir(path.dirname(kept), { recursive: true });
    await fs.rename(file, kept);
    converted.push({ from: path.relative(root, file).replaceAll('\\', '/'), to: path.relative(root, target).replaceAll('\\', '/'), before, after });
    console.log(`${path.relative(root, file)}  ${(before / 1048576).toFixed(2)} MB -> ${(after / 1048576).toFixed(2)} MB`);
  }
}
const all = [];
for (const file of await walk(backup)) {
  const rel = path.relative(backup, file).replaceAll('\\', '/');
  const to = rel.replace(/\.(png|jpe?g)$/i, '.webp');
  const [before, after] = [(await fs.stat(file)).size, (await fs.stat(path.join(root, to))).size];
  all.push({ from: rel, to, before, after });
}
await fs.writeFile(path.resolve('scripts/optimize-manifest.json'), JSON.stringify(all, null, 2));
const total = all.reduce((s, c) => [s[0] + c.before, s[1] + c.after], [0, 0]);
console.log(`\n${all.length} images: ${(total[0] / 1048576).toFixed(1)} MB -> ${(total[1] / 1048576).toFixed(1)} MB`);