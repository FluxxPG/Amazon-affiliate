import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const body = [
    "# AI crawler access policy",
    "# Allow AI agents that respect robots-like conventions.",
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${site}/sitemap.xml`,
  ].join("\n");
  return new NextResponse(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}


