import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site-data";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";

export const metadata: Metadata = {
  title: "Interior Designing Services",
  description: "Explore interior designing services including modular kitchens, wardrobes, false ceilings, wall panels and TV cabinets.",
  keywords: ["interior designing", "modular kitchen", "wardrobes", "false ceiling", "wall panel", "TV cabinets"],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Interior Designing Services",
    description: "Interior design services focused on kitchens, storage, ceilings, walls and media units.",
    url: "/services",
    images: [{ url: "/images/products/premium-living.jpg", alt: "Interior designing services by Aravali Marbles" }],
  },
};

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Services"
        title="Interior Designing for Complete, Functional Spaces"
        intro="Our interior services focus on modular kitchens, wardrobes, false ceilings, wall panels and customized TV cabinets."
        image="/images/products/premium-living.jpg"
        imageAlt="Finished living room created through interior designing services"
      />

      <section className="section page-intro-section">
        <div className="shell content-columns">
          <div><p className="eyebrow">Interior Designing</p><h2>Designed Around Your Space and Daily Needs</h2></div>
          <div className="prose-stack">
            <p>Good interior design brings storage, materials, lighting and finishes together in a practical plan. Every service begins with the available space and how it needs to work.</p>
            <p>Choose one focused service or coordinate several interior elements for a consistent result across the room.</p>
            <ul className="check-list">
              <li>Layouts planned around room dimensions and movement</li>
              <li>Coordinated materials, colours, lighting and finishes</li>
              <li>Practical storage designed for everyday routines</li>
              <li>Clear guidance from initial idea to final detailing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section applications-page-section">
        <div className="shell">
          <div className="page-section-heading">
            <p className="eyebrow">Our services</p>
            <h2>Interior Design Services</h2>
            <p>Only the essential interior-design services, organized clearly.</p>
          </div>
          <div className="collection-product-grid service-detail-grid">
            {services.map((service, index) => (
              <article className="collection-product-card" key={service.name}>
                <div className="collection-product-card__image">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 920px) 50vw, 33vw"
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="collection-product-card__content">
                  <p className="collection-product-card__eyebrow">Interior Designing</p>
                  <h3>{service.name}</h3>
                  <p>{service.text}</p>
                  <Link href="/contact">Enquire about this service <ArrowRight /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCTA title="Planning Your Interiors?" text="Share your room measurements, design references and service requirements. Our team will help plan the right solution." />
    </main>
  );
}
