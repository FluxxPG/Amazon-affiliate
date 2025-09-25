const fs = require("node:fs");
const path = require("node:path");

const topicsPath = path.join(process.cwd(), "src", "content", "topics.json");
if (!fs.existsSync(topicsPath)) {
  console.error("Missing src/content/topics.json");
  process.exit(1);
}
const topics = JSON.parse(fs.readFileSync(topicsPath, "utf-8"));

function slugify(title) {
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
    `tags: [${(t.tags || []).map((x) => JSON.stringify(x)).join(", ")}]\n` +
    `featured: false\n` +
    `excerpt: Draft outline for ${t.title}.\n` +
    `---\n\n`;
  const body = `## Introduction\n\nWrite an engaging intro tailored to search intent.\n\n## How We Pick\n\n- Criteria 1\n- Criteria 2\n\n## Top Picks\n\n- Pick 1\n- Pick 2\n- Pick 3\n\n## Comparison Table\n\n< ProductComparisonTable products={[]} />\n\n## Ratings\n\n< RatingCard title=\"Overall\" score={4.5} pros={[\"Pros 1\",\"Pros 2\"]} cons={[\"Cons 1\"]} />\n\n## FAQs\n\n- Q: ...\n- A: ...\n`;
  fs.writeFileSync(file, frontmatter + body, "utf-8");
}

console.log("Draft generation complete.");
