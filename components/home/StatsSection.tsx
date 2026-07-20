import { Boxes, CircleUserRound, Gem, Layers3 } from "lucide-react";

const stats = [
  { icon: Layers3, value: "500+", label: "Projects Supplied" },
  { icon: CircleUserRound, value: "300+", label: "Happy Customers" },
  { icon: Gem, value: "10+", label: "Years of Experience" },
  { icon: Boxes, value: "50+", label: "Product Collections" },
];

export function StatsSection() {
  return (
    <section className="stats-strip" aria-label="Company statistics">
      <div className="shell stats-grid">
        {stats.map(({ icon: Icon, value, label }) => (
          <div className="stat" key={label}><Icon /><strong>{value}</strong><span>{label}</span></div>
        ))}
      </div>
    </section>
  );
}
