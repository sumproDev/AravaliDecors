import { BadgeIndianRupee, Boxes, Ruler, ShieldCheck, Truck, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const reasons = [
  { icon: ShieldCheck, title: "Verified Quality Materials", text: "Every collection is reviewed for finish, durability and practical performance." },
  { icon: BadgeIndianRupee, title: "Competitive Pricing", text: "Clear recommendations and sensible options across a wide range of budgets." },
  { icon: Boxes, title: "Large Ready Stock", text: "A broad selection of popular surfaces, colours, patterns and dimensions." },
  { icon: Ruler, title: "Cutting & Custom Sizing", text: "Accurate sizing to reduce waste and make on-site installation smoother." },
  { icon: Wrench, title: "Professional Fitting Support", text: "Skilled assistance for a clean, aligned and lasting finish." },
  { icon: Truck, title: "Delivery Across Purnea & Nearby Bihar", text: "Coordinated supply across Purnea, Katihar and surrounding regions with dependable timelines." },
];

export function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="shell">
        <SectionHeading title="Why Customers Choose Us" intro="One experienced team from material selection to the final finish." />
        <div className="why-grid">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="why-card"><span className="why-number">0{index + 1}</span><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </div>
    </section>
  );
}
