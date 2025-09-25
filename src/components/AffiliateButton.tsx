"use client";
import { buildAmazonAffiliateUrl, externalRelAttributes } from "@/lib/affiliate";

type AffiliateButtonProps = {
  href: string;
  children?: React.ReactNode;
  className?: string;
};

export default function AffiliateButton({ href, children = "Check Price on Amazon", className }: AffiliateButtonProps) {
  const url = buildAmazonAffiliateUrl(href);
  return (
    <a
      href={url}
      target="_blank"
      rel={externalRelAttributes()}
      className={`inline-flex items-center justify-center rounded-md bg-amber-500 px-4 py-2 font-medium text-white shadow hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 ${className ?? ""}`}
    >
      {children}
    </a>
  );
}


