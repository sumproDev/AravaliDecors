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
    default: "Aravali Marbles Purnea | Tiles, Pipes, Sanitaryware & Interiors",
    template: "%s | Aravali Marbles",
  },
  description:
    "Aravali Marbles in Purnea supplies floor and wall tiles, pipes and fittings, sanitaryware, faucets, plywood, tanks, adhesives, composite granite and interior design services across nearby Bihar.",
  keywords: [
    "Aravali Marbles",
    "Aravali Marbles Purnea",
    "tiles showroom Purnea",
    "marble shop Purnia",
    "floor and wall tiles",
    "pipes and fittings",
    "sanitaryware and faucets",
    "water tanks",
    "composite granite",
    "interior designer Purnia",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  applicationName: "Aravali Marbles",
  authors: [{ name: "Aravali Marbles", url: "https://aravalimarbles.in" }],
  creator: "Aravali Marbles",
  publisher: "Aravali Marbles",
  category: "Building materials and interior design",
  openGraph: {
    title: "Aravali Marbles Purnea | Tiles, Pipes, Sanitaryware & Interiors",
    description:
      "Visit Aravali Marbles for tiles, plumbing products, sanitaryware, plywood, tanks, adhesives, composite granite and interior design services in Purnea.",
    url: "/",
    type: "website",
    locale: "en_IN",
    siteName: "Aravali Marbles",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Aravali Marbles showroom and product collections in Purnea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aravali Marbles Purnea",
    description:
      "Tiles, pipes, sanitaryware, plywood, tanks, adhesives, composite granite and interior designing services.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeGoodsStore"],
    name: "Aravali Marbles",
    url: "https://aravalimarbles.in",
    logo: "https://aravalimarbles.in/logo.jpeg",
    image: "https://aravalimarbles.in/og.png",
    telephone: ["+91-76540-02202", "+91-62039-00400"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Vijendra Public School, Maranga",
      addressLocality: "Purnea",
      addressRegion: "Bihar",
      postalCode: "854301",
      addressCountry: "IN",
    },
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-76540-02202",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-62039-00400",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }}
        />
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
