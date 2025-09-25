"use client";
import { useState } from "react";

export function HelpfulVote() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center gap-2 text-sm">
      <button onClick={() => setCount((c) => c + 1)} className="rounded border px-2 py-1 hover:bg-black/5 dark:hover:bg-white/5">👍 Helpful</button>
      <span>{count}</span>
    </div>
  );
}

export function SimplePoll() {
  const [choice, setChoice] = useState<string | null>(null);
  return (
    <div className="mt-4 rounded border border-black/10 dark:border-white/10 p-3">
      <div className="font-medium">What should we review next?</div>
      <div className="mt-2 flex gap-2 text-sm">
        {["Smartwatch", "Laptop", "TV"].map((opt) => (
          <button key={opt} onClick={() => setChoice(opt)} className={`rounded border px-2 py-1 ${choice === opt ? "bg-black text-white dark:bg-white dark:text-black" : "hover:bg-black/5 dark:hover:bg-white/5"}`}>{opt}</button>
        ))}
      </div>
      {choice && <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">Thanks! You voted: {choice}</div>}
    </div>
  );
}


