import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/site-data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FeaturedProducts() {
  return (
    <section id="products" className="section products-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Explore each range"
          title="Product Collections"
          intro="Open any collection to view the related products available inside it."
        />
        <div id="projects" className="product-grid">
          {categories.map((category) => (
            <Link className="product-card" href={category.href} key={category.title}>
              <div className="product-image">
                <Image src={category.image} alt={category.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw" />
                <span>View collection <ArrowRight /></span>
              </div>
              <div className="product-meta"><small>Collection</small><h3>{category.title}</h3><p>{category.text}</p></div>
            </Link>
          ))}
        </div>
        <div className="center-action"><Link className="button button--red" href="/products">View all products <ArrowRight /></Link></div>
      </div>
    </section>
  );
}
