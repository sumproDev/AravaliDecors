import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { applications } from "@/data/site-data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ApplicationsSection() {
  return (
    <section id="applications" className="section applications-section">
      <div className="shell">
        <SectionHeading eyebrow="Designed around real life" title="Solutions for Every Space" />
        <div className="applications-grid">
          {applications.map((item, index) => (
            <article className={`application-card application-card--${index + 1}`} key={item.name}>
              <Image src={item.image} alt={`${item.name} finished with Aravali Marbles materials`} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 25vw" />
              <div><span>{item.text}</span><h3>{item.name}</h3></div><ArrowUpRight />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
