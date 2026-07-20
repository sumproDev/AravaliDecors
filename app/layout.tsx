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
    default: "Aravali Marbles | Granite, Marble, Tiles & Flooring",
    template: "%s | Aravali Marbles",
  },
  description:
    "Premium marble, PVC panels, decorative wall panels, tiles, WPC louvers, flooring and bathroom fittings with installation support across Delhi NCR.",
  keywords: [
    "Aravali Marbles",
    "marble supplier Delhi NCR",
    "PVC wall panels",
    "floor tiles",
    "WPC louvers",
    "SPC flooring",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aravali Marbles | Surfaces Crafted for Remarkable Spaces",
    description:
      "Premium marble, tiles, PVC panels and flooring—supplied and installed with care.",
    type: "website",
    locale: "en_IN",
    siteName: "Aravali Marbles",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Aravali Marbles — Premium materials. Precise finishes." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aravali Marbles",
    description: "Premium materials. Precise finishes.",
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
