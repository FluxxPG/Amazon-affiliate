import { slugifyHeading } from "@/lib/slugify";
import React from "react";
import ProductComparisonTable from "@/components/ProductComparisonTable";
import RatingCard from "@/components/RatingCard";

export type MDXComponents = Record<string, React.ComponentType<{ children: React.ReactNode }>>;

function createHeading(level: number) {
  const Tag = ("h" + level) as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return function Heading({ children }: { children: React.ReactNode }) {
    const text = typeof children === "string" ? children : Array.isArray(children) ? children.join(" ") : String(children);
    const id = slugifyHeading(text);
    return React.createElement(
      Tag,
      { id },
      React.createElement("a", { href: `#${id}` }, children)
    );
  };
}

export const mdxComponents: MDXComponents = {
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  ProductComparisonTable: ProductComparisonTable as unknown as React.ComponentType<{ children: React.ReactNode }>,
  RatingCard: RatingCard as unknown as React.ComponentType<{ children: React.ReactNode }>,
};


