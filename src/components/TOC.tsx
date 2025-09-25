type Heading = { id: string; text: string; level: number };

export default function TOC({ headings }: { headings: Heading[] }) {
  if (!headings.length) return null;
  return (
    <aside className="sticky top-24 max-h-[70vh] overflow-auto rounded-lg border border-black/10 dark:border-white/10 p-4 text-sm">
      <div className="font-medium mb-2">On this page</div>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} className={`pl-${(h.level - 1) * 3}`}>
            <a href={`#${h.id}`} className="hover:underline">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}


