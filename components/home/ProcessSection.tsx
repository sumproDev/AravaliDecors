import { Boxes, ClipboardCheck, Handshake, Ruler, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  { icon: Handshake, title: "Requirement Discussion", text: "Understand the area, material preference and budget." },
  { icon: Boxes, title: "Product Selection", text: "Choose suitable designs, finishes and sizes." },
  { icon: Ruler, title: "Measure & Estimate", text: "Site measurement and a transparent quotation." },
  { icon: ClipboardCheck, title: "Delivery & Support", text: "Timely handover and after-sales assistance." },
];

export function ProcessSection() {
  return (
    <section className="section process-section">
      <div className="shell">
        <SectionHeading eyebrow="Simple. Considered. Reliable." title="How We Work" />
        <ol className="process-list">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <li key={title}><div className="process-icon"><Icon /></div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
