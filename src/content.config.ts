import { defineCollection } from "astro:content"
import { z } from "zod"
import { glob } from "astro/loaders"

const dateField = z
  .string()
  .or(z.date())
  .transform((val) => new Date(val))

const discussionSchema = z.object({
  provider: z.string().optional(),
  id: z.string().optional(),
  url: z.string(),
  publishedAt: dateField.optional(),
})

const sourceSchema = z.object({
  provider: z.string(),
  id: z.string().optional(),
  url: z.string().optional(),
})

const writings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writings" }),
  schema: z.object({
    title: z.string(),
    pubDate: dateField,
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
    discussion: discussionSchema.optional(),
    updates: z.array(z.object({
      date: z.string(),
      text: z.string(),
    })).optional(),
  }),
})

const marginalia = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/marginalia" }),
  schema: z.object({
    pubDate: dateField,
    updatedDate: dateField.optional(),
    source: sourceSchema.optional(),
    discussion: discussionSchema.optional(),
    language: z.string().optional(),
    spoilerText: z.string().optional(),
    tags: z.array(z.string()).optional(),
    card: z.object({
      title: z.string(),
      url: z.string(),
      description: z.string().optional(),
      providerName: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
  }),
})

export const collections = { marginalia, writings }
