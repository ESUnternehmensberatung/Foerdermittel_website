import { defineCollection, z } from 'astro:content';

// Ratgeber: Fachartikel für Bestandsunternehmen. Eine Markdown-Datei pro Artikel.
// `entwurf: true` blendet einen Artikel aus, ohne ihn zu löschen.
const ratgeber = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datum: z.coerce.date(),
    stand: z.coerce.date().optional(),
    frage: z.string(),
    entwurf: z.boolean().default(false),
  }),
});

export const collections = { ratgeber };
