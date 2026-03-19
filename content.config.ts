// content.config.ts
import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'posts/**',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        type: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        img: z.array(z.string()).optional()
      })
    })
  }
})
