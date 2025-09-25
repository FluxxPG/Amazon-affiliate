import AffiliateButton from "./AffiliateButton";

type Spec = Record<string, string | number | boolean>;
type Product = { name: string; image?: string; price?: string; link: string; specs: Spec };

export default function ProductComparisonTable({ products, specOrder }: { products: Product[]; specOrder?: string[] }) {
  if (!products.length) return null;
  const keys = specOrder ?? Array.from(new Set(products.flatMap((p) => Object.keys(p.specs))));
  return (
    <div className="overflow-x-auto border border-black/10 dark:border-white/10 rounded-lg">
      <table className="min-w-full text-sm">
        <thead className="bg-black/5 dark:bg-white/5">
          <tr>
            <th className="p-3 text-left">Spec</th>
            {products.map((p) => (
              <th key={p.name} className="p-3 text-left">
                <div className="font-medium">{p.name}</div>
                {p.price && <div className="text-xs text-gray-600 dark:text-gray-400">{p.price}</div>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {keys.map((k) => (
            <tr key={k} className="border-t border-black/10 dark:border-white/10">
              <td className="p-3 font-medium">{k}</td>
              {products.map((p) => (
                <td key={p.name + k} className="p-3">{String(p.specs[k] ?? "—")}</td>
              ))}
            </tr>
          ))}
          <tr className="border-t border-black/10 dark:border-white/10">
            <td className="p-3 font-medium">Buy</td>
            {products.map((p) => (
              <td key={p.name + "-buy"} className="p-3">
                <AffiliateButton href={p.link} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}


