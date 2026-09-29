// Downloads all images from the original eagle-lingua.com media library into /public/images.
// Runs automatically after `npm install` (postinstall) and can be re-run with `npm run assets`.
// Files that already exist are skipped, so it's safe to run many times.
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { IMAGE_SOURCES, REMOTE_BASE } from '../src/data/images.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'images');

const exists = async (p) => access(p).then(() => true).catch(() => false);

async function main() {
  await mkdir(outDir, { recursive: true });
  const entries = Object.entries(IMAGE_SOURCES);
  let ok = 0, skipped = 0, failed = 0;

  await Promise.all(
    entries.map(async ([file, remotePath]) => {
      const target = join(outDir, file);
      if (await exists(target)) { skipped++; return; }
      try {
        const res = await fetch(REMOTE_BASE + remotePath, { headers: { 'User-Agent': 'Mozilla/5.0 (asset-sync)' }, signal: AbortSignal.timeout(15000) });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        await writeFile(target, Buffer.from(await res.arrayBuffer()));
        ok++;
      } catch (err) {
        failed++;
        console.warn(`  ! ${file}: ${err.message}`);
      }
    })
  );

  console.log(`\n  Eaglelingua assets → public/images  (downloaded ${ok}, already present ${skipped}, failed ${failed})`);
  if (failed) console.log('  Missing images fall back to the live URLs automatically. Re-run with: npm run assets\n');
}

main().catch((e) => {
  // Never break `npm install` because of a network hiccup.
  console.warn('  Asset sync skipped:', e.message);
});
