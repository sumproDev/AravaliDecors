import { CircleUserRound, Mail, MapPin, Phone, Play, Share2 } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { navigation } from "@/data/site-data";

const productLinks = ["Wall & Floor Tiles", "PVC Panels", "Marble Sheets", "WPC Louvers", "Flooring", "Bathroom Fittings"];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="Aravali Marbles home"><Logo inverse /></Link>
          <p>Premium marble, PVC panels, tiles, flooring, wall products and bathroom solutions for residential and commercial spaces.</p>
          <div className="socials" aria-label="Social media">
            <a href="#" aria-label="Facebook"><CircleUserRound /></a>
            <a href="#" aria-label="Instagram"><Share2 /></a>
            <a href="#" aria-label="YouTube"><Play /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          {navigation.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </div>
        <div className="footer-column">
          <h3>Our Collection</h3>
          {productLinks.map((link) => <Link key={link} href="/products">{link}</Link>)}
        </div>
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <p><MapPin /> Delhi NCR, India</p>
          <a href="tel:+919876543210"><Phone /> +91 98765 43210</a>
          <a href="mailto:hello@aravalimarbles.in"><Mail /> hello@aravalimarbles.in</a>
          <p>Mon–Sat · 10:00 AM–7:00 PM</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Aravali Marbles. All rights reserved.</p>
        <p><a href="#">Privacy Policy</a><span>·</span><a href="#">Terms & Conditions</a></p>
      </div>
    </footer>
  );
}
