import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  slug: string;
  category: string;
  date: string;
  author: string;
  tags?: string[];
  affiliateLinks?: { label: string; href: string }[];
  featuredImage?: string;
  excerpt?: string;
  featured?: boolean;
};

export type Post = PostFrontmatter & {
  content: string;
  readingTimeMinutes: number;
};

const postsDir = path.join(process.cwd(), "src", "content", "posts");

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const full = path.join(postsDir, file);
    const source = fs.readFileSync(full, "utf-8");
    const { data, content } = matter(source);
    const fm = data as PostFrontmatter;
    const readingTimeMinutes = Math.max(1, Math.round(content.split(/\s+/).length / 200));
    return { ...fm, content, readingTimeMinutes } as Post;
  });
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostBySlug(slug: string): Post | undefined {
  const all = getAllPosts();
  return all.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export const CATEGORIES: { slug: string; title: string }[] = [
  { slug: "smartwatches", title: "Smartwatches" },
  { slug: "laptops", title: "Laptops" },
  { slug: "tvs", title: "TVs" },
  { slug: "tablets", title: "Tablets" },
  { slug: "mobile-accessories", title: "Mobile Accessories" },
  { slug: "smart-home", title: "Smart Home" },
  { slug: "budget-tech", title: "Budget Tech" },
  { slug: "setup-guides", title: "Setup Guides" },
  { slug: "product-comparisons", title: "Product Comparisons" },
  { slug: "seasonal-deals", title: "Seasonal Deals" },
];


