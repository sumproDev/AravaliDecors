import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/shared/FloatingActions";
import "./globals.css";

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aravalimarbles.in"),
  title: {
    default: "Aravali Marbles | Tiles, Plumbing & Interior Products",
    template: "%s | Aravali Marbles",
  },
  description:
    "Tiles, plumbing, sanitaryware, plywood, tanks, adhesives, composite granite and interior design in Purnea, Katihar and nearby Bihar.",
  keywords: [
    "Aravali Marbles",
    "floor and wall tiles",
    "pipes and fittings",
    "sanitaryware and faucets",
    "water tanks",
    "composite granite",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aravali Marbles | Complete Product Collections",
    description:
      "Tiles, plumbing products, sanitaryware, interior materials and focused interior designing services.",
    type: "website",
    locale: "en_IN",
    siteName: "Aravali Marbles",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Aravali Marbles — Premium materials. Precise finishes." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aravali Marbles",
    description: "Complete product collections and interior designing services.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeGoodsStore"],
    name: "Aravali Marbles",
    url: "https://aravalimarbles.in",
    image: "https://aravalimarbles.in/og.png",
    telephone: ["+91-76540-02202", "+91-62039-00400"],
    areaServed: ["Purnea", "Purnia", "Katihar", "Araria", "Kishanganj", "Madhepura", "Bhagalpur", "Bihar"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/aravalimarbles.co.in/",
      "https://www.instagram.com/aravali.marbles/",
    ],
    makesOffer: [
      "Floor and wall tiles",
      "Pipes and fittings",
      "Sanitaryware and faucets",
      "Plywood, laminates and doors",
      "Water tanks",
      "Tile adhesives and grouts",
      "Composite granite",
      "Interior designing",
    ],
  };

  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }} />
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
