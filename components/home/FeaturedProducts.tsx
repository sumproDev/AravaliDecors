"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, type ProductCategory } from "@/data/site-data";
import { SectionHeading } from "@/components/shared/SectionHeading";

const filters: (ProductCategory | "All")[] = ["All", "Granite & Stone", "Tiles", "Marble Sheets", "PVC Panels", "Flooring", "Bathroom", "Wall Panels"];

export function FeaturedProducts() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(() => active === "All" ? products : products.filter((item) => item.category === active), [active]);

  return (
    <section id="products" className="section products-section">
      <div className="shell">
        <SectionHeading eyebrow="Curated for distinctive spaces" title="Explore Stone & Surface Collections" intro="Granite, marble and tile products—clearly presented by material, finish and application." />
        <div className="filter-tabs" role="tablist" aria-label="Filter products">
          {filters.map((filter) => (
            <button key={filter} type="button" role="tab" aria-selected={active === filter} className={active === filter ? "active" : ""} onClick={() => setActive(filter)}>{filter}</button>
          ))}
        </div>
        <div id="projects" className="product-grid" aria-live="polite">
          {visible.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <Image src={product.image} alt={product.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw" />
                <span>View collection <ArrowRight /></span>
              </div>
              <div className="product-meta"><small>{product.category}</small><h3>{product.title}</h3><p>{product.detail}</p></div>
            </article>
          ))}
        </div>
        <div className="center-action"><Link className="button button--red" href="/products">View all products <ArrowRight /></Link></div>
      </div>
    </section>
  );
}
