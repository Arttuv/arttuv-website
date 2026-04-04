import { defineCollection, reference } from "astro:content"
import { z } from "zod"
import { glob } from "astro/loaders"

const writings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writings" }),
  schema: z.object({
    title: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
    mastodon: z.string().optional(),
    updates: z.array(z.object({
      date: z.string(),
      text: z.string(),
    })).optional(),
  }),
})

const comments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/comments" }),
  schema: z.object({
    author: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    mastodon: z.string().optional(),
    internalLink: reference("writings").optional(),
  }),
})

export const collections = { comments, writings }
