import Link from "next/link";
import { getAllPosts } from "@/lib/content";

export function generateStaticParams() {
  const tags = new Set<string>();
  getAllPosts().forEach((p) => p.tags?.forEach((t) => tags.add(t)));
  return Array.from(tags).map((t) => ({ tag: t }));
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = getAllPosts().filter((p) => p.tags?.includes(params.tag));
  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Tag: {params.tag}</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block rounded-lg border border-black/10 dark:border-white/10 p-4 hover:bg-black/5 dark:hover:bg-white/5">
            <div className="text-sm text-amber-600">{p.category}</div>
            <h3 className="mt-1 font-medium">{p.title}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}


