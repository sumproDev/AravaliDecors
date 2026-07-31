import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CmsProduct } from "@/lib/cms/public";

export function ServicesSection({ services }: { services: CmsProduct[] }) {
  if (services.length === 0) return null;

  return (
    <section id="services" className="section applications-section">
      <div className="shell">
        <SectionHeading eyebrow="Interior Designing" title="Interior Design Services" intro="Focused services for kitchens, storage, ceilings, wall finishes and media units." />
        <div className="services-grid">
          {services.map((item, index) => (
            <Link className={`application-card service-card--${index + 1}`} href="/services" key={item.id}>
              <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 25vw" />
              <div><span>{item.description}</span><h3>{item.name}</h3></div><ArrowUpRight />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
