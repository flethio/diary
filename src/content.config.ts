import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod'; // Bisa juga dari 'astro/zod'

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(), // Kita pakai 'date' sesuai output bot
        timestamp: z.string(),
        writer_age_days: z.string(),
        mood: z.string().optional(),
        // Opsional: jika kamu masih ingin pakai fitur gambar atau deskripsi manual
        description: z.string().optional(),
        heroImage: z.string().optional(),
    }),
});

export const collections = { blog };