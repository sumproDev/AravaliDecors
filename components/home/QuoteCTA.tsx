import { ArrowRight, Phone } from "lucide-react";

export function QuoteCTA() {
  return (
    <section id="contact" className="quote-cta">
      <div className="shell quote-cta__inner">
        <div><p className="eyebrow">Let’s create something lasting</p><h2>Planning a New Space or Renovation?</h2><span>Get product recommendations, pricing and fitting assistance from our team.</span></div>
        <div><a className="button button--white" href="mailto:aravalimarbles001@gmail.com">Get a free quote <ArrowRight /></a><a className="button button--white-outline" href="tel:+917654002202"><Phone /> +91 76540 02202</a></div>
      </div>
    </section>
  );
}
