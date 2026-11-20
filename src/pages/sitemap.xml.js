import { site, papers } from '../data/site.js';

// Generated at build time so <lastmod> always reflects the latest deploy.
export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const paths = ['/', ...papers.map((p) => `/papers/${p.slug}/`), site.cvPdf];
  const urls = paths
    .map((p) => `  <url><loc>${site.url}${p}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
