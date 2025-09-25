import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">We couldn&#39;t find what you were looking for.</p>
      <Link href="/" className="mt-6 inline-block rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2">Go home</Link>
    </div>
  );
}


