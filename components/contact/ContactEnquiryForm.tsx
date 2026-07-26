"use client";

import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const enquiryTypes = [
  "Floor & Wall Tiles",
  "Pipe & Fittings",
  "Sanitaryware & Faucet",
  "Plywood, Laminate & Doors/Frames",
  "Tanks",
  "Adhesives",
  "Composite Granite",
  "Interior Designing",
  "Other",
];

export function ContactEnquiryForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      "Hello, I would like to make an enquiry.",
      "",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Email: ${formData.get("email") || "Not provided"}`,
      `Requirement: ${formData.get("requirement")}`,
      `Project location: ${formData.get("location") || "Not provided"}`,
      "",
      `Message: ${formData.get("message")}`,
    ].join("\n");

    window.open(
      `https://wa.me/917654002202?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form className="contact-enquiry-form" onSubmit={handleSubmit}>
      <div className="contact-enquiry-form__heading">
        <p className="eyebrow">Send an enquiry</p>
        <h3>Share Your Requirement</h3>
        <p>Complete the form and your enquiry will open as a ready-to-send WhatsApp message.</p>
      </div>

      <div className="contact-form-grid">
        <label>
          <span>Full name *</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Phone number *</span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+91 76540 02202" required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
        </label>
        <label>
          <span>Product or service *</span>
          <select name="requirement" defaultValue="" required>
            <option value="" disabled>Select your requirement</option>
            {enquiryTypes.map((type) => <option value={type} key={type}>{type}</option>)}
          </select>
        </label>
        <label className="contact-form-grid__wide">
          <span>Project location</span>
          <input name="location" type="text" autoComplete="address-level2" placeholder="City or project location" />
        </label>
        <label className="contact-form-grid__wide">
          <span>Tell us what you need *</span>
          <textarea name="message" rows={5} placeholder="Mention products, room, approximate quantity or dimensions, and expected timeline." required />
        </label>
      </div>

      <div className="contact-enquiry-form__footer">
        <p>Your details are used only to respond to this enquiry.</p>
        <button className="button button--red" type="submit">
          Send enquiry <ArrowUpRight />
        </button>
      </div>
    </form>
  );
}
