import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { getSeoLandingPage, seoLandingPages } from "@/data/seo-content";

type SeoLandingPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SeoLandingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    return { title: "SEO Page Not Found" };
  }

  return {
    title: page.title,
    description: page.metaDescription,
    keywords: page.relatedKeywords,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: `${page.title} | Aravali Marbles`,
      description: page.metaDescription,
      url: `/${page.slug}`,
      images: [{ url: page.image, alt: page.imageAlt }],
    },
  };
}

export default async function SeoLandingPage({ params }: SeoLandingPageProps) {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    serviceType: page.category,
    areaServed: [page.location, "Purnea", "Katihar", "Bihar"],
    provider: {
      "@type": "LocalBusiness",
      name: "Aravali Marbles",
      url: "https://aravalimarbles.in",
      telephone: "+91-76540-02202",
    },
    description: page.metaDescription,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />

      <section className="seo-hero">
        <div className="shell seo-hero__grid">
          <div className="seo-hero__copy">
            <p className="eyebrow">Local selection guide</p>
            <h1>{page.title}</h1>
            <p>{page.metaDescription}</p>
            <div className="seo-hero__meta">
              <span><MapPin /> {page.location}</span>
              <span>{page.category}</span>
            </div>
            <div className="seo-hero__actions">
              <Link className="button button--red" href="/contact#enquiry">Request a quote <ArrowRight /></Link>
              <a className="button button--outline" href="tel:+917654002202">Call showroom</a>
            </div>
          </div>
          <div className="seo-hero__image">
            <Image src={page.image} alt={page.imageAlt} fill priority sizes="(max-width: 920px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section seo-content-section">
        <div className="shell seo-content-layout">
          <article className="seo-article">
            <p className="eyebrow">Buying help</p>
            <h2>{page.primaryKeyword} - practical guidance before selection</h2>
            <p className="seo-lead">Use this page to compare options, prepare questions and understand what matters before choosing {page.shortTitle.toLowerCase()} for your project.</p>
            {page.sections.map((section) => (
              <section key={section.heading} className="seo-copy-block">
                <h3>{section.heading}</h3>
                <p>{section.body}</p>
                <ul>
                  {section.points.map((point) => <li key={point}><CheckCircle2 /> {point}</li>)}
                </ul>
              </section>
            ))}
          </article>

          <aside className="seo-sidebar">
            <div className="seo-card">
              <h2>Related searches</h2>
              <ul>
                {page.relatedKeywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
              </ul>
            </div>
            <div className="seo-card seo-card--dark">
              <h2>Need availability?</h2>
              <p>Share product type, area, room photos and location. The team can suggest suitable options before you visit.</p>
              <Link href="/contact#enquiry">Send enquiry <ArrowRight /></Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section page-tint-section">
        <div className="shell">
          <div className="page-section-heading">
            <p className="eyebrow">Common questions</p>
            <h2>{page.title} FAQs</h2>
          </div>
          <div className="faq-grid">
            {page.faqs.map((faq) => <article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}
          </div>
        </div>
      </section>
    </main>
  );
}
