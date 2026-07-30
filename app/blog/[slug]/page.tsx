import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { blogPosts, getBlogPost } from "@/data/seo-content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.relatedKeywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Aravali Marbles`,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: "article",
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `https://www.aravalimarbles.co.in${post.image}`,
    author: { "@type": "Organization", name: "Aravali Marbles" },
    publisher: { "@type": "Organization", name: "Aravali Marbles" },
    mainEntityOfPage: `https://www.aravalimarbles.co.in/blog/${post.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />

      <article>
        <section className="seo-hero seo-hero--blog">
          <div className="shell seo-hero__grid">
            <div className="seo-hero__copy">
              <Link className="collection-back-link" href="/blog"><ArrowLeft /> Back to blog</Link>
              <p className="eyebrow">Aravali guide</p>
              <h1>{post.title}</h1>
              <p>{post.intro}</p>
              <div className="seo-hero__meta">
                <span>{post.readTime}</span>
                <span>{post.primaryKeyword}</span>
              </div>
            </div>
            <div className="seo-hero__image">
              <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 920px) 100vw, 45vw" />
            </div>
          </div>
        </section>

        <section className="section seo-content-section">
          <div className="shell seo-content-layout">
            <div className="seo-article">
              {post.sections.map((section) => (
                <section key={section.heading} className="seo-copy-block">
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                  <ul>
                    {section.points.map((point) => <li key={point}><CheckCircle2 /> {point}</li>)}
                  </ul>
                </section>
              ))}
              <section className="seo-copy-block">
                <h2>Quick FAQs</h2>
                {post.faqs.map((faq) => <div className="blog-faq" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}
              </section>
            </div>

            <aside className="seo-sidebar">
              <div className="seo-card">
                <h2>Keywords covered</h2>
                <ul>
                  {post.relatedKeywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
                </ul>
              </div>
              <div className="seo-card seo-card--dark">
                <h2>Need product help?</h2>
                <p>Send your room, surface area, photos and requirement. The team can help shortlist suitable products.</p>
                <Link href="/contact#enquiry">Ask Aravali <ArrowRight /></Link>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </main>
  );
}
