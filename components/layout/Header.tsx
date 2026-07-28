"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { navigation } from "@/data/site-data";

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const closeOnOutsideTap = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    if (open) {
      document.addEventListener("pointerdown", closeOnOutsideTap);
    }

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideTap);
    };
  }, [open]);

  return (
    <header ref={headerRef} className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="shell header-inner">
        <Link href="/" aria-label="Aravali Marbles home"><Logo /></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} className={pathname === item.href ? "active" : ""} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button--red header-quote" href="/contact">Get a quote</Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}>
        <nav className="shell" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
          <Link className="mobile-nav__quote" href="/contact" onClick={() => setOpen(false)}>Get a quote</Link>
          <a href="tel:+917654002202" onClick={() => setOpen(false)}><Phone /> +91 76540 02202</a>
        </nav>
      </div>
    </header>
  );
}
