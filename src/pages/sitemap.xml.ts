import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Hand-rolled sitemap (see astro.config.mjs for why @astrojs/sitemap isn't used).
// Extend this list as new pages under src/pages/ go live.
const staticRoutes = ['/', '/wissen/', '/impressum/', '/datenschutz/'];

export const GET: APIRoute = async ({ site }) => {
  const artikel = await getCollection('ratgeber', ({ data }) => !data.entwurf);
  const routes = [
    ...staticRoutes,
    ...(artikel.length > 0 ? ['/ratgeber/'] : []),
    ...artikel.map((a) => `/ratgeber/${a.slug}/`),
  ];
  const base = site?.toString().replace(/\/$/, '') ?? '';
  const urls = routes
    .map((path) => `  <url><loc>${base}${path}</loc></url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
