"use client";
import { useState } from "react";

export default function LinkBuilderPage() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const tag = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG ?? "";

  function build() {
    if (!url) return;
    try {
      const u = new URL(url);
      if (!u.hostname.includes("amazon.")) {
        setResult("Not an Amazon URL");
        return;
      }
      if (tag) u.searchParams.set("tag", tag);
      const go = `${site}/go?url=${encodeURIComponent(u.toString())}`;
      setResult(go);
    } catch {
      setResult("Invalid URL");
    }
  }

  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Affiliate Link Builder</h1>
      <div className="mt-6 flex gap-2">
        <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Paste Amazon product URL" className="flex-1 px-3 py-2 rounded-md border border-black/10 dark:border-white/10" />
        <button onClick={build} className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black">Build</button>
      </div>
      {result && (
        <div className="mt-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">Your tracking link:</div>
          <code className="break-all text-sm">{result}</code>
        </div>
      )}
    </section>
  );
}


