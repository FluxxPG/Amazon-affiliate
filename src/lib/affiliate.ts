export function buildAmazonAffiliateUrl(rawUrl: string): string {
  try {
    const url = new URL(rawUrl);
    // If it's an Amazon link, route through /go to enable geo tags and tracking
    if (url.hostname.includes("amazon.")) {
      const site = process.env.NEXT_PUBLIC_SITE_URL ?? "";
      const go = new URL("/go", site || "http://localhost:3000");
      go.searchParams.set("url", url.toString());
      return go.toString();
    }
    return rawUrl;
  } catch {
    return rawUrl;
  }
}

export function externalRelAttributes(): string {
  return "nofollow sponsored noopener noreferrer";
}


