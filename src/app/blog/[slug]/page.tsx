import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import AffiliateButton from "@/components/AffiliateButton";
import Disclaimer from "@/components/Disclaimer";
import RelatedPosts from "@/components/RelatedPosts";
import BackToTop from "@/components/BackToTop";
import Comments from "@/components/Comments";
import { HelpfulVote, SimplePoll } from "@/components/Engagement";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const title = post.title;
  const description = post.excerpt ?? "";
  const canonical = `${url}/blog/${post.slug}`;
  const images = post.featuredImage ? [{ url: post.featuredImage }] : undefined;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "article", images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: [{ '@type': 'Person', name: post.author }],
    image: post.featuredImage ? [post.featuredImage] : undefined,
    keywords: post.tags?.join(', '),
    mainEntityOfPage: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'}/blog/${post.slug}`,
    description: post.excerpt,
  } as const;
  return (
    <article className="prose dark:prose-invert max-w-none py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()} · {post.readingTimeMinutes} min read</p>
      <div className="my-4"><Disclaimer /></div>
      {post.affiliateLinks?.length ? (
        <div className="my-6 flex gap-3 flex-wrap">
          {post.affiliateLinks.map((l) => (
            <AffiliateButton key={l.href} href={l.href}>{l.label || "Buy Now"}</AffiliateButton>
          ))}
        </div>
      ) : null}
      <MDXRemote source={post.content} />
      <HelpfulVote />
      <SimplePoll />
      <RelatedPosts category={post.category} currentSlug={post.slug} />
      <div className="mt-10"><Comments /></div>
      <BackToTop />
    </article>
  );
}


