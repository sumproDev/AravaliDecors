import { MessageCircle, Phone } from "lucide-react";

const message = encodeURIComponent(
  "Hello, I would like to know more about your product collections and interior designing services.",
);

export function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a
        href={`https://wa.me/919876543210?text=${message}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Message Aravali Marbles on WhatsApp"
        className="float-button float-button--whatsapp"
      >
        <MessageCircle />
      </a>
      <a href="tel:+919876543210" aria-label="Call Aravali Marbles" className="float-button float-button--call">
        <Phone />
      </a>
    </div>
  );
}
