import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/site-data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="section applications-section">
      <div className="shell">
        <SectionHeading eyebrow="Interior Designing" title="Interior Design Services" intro="Focused services for kitchens, storage, ceilings, wall finishes and media units." />
        <div className="services-grid">
          {services.map((item, index) => (
            <Link className={`application-card service-card--${index + 1}`} href="/services" key={item.name}>
              <Image src={item.image} alt={`${item.name} finished with Aravali Marbles materials`} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 25vw" />
              <div><span>{item.text}</span><h3>{item.name}</h3></div><ArrowUpRight />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
