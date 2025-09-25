import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Keep MDX config simple to ensure mdx-rs options remain serializable
const withMDX = createMDX({ extension: /\.mdx?$/ });

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://reconcileai.in",
    NEXT_PUBLIC_AMAZON_TAG_US: process.env.NEXT_PUBLIC_AMAZON_TAG_US || "techguidehub-20",
    NEXT_PUBLIC_AMAZON_AFFILIATE_TAG: process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG || "techguidehub-20",
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
    ],
  },
  experimental: { mdxRs: true },
};

export default withMDX(nextConfig);
