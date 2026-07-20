import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardCheck, Layers3, Ruler, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import { ProcessSection } from "@/components/home/ProcessSection";

export const metadata: Metadata = {
  title: "Surface Projects & Design Possibilities",
  description: "Explore marble, granite, tile, wall-panel and flooring project possibilities for living spaces, bathrooms, offices, retail and hospitality interiors.",
  keywords: ["marble interior projects", "granite flooring projects", "tile installation ideas", "wall panel projects Delhi NCR", "commercial surface projects"],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Surface Project Ideas by Aravali Marbles",
    description: "Explore coordinated surface directions for residential and commercial projects.",
    url: "/projects",
    images: [{ url: "/images/hero/stone-gallery-hero-v2.png", alt: "Premium stone and tile project materials" }],
  },
};

const projectDirections = [
  { title: "Bookmatched Living-Room Feature", type: "Marble wall application", image: "/images/products/marble-wall.jpg", text: "Large marble-look surfaces create continuity behind media units and statement walls when veins, joints and lighting are planned together." },
  { title: "Warm Bedroom Flooring", type: "SPC and resilient flooring", image: "/images/products/bedroom-flooring.jpg", text: "Timber-look flooring brings warmth underfoot while supporting practical cleaning and a calm, coordinated bedroom palette." },
  { title: "Granite Wall & Floor Gallery", type: "Natural stone application", image: "/images/products/granite-wall-floor-v2.png", text: "Contrasting granite finishes can define wall and floor planes while keeping colour and mineral texture visually connected." },
  { title: "Refined Bathroom Surfaces", type: "Tiles and vanity finishes", image: "/images/products/bathroom.jpg", text: "A restrained combination of wall tile, safer floor finish and vanity surface gives wet areas clarity and long-term practicality." },
  { title: "Commercial Statement Interior", type: "High-impact surfaces", image: "/images/products/premium-living.jpg", text: "Durable large-format materials and controlled feature surfaces support a premium identity in customer-facing environments." },
  { title: "Textured Office Environment", type: "Panels and resilient floors", image: "/images/applications/office.jpg", text: "Wall rhythm, low-maintenance flooring and neutral stone tones can give workplaces depth without visual distraction." },
];

const support = [
  { icon: Ruler, title: "Site Understanding", text: "Measurements, room proportions, substrate conditions and junctions are considered before quantities and layouts are finalised." },
  { icon: Layers3, title: "Material Coordination", text: "Wall, floor and feature materials are reviewed together so colour, scale, sheen and transitions feel intentional." },
  { icon: Sparkles, title: "Finish Detailing", text: "Vein direction, tile alignment, grout tone, edge treatment and lighting response are part of the visual planning." },
  { icon: ClipboardCheck, title: "Execution Support", text: "Cutting, fitting, installation sequencing and final care guidance help protect the chosen design direction on site." },
];

export default function ProjectsPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Projects"
        title="Surface Ideas Built Around Real Spaces"
        intro="Explore project directions for stone, tile, panel and flooring applications, then work with our team to adapt the right combination to your site."
        image="/images/hero/stone-gallery-hero-v2.png"
        imageAlt="Marble slabs and granite tiles prepared for interior projects"
      />

      <section className="section page-intro-section">
        <div className="shell content-columns">
          <div><p className="eyebrow">Project possibilities</p><h2>See Materials as Part of a Complete Interior</h2></div>
          <div className="prose-stack"><p>Successful surface projects are coordinated rather than collected. The wall finish, floor format, adjoining joinery, light temperature and viewing distance should support one another. This page brings together practical design directions to help customers visualise how individual products can become a complete material story.</p><p>Every site is different. These examples are intended as inspiration for residential and commercial briefs and can be adapted around room dimensions, budget, use and preferred maintenance level.</p></div>
        </div>
      </section>

      <section className="section projects-gallery-section">
        <div className="shell">
          <div className="page-section-heading"><p className="eyebrow">Selected directions</p><h2>Ideas for Walls, Floors and Feature Surfaces</h2></div>
          <div className="projects-gallery">
            {projectDirections.map((project, index) => (
              <article className={index === 0 || index === 5 ? "projects-gallery__wide" : ""} key={project.title}>
                <div className="projects-gallery__image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
                <div className="projects-gallery__copy"><span>{project.type}</span><h3>{project.title}</h3><p>{project.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-tint-section">
        <div className="shell">
          <div className="page-section-heading"><p className="eyebrow">Project support</p><h2>Details That Carry an Idea Through to Site</h2></div>
          <div className="info-card-grid info-card-grid--four">{support.map(({ icon: Icon, title, text }) => <article className="info-card" key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <ProcessSection />
      <PageCTA title="Have a Project in Mind?" text="Share your plans, measurements or inspiration. We will help translate them into a considered surface palette and practical material shortlist." />
    </main>
  );
}
