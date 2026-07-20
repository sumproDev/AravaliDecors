import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bath, Columns3, Gem, Grid3X3, Layers3, PanelsTopLeft } from "lucide-react";
import { products } from "@/data/site-data";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";

export const metadata: Metadata = {
  title: "Granite, Marble, Tiles & Surface Products",
  description: "Explore granite tiles, marble slabs, wall and floor tiles, PVC panels, WPC louvers, SPC flooring and bathroom surfaces in Delhi NCR.",
  keywords: ["granite tiles Delhi NCR", "marble tiles and slabs", "wall and floor tiles", "PVC wall panels", "WPC louvers", "SPC flooring"],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Granite, Marble, Tiles & Surface Collections",
    description: "Compare premium natural stone, tile, panel and flooring products for residential and commercial spaces.",
    url: "/products",
    images: [{ url: "/images/products/marble-tile-collection-v2.png", alt: "Premium marble tile collection" }],
  },
};

const materialGroups = [
  { icon: Gem, title: "Granite & Natural Stone", text: "Dense, durable surfaces for statement flooring, wall cladding, stairs, counters and demanding interior or exterior applications." },
  { icon: Grid3X3, title: "Wall & Floor Tiles", text: "Porcelain and ceramic formats selected for kitchens, bathrooms, living areas, commercial floors and easy-care feature walls." },
  { icon: Columns3, title: "Marble Tiles & Slabs", text: "Natural veining, polished depth and refined honed finishes for floors, wall features, vanities and elegant architectural details." },
  { icon: PanelsTopLeft, title: "Panels & Louvers", text: "PVC sheets, decorative panels and WPC louvers that introduce marble looks, timber warmth, texture and linear rhythm." },
  { icon: Layers3, title: "SPC, Vinyl & Wooden Flooring", text: "Comfortable, resilient flooring options designed for quick installation, everyday use and coordinated interior schemes." },
  { icon: Bath, title: "Bathroom Surfaces", text: "Coordinated wall tiles, floor tiles, vanity finishes and practical surface selections for wet and high-maintenance areas." },
];

const finishes = [
  { title: "Polished", text: "A reflective finish that intensifies stone colour and veining. Best considered alongside slip, glare and maintenance requirements." },
  { title: "Honed", text: "A smooth, low-sheen surface with a softer architectural character and less pronounced reflection." },
  { title: "Textured", text: "Flamed, brushed or structured surfaces that add grip and tactile depth to walls, exterior zones and selected floors." },
  { title: "Satin & Matt", text: "Balanced low-gloss finishes suited to contemporary interiors and spaces where easy visual maintenance matters." },
];

export default function ProductsPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Products"
        title="Surfaces for Walls, Floors and Every Detail Between"
        intro="Explore granite, marble, tiles, panels and flooring with finishes selected for visual impact, durability and practical maintenance."
        image="/images/products/marble-tile-collection-v2.png"
        imageAlt="White, beige and green marble tile samples"
      />

      <section className="section page-intro-section">
        <div className="shell content-columns">
          <div><p className="eyebrow">The collection</p><h2>Choose by Material, Application and Finish</h2></div>
          <div className="prose-stack"><p>A good surface specification begins with the application. Wall cladding can prioritise pattern and scale, while flooring must respond to traffic, cleaning, grip and transition levels. Wet areas introduce additional requirements around joints, drainage and maintenance.</p><p>Our product range allows natural stone, tile, panel and resilient-flooring options to be compared together, making it easier to create a consistent palette across living rooms, bedrooms, kitchens, bathrooms, offices and commercial environments.</p></div>
        </div>
      </section>

      <section className="section page-tint-section">
        <div className="shell">
          <div className="page-section-heading"><p className="eyebrow">Browse by category</p><h2>A Complete Surface Collection</h2><p>Each category can be refined by colour, format, finish, maintenance expectations and intended use.</p></div>
          <div className="info-card-grid info-card-grid--three">
            {materialGroups.map(({ icon: Icon, title, text }) => <article className="info-card" key={title}><Icon /><h3>{title}</h3><p>{text}</p><Link href="/contact">Ask about this range <ArrowRight /></Link></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="page-section-heading"><p className="eyebrow">Featured materials</p><h2>Products Made Clear</h2><p>See the material itself, its finish and its intended wall or floor application.</p></div>
          <div className="product-grid collection-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image"><Image src={product.image} alt={product.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw" /></div>
                <div className="product-meta"><small>{product.category}</small><h3>{product.title}</h3><p>{product.detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-tint-section">
        <div className="shell">
          <div className="page-section-heading"><p className="eyebrow">Finish guide</p><h2>How Surface Finish Changes the Result</h2></div>
          <div className="finish-grid">{finishes.map((finish, index) => <article key={finish.title}><span>0{index + 1}</span><h3>{finish.title}</h3><p>{finish.text}</p></article>)}</div>
        </div>
      </section>

      <PageCTA title="Need Help Comparing Materials?" text="Bring your room measurements, inspiration images or application details. We will help you shortlist suitable products and finishes." />
    </main>
  );
}
