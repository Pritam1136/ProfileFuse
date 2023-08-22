import { defineCollection, z } from "astro:content";

const userCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    username: z.string(),
    content: z.string(),
  }),
});

export const collection = {
  data: userCollection,
};
