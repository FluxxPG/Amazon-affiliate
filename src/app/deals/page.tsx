import AffiliateButton from "@/components/AffiliateButton";

export const metadata = { title: "Deals" };

const picks = [
  { title: "Budget Smartwatch", price: "₹2,999", href: "https://www.amazon.in/dp/B0XXXXXX" },
  { title: "Student Laptop", price: "₹54,999", href: "https://www.amazon.in/dp/B0YYYYYY" },
  { title: "4K Smart TV", price: "₹29,999", href: "https://www.amazon.in/dp/B0ZZZZZZ" },
];

export default function DealsPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Curated Deals</h1>
      <p className="mt-2 text-gray-700 dark:text-gray-300">Hand-picked Amazon deals updated weekly.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {picks.map((p) => (
          <div key={p.title} className="rounded-lg border border-black/10 dark:border-white/10 p-4">
            <h3 className="font-medium">{p.title}</h3>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">{p.price}</div>
            <AffiliateButton href={p.href} className="mt-4 w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}


