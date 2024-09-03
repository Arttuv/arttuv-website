import { defineCollection, reference, z } from "astro:content";

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

export const collections = { comments }