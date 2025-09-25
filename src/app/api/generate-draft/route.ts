import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { title, category } = body as { title?: string; category?: string };
  if (!title) return NextResponse.json({ error: "Missing title" }, { status: 400 });
  // Placeholder: call LLM or templates to draft MDX content
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const mdx = `---\ntitle: ${JSON.stringify(title)}\nslug: ${slug}\ncategory: ${category ?? "setup-guides"}\ndate: ${new Date().toISOString().slice(0,10)}\nauthor: Editorial Team\nfeatured: false\nexcerpt: Draft generated outline for ${title}.\n---\n\n## Outline\n\n- Introduction\n- Key features and specs\n- Pros and cons\n- Buying advice\n- FAQs\n`;
  return NextResponse.json({ slug, content: mdx });
}


