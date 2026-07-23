import { ArrowUpRight, Bath, Columns3, Gem, Grid3X3, Layers3, PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import { categories } from "@/data/site-data";
import { SectionHeading } from "@/components/shared/SectionHeading";

const iconMap = { Grid3X3, PanelsTopLeft, Gem, Bath, Columns3, Layers3 };

export function ProductCategories() {
  return (
    <section className="section categories-section">
      <div className="shell">
        <SectionHeading title="What We Offer" intro="Eight focused product and interior categories, each organized into its own collection." />
        <div className="category-grid">
          {categories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <Link className="category-card" href={category.href} key={category.title}>
                <Icon />
                <h3>{category.title}</h3>
                <p>{category.text}</p>
                <ArrowUpRight className="category-arrow" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
