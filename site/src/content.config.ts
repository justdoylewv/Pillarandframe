// The work collection. Adding a case study is adding one Markdown file in
// src/content/work/. Astro 7 reads collections from this file at src/, not
// from src/content/config.ts as older versions did.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    trade: z.string(),
    city: z.string(),
    offer: z.enum(["commercial", "operations", "residential"]),
    featured: z.boolean().default(false),
    liveSite: z.string().optional(),
    headlineResult: z.string(),
    stats: z.array(z.object({ number: z.string(), label: z.string() })).length(4),
    quotes: z.array(z.object({ text: z.string(), name: z.string(), title: z.string() })),
    engagement: z.array(z.object({ title: z.string(), body: z.string() })).length(4),
    shift: z.object({
      before: z.object({ img: z.string(), body: z.string() }),
      now: z.object({ img: z.string(), body: z.string() }),
    }),
    built: z.object({ title: z.string(), items: z.array(z.string()) }),
    reel: z.string().optional(),
    thumb: z.string(),
  }),
});

export const collections = { work };
