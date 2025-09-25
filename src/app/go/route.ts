import { NextRequest, NextResponse } from "next/server";

// Map of ISO country code to affiliate tag
const COUNTRY_TAGS: Record<string, string> = {
  IN: process.env.NEXT_PUBLIC_AMAZON_TAG_IN || "",
  US: process.env.NEXT_PUBLIC_AMAZON_TAG_US || "",
  GB: process.env.NEXT_PUBLIC_AMAZON_TAG_GB || "",
  CA: process.env.NEXT_PUBLIC_AMAZON_TAG_CA || "",
  DE: process.env.NEXT_PUBLIC_AMAZON_TAG_DE || "",
};

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  if (!url) return NextResponse.redirect(new URL("/", req.url));
  let country = req.headers.get("x-vercel-ip-country") || req.headers.get("cf-ipcountry") || "";
  country = country.toUpperCase();
  const tag = COUNTRY_TAGS[country] || process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG || "";
  try {
    const target = new URL(url);
    if (tag) target.searchParams.set("tag", tag);
    return NextResponse.redirect(target.toString(), { status: 302, headers: { "Cache-Control": "public, max-age=600" } });
  } catch {
    return NextResponse.redirect(new URL("/", req.url));
  }
}


