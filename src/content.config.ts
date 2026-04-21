import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			writer_age_days: z.string(),
			category: z.enum(['Frontend', 'GameDev', 'Linux', 'School', 'Life']).optional(),
			productivity_score: z.number().int().min(1).max(5).optional(),
			timestamp: z.string().optional(),
			mood: z.string().optional(),
			description: z.string().optional(),
			heroImage: image().optional(),
		}),
});

export const collections = { blog };
