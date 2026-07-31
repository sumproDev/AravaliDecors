import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getPublishedCollectionBySlug, getPublishedCollections } from "@/lib/cms/public";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";

type ProductCollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductCollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = await getPublishedCollectionBySlug(slug);

  if (!collection) {
    return { title: "Product Collection Not Found" };
  }

  return {
    title: collection.title,
    description: collection.description,
    alternates: { canonical: `/products/${collection.slug}` },
    openGraph: {
      title: `${collection.title} | Aravali Marbles`,
      description: collection.description,
      url: `/products/${collection.slug}`,
      images: [{ url: collection.image, alt: collection.imageAlt }],
    },
  };
}

export async function generateStaticParams() {
  const collections = await getPublishedCollections();
  return collections.filter((collection) => collection.slug !== "interior-designing").map((collection) => ({ slug: collection.slug }));
}

export default async function ProductCollectionPage({ params }: ProductCollectionPageProps) {
  const { slug } = await params;
  const collection = await getPublishedCollectionBySlug(slug);

  if (!collection || collection.slug === "interior-designing") {
    notFound();
  }

  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Product Collection"
        title={collection.title}
        intro={collection.intro}
        image={collection.image}
        imageAlt={collection.imageAlt}
      />

      <section className="section">
        <div className="shell">
          <Link className="collection-back-link" href="/products"><ArrowLeft /> Back to all products</Link>
          <div className="page-section-heading">
            <p className="eyebrow">Related products</p>
            <h2>Explore {collection.shortTitle}</h2>
            <p>{collection.description}</p>
          </div>
          <div className={`collection-product-grid collection-product-grid--${collection.slug}`}>
            {collection.products.map((item, index) => (
              <article className="collection-product-card" key={item.id}>
                <div className="collection-product-card__image">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 920px) 50vw, 33vw"
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="collection-product-card__content">
                  <p className="collection-product-card__eyebrow">{collection.shortTitle}</p>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link href="/contact">Enquire about this product <ArrowRight /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCTA title={`Looking for ${collection.title}?`} text="Share the product name, application and quantity required. Our team will help with availability and suitable options." />
    </main>
  );
}
