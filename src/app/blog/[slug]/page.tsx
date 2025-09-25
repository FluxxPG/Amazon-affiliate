import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";
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

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  return (
    <article className="prose dark:prose-invert max-w-none py-10">
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


