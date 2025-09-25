import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <p className="max-w-lg">
            Tech Guide Hub is reader-supported. When you buy through links on our site, we may earn an affiliate commission.
          </p>
          <nav className="flex items-center gap-4">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/deals" className="hover:underline">Deals</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
          </nav>
        </div>
        <div className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} Tech Guide Hub. All rights reserved.</div>
      </div>
    </footer>
  );
}


