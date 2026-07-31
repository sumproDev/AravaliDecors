import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CmsCollection } from "@/lib/cms/public";

function collectionHref(collection: CmsCollection) {
  return collection.slug === "interior-designing" ? "/services" : `/products/${collection.slug}`;
}

export function FeaturedProducts({ collections }: { collections: CmsCollection[] }) {
  return (
    <section id="products" className="section products-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Explore each range"
          title="Product Collections"
          intro="Open any collection to view the related products available inside it."
        />
        <div id="projects" className="product-grid">
          {collections.map((collection) => (
            <Link className="product-card" href={collectionHref(collection)} key={collection.id}>
              <div className="product-image">
                <Image src={collection.image} alt={collection.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw" />
                <span>View collection <ArrowRight /></span>
              </div>
              <div className="product-meta"><small>Collection</small><h3>{collection.title}</h3><p>{collection.intro}</p></div>
            </Link>
          ))}
        </div>
        <div className="center-action"><Link className="button button--red" href="/products">View all products <ArrowRight /></Link></div>
      </div>
    </section>
  );
}
