import data from "@/content/deals.json";
import AffiliateButton from "@/components/AffiliateButton";

export const metadata = { title: "Deals" };

export default function DealsPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Great Indian Festival & Top Deals</h1>
      <p className="mt-2 text-gray-700 dark:text-gray-300">Curated, category-wise deals. Click to check live prices on Amazon.</p>
      {data.map((block) => (
        <div key={block.category} className="mt-8">
          <h2 className="text-xl font-semibold">{block.title}</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {block.items.map((p) => (
              <div key={p.url} className="rounded-lg border border-black/10 dark:border-white/10 p-4">
                <h3 className="font-medium">{p.name}</h3>
                <AffiliateButton href={p.url} className="mt-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}


