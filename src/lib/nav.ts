// Single source of truth for the on-page header navigation. Rename or
// reorder a section here and the header updates automatically — but the
// `id` still has to match the id set on that section's <section id="..."> in
// the component itself (Astro has no way to auto-discover that; this is as
// close to "automatic" as a static site gets without real overhead).
export interface NavItem {
  // On-page anchor (homepage section id) — mutually exclusive with `href`.
  id?: string;
  // Standalone page — used as-is instead of the `/#id` anchor pattern.
  href?: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: 'ablauf', label: 'Ablauf' },
  { id: 'fuer-wen', label: 'Für wen' },
  { href: '/wissen/', label: 'Wissen' },
  { id: 'kooperation', label: 'Über uns' },
];
