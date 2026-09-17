import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

const pad = (n: number) => String(n).padStart(2, '0');

// 旧サイト(Jekyll)と同じ /YYYY/MM/DD/名前.html の各部分
export function postParams(post: Post) {
  const d = post.data.date;
  return {
    year: String(d.getUTCFullYear()),
    month: pad(d.getUTCMonth() + 1),
    day: pad(d.getUTCDate()),
    slug: post.id.replace(/^\d{4}-\d{1,2}-\d{1,2}-/, ''),
  };
}

export function postUrl(post: Post) {
  const p = postParams(post);
  return `/${p.year}/${p.month}/${p.day}/${p.slug}.html`;
}

export function formatDate(d: Date) {
  return `${d.getUTCFullYear()}年${d.getUTCMonth() + 1}月${d.getUTCDate()}日`;
}

// 一覧用の短い抜粋（Markdown 記号を取り除く）
export function excerpt(body = '', max = 80) {
  const text = body
    .replace(/^#+\s+/gm, '') // 見出しの記号（見出しだけの記事もあるので文字は残す）
    .replace(/^\s*(-{3,}|[-*]\s+|>\s*)/gm, '') // 区切り線・箇条書き・引用
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // リンク
    .replace(/[*_`]+/g, '') // 強調
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

// 新しい順
export async function getPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
