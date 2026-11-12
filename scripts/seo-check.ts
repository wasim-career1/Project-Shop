import { articles, categories, products } from "../src/data/catalogue";
const seen = new Set<string>();
const errors: string[] = [];
for (const entry of [...articles, ...categories, ...products]) {
  if (!entry.slug) errors.push("Missing slug");
  if (seen.has(entry.slug)) errors.push(`Duplicate slug: ${entry.slug}`);
  seen.add(entry.slug);
}
for (const a of articles)
  if (!a.title || !a.summary) errors.push(`Missing title or description: ${a.slug}`);
for (const p of products)
  if (!p.name || !p.description) errors.push(`Missing product metadata: ${p.slug}`);
for (const file of new Bun.Glob("src/routes/**/*.tsx").scanSync(".")) {
  if (file.includes("__root") || file.includes("media.") || file.includes("sitemap")) continue;
  const source = await Bun.file(file).text();
  if (!source.includes("head:")) errors.push(`Missing route metadata: ${file}`);
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else
  console.log(
    "Local content and route metadata checks passed. Verify canonical domain and uploaded-image alt text before launch.",
  );
