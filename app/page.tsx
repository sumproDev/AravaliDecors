import { HeroSection } from "@/components/home/HeroSection";
import { ProductCategories } from "@/components/home/ProductCategories";
import { AboutSection } from "@/components/home/AboutSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ApplicationsSection } from "@/components/home/ApplicationsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BrandPartners } from "@/components/home/BrandPartners";
import { QuoteCTA } from "@/components/home/QuoteCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Aravali Marbles",
  description:
    "Premium marble, PVC panels, tiles, wall panels, flooring and bathroom fittings with supply and installation support.",
  areaServed: "Delhi NCR",
  telephone: "+91-98765-43210",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi NCR",
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
        <ApplicationsSection />
        <ProcessSection />
        <TestimonialsSection />
        <BrandPartners />
        <QuoteCTA />
      </main>
    </>
  );
}
