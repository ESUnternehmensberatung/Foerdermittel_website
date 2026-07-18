// GitHub Pages project sites are served under a /<repo-name>/ subpath
// (see astro.config.mjs `base`). Every root-relative href/src in the app
// must go through this helper so links and assets still resolve once the
// site moves off the /Foerdermittel_website/ subpath onto a custom domain
// (base becomes '/' again and this becomes a no-op).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string) => `${base}${path}`;
