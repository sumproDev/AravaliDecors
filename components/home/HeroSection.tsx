import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gem, Grid3X3, PanelsTopLeft } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-image">
        <Image src="/images/hero/stone-gallery-hero-v2.png" alt="Premium marble wall slabs, granite floor tiles and natural stone samples displayed in a luxury gallery" fill priority sizes="100vw" />
      </div>
      <div className="hero-wash" aria-hidden="true" />
      <div className="hero-botanical" aria-hidden="true">❧</div>
      <div className="shell hero-content">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--line">We design. We decorate. You deserve the best.</p>
          <h1>Transforming Spaces<br />Into <em>Masterpieces</em></h1>
          <p className="hero-intro">From wall tiles to marble works and modern bathroom fittings — we bring style, quality, and perfection to every corner of your space.</p>
          <div className="hero-actions">
            <Link className="button button--red" href="/products">Explore products <ArrowRight /></Link>
            <Link className="button button--outline" href="/projects">View projects</Link>
          </div>
          <div className="hero-materials" aria-label="Featured surface collections">
            <span><PanelsTopLeft />Wall tiles</span>
            <span><Grid3X3 />Floor tiles</span>
            <span><Gem />Natural stone</span>
          </div>
        </div>
      </div>
    </section>
  );
}
