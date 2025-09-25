"use client";
import Giscus from "giscus";

export default function Comments() {
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO ?? "";
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID ?? "";
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? "General";
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? "";
  if (!repo || !repoId || !categoryId) return null;
  return (
    <Giscus
      id="comments"
      repo={repo}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}


