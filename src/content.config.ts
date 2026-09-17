import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// お知らせ記事。ファイル名は「YYYY-MM-DD-名前.md」。
// URL は /年/月/日/名前.html になる（日付は front matter の date を使う）。
const posts = defineCollection({
  loader: glob({
    pattern: '[0-9][0-9][0-9][0-9]-*.md',
    base: './src/content/posts',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
  }),
});

export const collections = { posts };
