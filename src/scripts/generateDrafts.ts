import fs from "node:fs";
import path from "node:path";
import topics from "@/content/topics.json";

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const postsDir = path.join(process.cwd(), "src", "content", "posts");
if (!fs.existsSync(postsDir)) fs.mkdirSync(postsDir, { recursive: true });

for (const t of topics) {
  const slug = slugify(t.title);
  const file = path.join(postsDir, `${slug}.mdx`);
  if (fs.existsSync(file)) continue;
  const date = new Date().toISOString().slice(0, 10);
  const frontmatter = `---\n` +
    `title: ${JSON.stringify(t.title)}\n` +
    `slug: ${slug}\n` +
    `category: ${t.category}\n` +
    `date: ${date}\n` +
    `author: Editorial Team\n` +
    `tags: [${(t.tags || []).map((x: string) => JSON.stringify(x)).join(", ")}]\n` +
    `featured: false\n` +
    `excerpt: Draft outline for ${t.title}.\n` +
    `---\n\n`;
  const body = `## Overview\n\n- Who is this for\n- Key buying criteria\n\n## Top Picks\n\n- Pick 1\n- Pick 2\n- Pick 3\n\n## Comparison\n\n< ProductComparisonTable products={[]} />\n\n## Ratings\n\n< RatingCard title="Overall" score={4.5} pros={["Pros 1","Pros 2"]} cons={["Cons 1"]} />\n\n## FAQs\n\n- Q: ...\n- A: ...\n`;
  fs.writeFileSync(file, frontmatter + body, "utf-8");
}

console.log(`Draft generation complete.`);


