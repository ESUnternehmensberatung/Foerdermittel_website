import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Note: @astrojs/sitemap 3.7.3 currently crashes against astro 4.16 (upstream
// incompatibility, `_routes.reduce` on undefined). Sitemap is hand-rolled in
// src/pages/sitemap.xml.ts instead until the integration catches up.
export default defineConfig({
  site: 'https://foerdermittel-finder.de/',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
