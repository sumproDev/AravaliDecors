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
    "Floor and wall tiles, pipes and fittings, sanitaryware, plywood, tanks, adhesives, composite granite and interior designing across Delhi NCR.",
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
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
