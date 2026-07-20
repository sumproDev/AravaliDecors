"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/site-data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % testimonials.length), 5500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (direction: number) => setActive((value) => (value + direction + testimonials.length) % testimonials.length);
  const item = testimonials[active];

  return (
    <section className="section testimonials-section" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="shell testimonial-shell">
        <SectionHeading title="What Our Customers Say" />
        <Quote className="quote-mark" aria-hidden="true" />
        <div className="testimonial" tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); }}>
          <blockquote>“{item.quote}”</blockquote><strong>{item.name}</strong><span>{item.location}</span>
        </div>
        <div className="testimonial-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial"><ChevronLeft /></button>
          <div>{testimonials.map((testimonial, index) => <button key={testimonial.name} type="button" onClick={() => setActive(index)} className={active === index ? "active" : ""} aria-label={`Show testimonial ${index + 1}`} />)}</div>
          <button type="button" onClick={() => move(1)} aria-label="Next testimonial"><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
}
