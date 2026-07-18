// Single source of truth for the on-page header navigation. Rename or
// reorder a section here and the header updates automatically — but the
// `id` still has to match the id set on that section's <section id="..."> in
// the component itself (Astro has no way to auto-discover that; this is as
// close to "automatic" as a static site gets without real overhead).
export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: 'ablauf', label: 'Ablauf' },
  { id: 'fuer-wen', label: 'Für wen' },
  { id: 'kooperation', label: 'Über uns' },
  { id: 'faq', label: 'FAQ' },
];
