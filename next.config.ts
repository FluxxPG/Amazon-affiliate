import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Keep MDX config simple to ensure mdx-rs options remain serializable
const withMDX = createMDX({ extension: /\.mdx?$/ });

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
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
