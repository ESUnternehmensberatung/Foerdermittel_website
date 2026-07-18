import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Note: @astrojs/sitemap 3.7.3 currently crashes against astro 4.16 (upstream
// incompatibility, `_routes.reduce` on undefined). Sitemap is hand-rolled in
// src/pages/sitemap.xml.ts instead until the integration catches up.
// TODO: once the custom domain (foerdermittel-finder.de) is confirmed with
// Prospero, drop `base` entirely and set `site` back to the bare domain —
// see ASSETS.md / the deploy workflow for context on why this is staged
// under the GitHub Pages project-site subpath for now.
export default defineConfig({
  site: 'https://esunternehmensberatung.github.io/Foerdermittel_website/',
  base: '/Foerdermittel_website',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
