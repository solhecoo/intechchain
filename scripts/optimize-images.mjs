/**
 * Conversión puntual PNG → WebP para los assets que se cargan en runtime.
 * Los mockups y el robot son PNG de gran peso; WebP recorta ~70-85% sin
 * pérdida visible. Mantiene las dimensiones nativas (ya son adecuadas).
 *
 * Uso: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');

const targets = [
  'robot.png',
  'projects/niio-pay.png',
  'projects/alerta-rosa.png',
  'projects/alivio.png',
  'projects/premium-academy.png',
  'projects/tu-cop.png',
];

const kb = (bytes) => (bytes / 1024).toFixed(0) + 'K';

for (const rel of targets) {
  const src = join(pub, rel);
  const out = src.replace(/\.png$/, '.webp');
  const before = (await stat(src)).size;
  await sharp(src).webp({ quality: 80, effort: 6 }).toFile(out);
  const after = (await stat(out)).size;
  const pct = (100 - (after / before) * 100).toFixed(0);
  console.log(`${rel.padEnd(34)} ${kb(before).padStart(5)} → ${kb(after).padStart(5)}  (-${pct}%)`);
}
