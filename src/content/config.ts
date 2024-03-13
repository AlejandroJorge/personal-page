import { allowedLanguages } from "@/config/language";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    pathname: z.string(),
    lang: z.enum(allowedLanguages),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repository: z.string().url(),
    demo: z.string().url(),
    pathname: z.string(),
    lang: z.enum(allowedLanguages),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
