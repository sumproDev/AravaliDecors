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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Aravali Marbles",
  description:
    "Floor and wall tiles, pipes and fittings, sanitaryware, plywood, tanks, adhesives, composite granite and interior designing.",
  areaServed: ["Purnea", "Katihar", "Araria", "Kishanganj", "Madhepura", "Bhagalpur"],
  telephone: ["+91-76540-02202", "+91-62039-00400"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Purnea",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
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
