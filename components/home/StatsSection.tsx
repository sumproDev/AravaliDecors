"use client";

import { useEffect, useRef, useState } from "react";
import { Boxes, CircleUserRound, Gem } from "lucide-react";

const stats = [
  { icon: CircleUserRound, value: 30000, label: "Happy Customers" },
  { icon: Gem, value: 10, label: "Years of Experience" },
  { icon: Boxes, value: 1000, label: "Product Collections" },
];

function RollingNumber({ value, animationRun }: { value: number; animationRun: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (animationRun === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(value);
      return;
    }

    setDisplayValue(0);
    const duration = 2200;
    let animationFrame = 0;
    let startedAt = 0;

    const update = (now: number) => {
      if (startedAt === 0) startedAt = now;
      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      }
    };

    const startDelay = window.setTimeout(() => {
      animationFrame = requestAnimationFrame(update);
    }, 140);

    return () => {
      window.clearTimeout(startDelay);
      cancelAnimationFrame(animationFrame);
    };
  }, [animationRun, value]);

  return (
    <strong aria-label={`${value.toLocaleString("en-IN")} plus`}>
      <span aria-hidden="true">{displayValue.toLocaleString("en-IN")}+</span>
    </strong>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animationRun, setAnimationRun] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationRun((currentRun) => currentRun + 1);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-strip" aria-label="Company statistics">
      <div className="shell stats-grid">
        {stats.map(({ icon: Icon, value, label }) => (
          <div className="stat" key={label}>
            <Icon />
            <RollingNumber value={value} animationRun={animationRun} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
