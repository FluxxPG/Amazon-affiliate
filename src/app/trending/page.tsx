import Link from "next/link";
import data from "@/content/trending.json";

export const metadata = { title: "Trending Deals" };

export default function TrendingPage() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Trending Deals</h1>
      {data.map((block) => (
        <div key={block.category} className="mt-8">
          <h2 className="text-xl font-semibold">{block.title}</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {block.items.map((it) => (
              <div key={it.asin} className="rounded-lg border border-black/10 dark:border-white/10 p-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">ASIN: {it.asin}</div>
                <Link href={`/go?url=${encodeURIComponent(it.url)}`} className="mt-2 inline-block rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5">Check Price on Amazon</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}


