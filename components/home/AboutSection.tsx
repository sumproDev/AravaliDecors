import Image from "next/image";
import { Boxes, Clock3, DraftingCompass, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const benefits = [
  { icon: ShieldCheck, label: "Premium Quality", detail: "Materials" },
  { icon: Boxes, label: "Wide Product", detail: "Collection" },
  { icon: DraftingCompass, label: "Expert Fitting", detail: "Support" },
  { icon: Clock3, label: "On-Time Supply", detail: "& Delivery" },
];

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-image">
        <Image src="/images/about/showroom.jpg" alt="Warm modern dining space with refined surface finishes" fill sizes="(max-width: 800px) 100vw, 50vw" />
      </div>
      <div className="about-copy">
        <SectionHeading eyebrow="About Aravali Marbles" title="Materials That Make Every Space Stand Out" align="left" />
        <p>Aravali Marbles supplies premium finishing materials for residential and commercial projects. From modern PVC panels and imported tiles to marble sheets, flooring and bathroom products, we help customers choose durable, stylish and cost-effective solutions.</p>
        <p>Our experienced team supports you with selection, measurements, cutting, fitting and complete installation assistance.</p>
        <div className="about-benefits">
          {benefits.map(({ icon: Icon, label, detail }) => (
            <div key={label}><Icon /><strong>{label}</strong><span>{detail}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
