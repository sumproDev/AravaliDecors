import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

interface PageCTAProps {
  title?: string;
  text?: string;
}

export function PageCTA({
  title = "Let’s Find the Right Surface for Your Space",
  text = "Share your room, application and finish preferences. Our team will help you compare materials and plan the next steps.",
}: PageCTAProps) {
  return (
    <section className="page-cta">
      <div className="shell page-cta__inner">
        <div><p className="eyebrow">Talk to a surface specialist</p><h2>{title}</h2><p>{text}</p></div>
        <div className="page-cta__actions">
          <Link className="button button--white" href="/contact">Request a consultation <ArrowRight /></Link>
          <a className="button button--white-outline" href="tel:+919876543210"><Phone /> +91 98765 43210</a>
        </div>
      </div>
    </section>
  );
}
