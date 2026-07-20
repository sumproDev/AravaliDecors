import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}

export function PageHero({ eyebrow, title, intro, image, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__image">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
      </div>
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="shell page-hero__content">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span>{eyebrow}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}
