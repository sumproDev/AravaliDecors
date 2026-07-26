import type { Metadata } from "next";
import Image from "next/image";
import { Boxes, DraftingCompass, Handshake, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import { ProcessSection } from "@/components/home/ProcessSection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Aravali Marbles, a Purnea-based supplier of tiles, plumbing products, sanitaryware, interior materials, tanks, adhesives and composite granite serving nearby Bihar.",
  keywords: ["about Aravali Marbles", "tiles supplier Purnea", "tiles supplier Katihar", "pipes and fittings", "sanitaryware supplier Bihar", "interior products"],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Aravali Marbles",
    description: "Material knowledge, considered selection and practical installation support for residential and commercial interiors.",
    url: "/about",
    images: [{ url: "/images/about/showroom.jpg", alt: "Aravali Marbles surface design expertise" }],
  },
};

const values = [
  { icon: ShieldCheck, title: "Quality-Led Selection", text: "We look beyond appearance to help assess finish, durability, maintenance and suitability for the intended wall or floor." },
  { icon: Boxes, title: "A Coordinated Collection", text: "Granite, marble, tiles, panels, flooring and bathroom surfaces can be considered together for a more coherent material palette." },
  { icon: DraftingCompass, title: "Practical Design Guidance", text: "Scale, grout, pattern direction, edge details and transitions are discussed before installation decisions are made." },
  { icon: Handshake, title: "Support From Start to Finish", text: "Our team assists with product selection, measurement, estimation, cutting, fitting and post-installation guidance." },
];

export default function AboutPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="About Us"
        title="Materials Chosen With Purpose. Spaces Finished With Care."
        intro="Aravali Marbles helps homeowners, designers and businesses choose surface materials that balance beauty, performance and practical everyday use."
        image="/images/about/showroom.jpg"
        imageAlt="Premium interior surfaces presented by Aravali Marbles"
      />

      <section className="section page-intro-section">
        <div className="shell editorial-split">
          <div className="editorial-copy">
            <p className="eyebrow">A dependable material partner</p>
            <h2>Helping Purnea, Katihar & Nearby Bihar Build Better-Looking, Longer-Lasting Interiors</h2>
            <p>Choosing a surface is about more than colour. The right material must suit the room, expected footfall, moisture exposure, cleaning routine, installation base and overall design language. We bring these considerations together so customers can make clearer, more confident decisions.</p>
            <p>Our collection covers floor and wall tiles, pipes and fittings, sanitaryware and faucets, plywood, laminates, doors and frames, tanks, adhesives and composite granite. Interior designing services include modular kitchens, wardrobes, false ceilings, wall panels and TV cabinets.</p>
          </div>
          <div className="editorial-image">
            <Image src="/images/hero/stone-gallery-hero-v2.png" alt="Granite, marble and tile samples in a premium materials gallery" fill sizes="(max-width: 800px) 100vw, 48vw" />
          </div>
        </div>
      </section>

      <section className="section page-tint-section">
        <div className="shell">
          <div className="page-section-heading"><p className="eyebrow">What guides our work</p><h2>Expertise You Can Use at Every Stage</h2><p>Clear advice and careful coordination help a beautiful material perform as intended once it reaches the site.</p></div>
          <div className="info-card-grid info-card-grid--four">
            {values.map(({ icon: Icon, title, text }) => (
              <article className="info-card" key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell content-columns">
          <div><p className="eyebrow">How we add value</p><h2>From Material Idea to Finished Surface</h2></div>
          <div className="prose-stack">
            <p>We help narrow a broad market into a practical shortlist. For flooring, that may mean comparing slip resistance, scratch visibility, joint layouts and maintenance. For walls, the focus may shift to panel scale, bookmatching, lighting, substrate preparation and clean edge treatment.</p>
            <p>Measurements and estimates are reviewed with the selected format in mind, helping account for cuts, pattern alignment and reasonable wastage. Installation support then focuses on careful handling, appropriate fixing methods and a refined final finish.</p>
            <ul className="check-list">
              <li>Residential renovations and new interiors</li>
              <li>Retail, office, hospitality and commercial surfaces</li>
              <li>Feature walls, flooring, bathrooms and exterior applications</li>
              <li>Material coordination across connected rooms</li>
            </ul>
          </div>
        </div>
      </section>

      <ProcessSection />
      <PageCTA title="Planning a Renovation or New Interior?" text="Tell us what you are building. We will help you compare suitable materials, finishes, formats and installation requirements." />
    </main>
  );
}
