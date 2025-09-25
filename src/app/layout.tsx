import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tech Guide Hub",
    template: "%s | Tech Guide Hub",
  },
  description: "US-focused electronics reviews, buying guides, and deal picks.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://reconcileai.in"),
  openGraph: { locale: "en_US", siteName: "Tech Guide Hub" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Navbar />
          <main className="py-8 sm:py-10">
            <Container>{children}</Container>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
