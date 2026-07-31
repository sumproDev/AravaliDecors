import { ArrowUpRight, Bath, Columns3, Gem, Grid3X3, Layers3, PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CmsCollection } from "@/lib/cms/public";

const iconMap = { Grid3X3, PanelsTopLeft, Gem, Bath, Columns3, Layers3 };

function collectionHref(collection: CmsCollection) {
  return collection.slug === "interior-designing" ? "/services" : `/products/${collection.slug}`;
}

export function ProductCategories({ collections }: { collections: CmsCollection[] }) {
  return (
    <section className="section categories-section">
      <div className="shell">
        <SectionHeading title="What We Offer" intro="Eight focused product and interior categories, each organized into its own collection." />
        <div className="category-grid">
          {collections.map((collection) => {
            const Icon = iconMap[collection.icon as keyof typeof iconMap] || Grid3X3;
            return (
              <Link className="category-card" href={collectionHref(collection)} key={collection.id}>
                <Icon />
                <h3>{collection.title}</h3>
                <p>{collection.intro}</p>
                <ArrowUpRight className="category-arrow" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
