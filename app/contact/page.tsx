import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone, Ruler, SwatchBook, WalletCards } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { ContactEnquiryForm } from "@/components/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Contact Aravali Marbles",
  description: "Contact Aravali Marbles for granite, marble, wall and floor tiles, panels, flooring, product selection, estimates and installation support in Delhi NCR.",
  keywords: ["contact Aravali Marbles", "marble supplier Delhi NCR contact", "granite tile quotation", "tile showroom Delhi NCR", "surface installation enquiry"],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Aravali Marbles",
    description: "Discuss product selection, measurements, pricing and fitting support with our surface-material team.",
    url: "/contact",
    images: [{ url: "/images/about/showroom.jpg", alt: "Contact Aravali Marbles in Delhi NCR" }],
  },
};

const faqs = [
  { question: "What information should I share for an initial estimate?", answer: "Room type, approximate dimensions, wall or floor application, preferred material or look, project location and any inspiration images are helpful starting points." },
  { question: "Can you help me choose between granite, marble and tiles?", answer: "Yes. We compare appearance, application, finish, traffic, moisture, maintenance and budget so the recommendation is relevant to the actual space." },
  { question: "Do you support measurements and installation?", answer: "Our team can assist with measurement, estimation, cutting, fitting and installation coordination depending on the material and project requirement." },
  { question: "Do you work on residential and commercial requirements?", answer: "Yes. We support homes, offices, shops, showrooms, restaurants, hotels and other interior surface requirements across Delhi NCR." },
];

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Aravali Marbles",
  url: "https://aravalimarbles.in/contact",
  telephone: "+91-98765-43210",
  email: "hello@aravalimarbles.in",
  areaServed: "Delhi NCR",
  openingHours: "Mo-Sa 10:00-19:00",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ContactPage() {
  return (
    <main className="inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Contact Us"
        title="Tell Us About Your Space"
        intro="Connect with our team for product recommendations, measurements, estimates and fitting support for granite, marble, tiles, panels and flooring."
        image="/images/about/showroom.jpg"
        imageAlt="Premium interior surfaces by Aravali Marbles"
      />

      <section className="section page-intro-section">
        <div className="shell contact-card-grid">
          <a href="tel:+919876543210"><Phone /><span>Call us</span><strong>+91 98765 43210</strong><small>Discuss your requirement directly</small></a>
          <a href="mailto:hello@aravalimarbles.in"><Mail /><span>Email us</span><strong>hello@aravalimarbles.in</strong><small>Send plans, measurements or references</small></a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><MessageCircle /><span>WhatsApp</span><strong>Start a conversation</strong><small>Quick product and availability enquiries</small></a>
          <div><MapPin /><span>Service area</span><strong>Delhi NCR, India</strong><small>Residential and commercial requirements</small></div>
        </div>
      </section>

      <section className="section contact-enquiry-section">
        <div className="shell contact-enquiry-layout">
          <div className="contact-enquiry-copy">
            <p className="eyebrow">Quick enquiry</p>
            <h2>Let Us Help With Your Requirement</h2>
            <p>Tell us what you are looking for and where the project is located. Include approximate measurements, quantities or design preferences if available.</p>
            <div className="contact-enquiry-points">
              <span>Product availability</span>
              <span>Pricing and estimates</span>
              <span>Interior design requirements</span>
              <span>Fitting and installation guidance</span>
            </div>
          </div>
          <ContactEnquiryForm />
        </div>
      </section>

      <section className="section page-tint-section">
        <div className="shell contact-detail-grid">
          <div>
            <p className="eyebrow">Plan your visit or call</p>
            <h2>Speak With a Surface Specialist</h2>
            <p>Whether you already know the exact material or are still comparing options, a few project details help us guide you more effectively. Share the intended room, approximate area, preferred finish, location and expected timeline.</p>
            <div className="contact-hours"><Clock3 /><div><strong>Business hours</strong><span>Monday–Saturday · 10:00 AM–7:00 PM</span></div></div>
            <div className="contact-hours"><MapPin /><div><strong>Service region</strong><span>Delhi NCR and surrounding project locations</span></div></div>
          </div>
          <div className="enquiry-panel">
            <p className="eyebrow">Useful enquiry details</p>
            <h3>What to Send Us</h3>
            <ul>
              <li><Ruler /><span><strong>Measurements</strong>Approximate wall or floor dimensions</span></li>
              <li><SwatchBook /><span><strong>Material preference</strong>Granite, marble, tile, panel or flooring</span></li>
              <li><WalletCards /><span><strong>Budget direction</strong>A practical range helps us shortlist efficiently</span></li>
              <li><Clock3 /><span><strong>Project timeline</strong>Expected selection, delivery and installation dates</span></li>
            </ul>
            <a className="button button--red" href="mailto:hello@aravalimarbles.in?subject=Surface%20Project%20Enquiry">Email your project details</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="page-section-heading"><p className="eyebrow">Frequently asked questions</p><h2>Before You Get in Touch</h2></div>
          <div className="faq-grid">{faqs.map((faq) => <article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div>
        </div>
      </section>
    </main>
  );
}
