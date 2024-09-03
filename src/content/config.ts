import { defineCollection, z } from "astro:content";

const writings = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		tags: z.array(z.string()).optional(),
		featuredImage: z.object({
			url: z.string(),
			alt: z.string(),
		}).optional(),		
		summary: z.string().optional(),
		mastodon: z.string().optional(),
	}),
});


const comments = defineCollection({
	schema: z.object({
		author: z.string(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		mastodon: z.string()
	}),
});

export const collections = { comments, writings }