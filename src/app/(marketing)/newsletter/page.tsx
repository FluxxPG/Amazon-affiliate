export const metadata = { title: "Newsletter" };

export default function NewsletterPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Join our newsletter</h1>
      <form className="mt-6 flex gap-2" action="#" onSubmit={(e) => e.preventDefault()}>
        <input type="email" required placeholder="you@example.com" className="px-3 py-2 rounded-md border border-black/10 dark:border-white/10 flex-1" />
        <button className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black">Subscribe</button>
      </form>
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">We send 1-2 emails per month. No spam.</p>
    </section>
  );
}


