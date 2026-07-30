import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/seo-content";

export const metadata: Metadata = {
  title: "Tiles, Interior Design and Building Material Blog",
  description: "Practical guides on tiles, modular kitchens, sanitaryware, pipes, tanks, adhesives and interior design for Purnea and nearby Bihar.",
  keywords: ["tiles blog Purnia", "interior design blog Purnia", "modular kitchen guide", "building materials Bihar"],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Aravali Marbles Blog",
    description: "Helpful buying guides for surface materials and interior design.",
    url: "/blog",
    images: [{ url: "/images/hero/stone-gallery-hero-v2.png", alt: "Aravali Marbles material guide" }],
  },
};

export default function BlogIndexPage() {
  return (
    <main className="inner-page">
      <section className="seo-hero seo-hero--compact">
        <div className="shell seo-hero__grid">
          <div className="seo-hero__copy">
            <p className="eyebrow">Buying guides</p>
            <h1>Tiles, Interior Design and Product Guides</h1>
            <p>Read practical guides for choosing tiles, sanitaryware, pipes, water tanks, adhesives, modular kitchens and interior finishes around Purnea and nearby Bihar.</p>
          </div>
          <div className="seo-hero__image">
            <Image src="/images/hero/stone-gallery-hero-v2.png" alt="Stone, tile and interior material display" fill priority sizes="(max-width: 920px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell blog-index-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <div className="blog-card__image">
                <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1120px) 50vw, 33vw" />
              </div>
              <div className="blog-card__content">
                <span>{post.readTime}</span>
                <h2>{post.title}</h2>
                <p>{post.metaDescription}</p>
                <Link href={`/blog/${post.slug}`}>Read guide <ArrowRight /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
