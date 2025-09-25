import { type DefaultSeoProps } from "next-seo";

const defaultSEO: DefaultSeoProps = {
  titleTemplate: "%s | Tech Guide Hub",
  defaultTitle: "Tech Guide Hub",
  description: "Honest, data-driven electronics reviews and buying guides that save you money.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Tech Guide Hub",
  },
  twitter: {
    handle: "@techguidehub",
    site: "@techguidehub",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    { name: "theme-color", content: "#0f172a" },
  ],
};

export default defaultSEO;


