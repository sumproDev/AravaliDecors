import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Building2, CookingPot, Hotel, House, ShowerHead, Store } from "lucide-react";
import { applications } from "@/data/site-data";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";

export const metadata: Metadata = {
  title: "Surface Applications for Homes & Commercial Spaces",
  description: "Discover suitable granite, marble, wall tile, floor tile, panel and flooring applications for homes, offices, hotels, shops and restaurants.",
  keywords: ["granite wall applications", "floor tiles for homes", "commercial flooring Delhi NCR", "marble feature walls", "bathroom tile solutions"],
  alternates: { canonical: "/applications" },
  openGraph: {
    title: "Surface Solutions for Every Space",
    description: "Material ideas and application guidance for residential, retail, workplace and hospitality interiors.",
    url: "/applications",
    images: [{ url: "/images/products/granite-wall-floor-v2.png", alt: "Granite tiles applied to wall and floor surfaces" }],
  },
};

const spaceGuides = [
  { icon: House, title: "Living & Bedroom Areas", text: "Use large-format tiles, marble features, warm panels or resilient flooring to establish the main character of the home while keeping daily care practical." },
  { icon: CookingPot, title: "Kitchens", text: "Prioritise stain resistance, cleanability, joint planning and finishes that work across floors, backsplashes and vertical surfaces." },
  { icon: ShowerHead, title: "Bathrooms", text: "Coordinate wall and floor tiles around moisture, grip, drainage, cleaning and the visual scale of the room." },
  { icon: Building2, title: "Offices", text: "Balance professional appearance with acoustic comfort, traffic resistance, maintenance access and easy replacement where required." },
  { icon: Store, title: "Retail & Showrooms", text: "Create strong first impressions with statement slabs, durable floors, branded colour palettes and feature walls designed for lighting." },
  { icon: Hotel, title: "Hospitality", text: "Specify surfaces around guest experience, repeated maintenance, high footfall and consistent visual quality across many spaces." },
];

export default function ApplicationsPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Applications"
        title="The Right Surface for the Way Each Space Works"
        intro="Material selection changes with moisture, traffic, cleaning, lighting and design intent. Explore practical surface directions for residential and commercial interiors."
        image="/images/products/granite-wall-floor-v2.png"
        imageAlt="Textured granite wall tiles and polished granite floor tiles"
      />

      <section className="section page-intro-section">
        <div className="shell content-columns">
          <div><p className="eyebrow">Application-first thinking</p><h2>Start With the Space, Then Select the Surface</h2></div>
          <div className="prose-stack"><p>The same material can behave differently depending on where and how it is installed. A polished surface may create depth on a feature wall, while a busier floor may need a lower-sheen finish that is easier to live with. Format, grout, lighting and adjoining materials all influence the final result.</p><p>We help align material choices with the room’s practical conditions, visual role and expected maintenance, reducing the risk of selecting only from a small sample without considering the whole space.</p></div>
        </div>
      </section>

      <section className="section applications-page-section">
        <div className="shell">
          <div className="page-section-heading"><p className="eyebrow">Room-by-room inspiration</p><h2>Explore Surfaces in Context</h2><p>See how tiles, stone, panels and flooring contribute to different environments.</p></div>
          <div className="applications-page-grid">
            {applications.map((item) => (
              <article key={item.name}>
                <div className="applications-page-grid__image"><Image src={item.image} alt={`${item.name} surface application`} fill sizes="(max-width: 700px) 100vw, 33vw" /></div>
                <div><span>{item.text}</span><h3>{item.name}</h3><ArrowUpRight /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-tint-section">
        <div className="shell">
          <div className="page-section-heading"><p className="eyebrow">Planning guidance</p><h2>Key Considerations by Space Type</h2></div>
          <div className="info-card-grid info-card-grid--three">
            {spaceGuides.map(({ icon: Icon, title, text }) => <article className="info-card" key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell content-columns">
          <div><p className="eyebrow">Before you decide</p><h2>Four Questions That Improve Material Selection</h2></div>
          <ol className="number-list">
            <li><span>01</span><div><h3>What conditions will the surface face?</h3><p>Consider moisture, sunlight, footfall, dirt, cleaning products and the chance of impact or scratching.</p></div></li>
            <li><span>02</span><div><h3>How should the space feel?</h3><p>Reflective, calm, warm, dramatic or textured finishes create very different responses even in the same colour family.</p></div></li>
            <li><span>03</span><div><h3>What format suits the proportions?</h3><p>Tile and slab dimensions influence joint frequency, cutting, pattern continuity and perceived room scale.</p></div></li>
            <li><span>04</span><div><h3>How will adjoining surfaces meet?</h3><p>Transitions between wall, floor, cabinetry and thresholds should be resolved before work begins.</p></div></li>
          </ol>
        </div>
      </section>

      <PageCTA title="Choosing Materials for a Specific Room?" text="Share the application and site conditions. We will help identify suitable surface types, finishes and formats." />
    </main>
  );
}
