import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/site-data";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";

export const metadata: Metadata = {
  title: "Tiles, Pipes, Sanitaryware, Tanks & Interior Products",
  description: "Explore floor and wall tiles, pipes and fittings, sanitaryware and faucets, plywood and doors, tanks, adhesives, composite granite and interior designing.",
  keywords: ["floor and wall tiles", "pipes and fittings", "sanitaryware and faucets", "water tanks", "tile adhesives", "composite granite", "interior designing"],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Complete Product Collections",
    description: "Open each category to explore its related products and trusted brand ranges.",
    url: "/products",
    images: [{ url: "/images/products/marble-tile-collection-v2.png", alt: "Aravali Marbles product collections" }],
  },
};

export default function ProductsPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Products"
        title="Choose a Collection to Explore Its Products"
        intro="Browse our eight main categories. Every card opens a dedicated page with the related products inside."
        image="/images/products/marble-tile-collection-v2.png"
        imageAlt="Floor and wall tile samples from the Aravali Marbles collection"
      />

      <section className="section">
        <div className="shell">
          <div className="page-section-heading">
            <p className="eyebrow">Main categories</p>
            <h2>What We Offer</h2>
            <p>Open a collection to see its available product types and ranges.</p>
          </div>
          <div className="product-grid collection-grid">
            {categories.map((category) => (
              <Link className="product-card" href={category.href} key={category.title}>
                <div className="product-image">
                  <Image src={category.image} alt={category.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw" />
                  <span>View products <ArrowRight /></span>
                </div>
                <div className="product-meta"><small>Collection</small><h3>{category.title}</h3><p>{category.text}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTA title="Need Help Finding a Product?" text="Open the relevant collection or contact our team with the product name, application and quantity required." />
    </main>
  );
}
