// Generates dist/sitemap.xml after `vite build`.
import { writeFile } from 'node:fs/promises';
import { SERVICES } from '../src/data/services.js';
import { POSTS } from '../src/data/posts/index.js';

const SITE = process.env.SITE_URL || 'https://eagle-lingua.com';
const pages = ['', '/about-us', '/our-services', '/faq', '/testimonials', '/blog', '/contact-us', '/request-a-quote'];
const urls = [
  ...pages.map((p) => ({ loc: SITE + p, pr: p === '' ? '1.0' : '0.8' })),
  ...SERVICES.map((s) => ({ loc: `${SITE}/${s.slug}`, pr: '0.9' })),
  ...POSTS.map((p) => ({ loc: `${SITE}/${p.slug}`, pr: '0.6', lastmod: p.date })),
];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}<priority>${u.pr}</priority></url>`).join('\n')}
</urlset>
`;
await writeFile(new URL('../dist/sitemap.xml', import.meta.url), xml);
console.log(`  sitemap.xml → ${urls.length} URLs`);
