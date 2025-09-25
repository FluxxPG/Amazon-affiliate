export function buildAmazonAffiliateUrl(rawUrl: string): string {
  try {
    const url = new URL(rawUrl);
    const tag = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG;
    if (tag && !url.searchParams.has("tag")) {
      url.searchParams.set("tag", tag);
    }
    return url.toString();
  } catch {
    return rawUrl;
  }
}

export function externalRelAttributes(): string {
  return "nofollow sponsored noopener noreferrer";
}


