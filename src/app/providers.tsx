"use client";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import defaultSEO from "../../next-seo.config";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <DefaultSeo {...defaultSEO} />
      {children}
    </ThemeProvider>
  );
}


