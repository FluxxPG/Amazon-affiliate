import Link from "next/link";
import { getPostsByCategory, CATEGORIES } from "@/lib/content";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const posts = getPostsByCategory(params.slug);
  const cat = CATEGORIES.find((c) => c.slug === params.slug);
  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold tracking-tight">{cat?.title ?? params.slug}</h1>
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


