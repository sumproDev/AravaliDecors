import { ArrowRight, Phone } from "lucide-react";

export function QuoteCTA() {
  return (
    <section id="contact" className="quote-cta">
      <div className="shell quote-cta__inner">
        <div><p className="eyebrow">Let’s create something lasting</p><h2>Planning a New Space or Renovation?</h2><span>Get product recommendations, pricing and fitting assistance from our team.</span></div>
        <div><a className="button button--white" href="mailto:hello@aravalimarbles.in">Get a free quote <ArrowRight /></a><a className="button button--white-outline" href="tel:+919876543210"><Phone /> +91 98765 43210</a></div>
      </div>
    </section>
  );
}
