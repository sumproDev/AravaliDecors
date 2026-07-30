import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductCategories } from "@/components/home/ProductCategories";
import { AboutSection } from "@/components/home/AboutSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BrandPartners } from "@/components/home/BrandPartners";
import { QuoteCTA } from "@/components/home/QuoteCTA";

export const metadata: Metadata = {
  title: "Aravali Marbles Purnea | Tiles, Pipes, Sanitaryware & Interiors",
  description:
    "Aravali Marbles is a Purnea showroom for floor and wall tiles, pipes and fittings, sanitaryware, faucets, plywood, tanks, tile adhesives, composite granite and interior design services.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aravali Marbles Purnea",
    description:
      "Explore tiles, sanitaryware, plumbing, plywood, tanks, adhesives, composite granite and interior design services for Purnea and nearby Bihar.",
    url: "/",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Aravali Marbles product collections in Purnea" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeGoodsStore",
  name: "Aravali Marbles",
  url: "https://aravalimarbles.in",
  description:
    "Floor and wall tiles, pipes and fittings, sanitaryware, plywood, tanks, adhesives, composite granite and interior designing.",
  areaServed: ["Purnea", "Katihar", "Araria", "Kishanganj", "Madhepura", "Bhagalpur"],
  telephone: ["+91-76540-02202", "+91-62039-00400"],
  image: "https://aravalimarbles.in/og.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Vijendra Public School, Maranga",
    addressLocality: "Purnea",
    addressRegion: "Bihar",
    postalCode: "854301",
    addressCountry: "IN",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aravali Marbles",
  url: "https://aravalimarbles.in",
  inLanguage: "en-IN",
  description:
    "Product and service information for Aravali Marbles, a tiles, plumbing, sanitaryware and interior design showroom in Purnea.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main>
        <HeroSection />
        <ProductCategories />
        <AboutSection />
        <StatsSection />
        <FeaturedProducts />
        <WhyChooseUs />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <BrandPartners />
        <QuoteCTA />
      </main>
    </>
  );
}
