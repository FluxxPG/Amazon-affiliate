type Rating = {
  title: string;
  score: number; // 0-5
  pros?: string[];
  cons?: string[];
  badges?: string[];
};

export default function RatingCard({ title, score, pros = [], cons = [], badges = [] }: Rating) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(score));
  return (
    <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
      <div className="flex items-center gap-2">
        <h3 className="font-medium text-lg">{title}</h3>
        {badges.map((b) => (
          <span key={b} className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">{b}</span>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-1">
        {stars.map((on, i) => (
          <span key={i}>{on ? "★" : "☆"}</span>
        ))}
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{score.toFixed(1)} / 5</span>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        {pros.length ? (
          <div>
            <div className="font-medium">Pros</div>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {pros.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {cons.length ? (
          <div>
            <div className="font-medium">Cons</div>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {cons.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}


