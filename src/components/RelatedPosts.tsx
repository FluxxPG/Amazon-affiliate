import Link from "next/link";
import { getPostsByCategory } from "@/lib/content";

export default function RelatedPosts({ category, currentSlug }: { category: string; currentSlug: string }) {
  const related = getPostsByCategory(category).filter((p) => p.slug !== currentSlug).slice(0, 4);
  if (!related.length) return null;
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold">Related posts</h2>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        {related.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block rounded-lg border border-black/10 dark:border-white/10 p-4 hover:bg-black/5 dark:hover:bg-white/5">
            <div className="text-sm text-amber-600">{p.category}</div>
            <div className="font-medium">{p.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}


