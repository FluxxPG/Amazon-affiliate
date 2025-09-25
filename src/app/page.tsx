import Link from "next/link";
import { getAllPosts, CATEGORIES } from "@/lib/content";

export default function Home() {
  const posts = getAllPosts();
  const featured = posts.filter((p) => p.featured).slice(0, 3);
  const latest = posts.slice(0, 6);
  return (
    <div className="py-10">
      <section className="rounded-xl bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black p-8 border border-black/10 dark:border-white/10">
        <h1 className="text-3xl font-semibold tracking-tight">Tech guides that save you money</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-2xl">Editorial picks, honest reviews, and buyer’s guides for smartwatches, laptops, TVs, and more.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/deals" className="rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2">See Deals</Link>
          <Link href={`/category/${CATEGORIES[0].slug}`} className="rounded-md border border-black/10 dark:border-white/10 px-4 py-2">Explore Categories</Link>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Featured</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="block rounded-lg border border-black/10 dark:border-white/10 p-4 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="text-sm text-amber-600">{p.category}</div>
              <h3 className="mt-1 font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Latest</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="block rounded-lg border border-black/10 dark:border-white/10 p-4 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="text-sm text-amber-600">{p.category}</div>
              <h3 className="mt-1 font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Categories</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-sm hover:bg-black/5 dark:hover:bg-white/5">{c.title}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
