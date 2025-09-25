import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-gfm")],
    rehypePlugins: [require("rehype-slug"), [require("rehype-autolink-headings"), { behavior: "wrap" }]],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
    ],
  },
  experimental: {
    mdxRs: true,
  },
};

export default withMDX(nextConfig);
