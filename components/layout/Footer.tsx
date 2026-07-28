import { CircleUserRound, Mail, MapPin, Phone, Play, Share2 } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { categories, navigation } from "@/data/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="Aravali Marbles home"><Logo inverse /></Link>
          <p>Floor and wall tiles, pipes and fittings, sanitaryware, plywood, tanks, adhesives, composite granite and interior designing.</p>
          <div className="socials" aria-label="Social media">
            <a href="https://www.facebook.com/aravalimarbles.co.in/" target="_blank" rel="noreferrer" aria-label="Facebook"><CircleUserRound /></a>
            <a href="https://www.instagram.com/aravali.marbles/" target="_blank" rel="noreferrer" aria-label="Instagram"><Share2 /></a>
            <a href="https://www.facebook.com/aravalimarbles.co.in/videos/" target="_blank" rel="noreferrer" aria-label="Videos"><Play /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          {navigation.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </div>
        <div className="footer-column">
          <h3>Our Collection</h3>
          {categories.slice(0, 6).map((category) => <Link key={category.title} href={category.href}>{category.title}</Link>)}
        </div>
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <p><MapPin /> Purnea, Katihar & nearby Bihar</p>
          <a href="tel:+917654002202"><Phone /> +91 76540 02202</a>
          <a href="tel:+916203900400"><Phone /> +91 62039 00400</a>
          <a href="mailto:aravalimarbles001@gmail.com"><Mail /> aravalimarbles001@gmail.com</a>
          <p>Mon–Sat · 10:00 AM–7:00 PM</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Aravali Marbles. All rights reserved.</p>
        <p><Link href="/contact">Privacy Policy</Link><span>·</span><Link href="/contact">Terms & Conditions</Link></p>
      </div>
    </footer>
  );
}
