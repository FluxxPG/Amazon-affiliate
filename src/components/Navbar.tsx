"use client";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
        <Link href="/" className="font-semibold text-lg tracking-tight">Tech Guide Hub</Link>
        <nav className="ml-6 hidden md:flex items-center gap-4 text-sm">
          <Link href="/deals" className="hover:underline">Deals</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/newsletter" className="hover:underline">Newsletter</Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <form action="/" onSubmit={(e) => { e.preventDefault(); if (query) window.location.href = `/search?q=${encodeURIComponent(query)}`; }}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts"
              className="px-3 py-1.5 rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-sm"
            />
          </form>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}


