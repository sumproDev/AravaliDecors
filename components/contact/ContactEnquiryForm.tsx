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
  const sanitizeName = (value: string) => value.replace(/[^A-Za-z\s.'-]/g, "");
  const sanitizePhone = (value: string) => value.replace(/\D/g, "").slice(0, 10);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();

    if (!/^[A-Za-z][A-Za-z\s.'-]{1,}$/.test(name) || !/^[6-9]\d{9}$/.test(phone)) {
      event.currentTarget.reportValidity();
      return;
    }

    const message = [
      "Hello, I would like to make an enquiry.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
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
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            pattern="[A-Za-z][A-Za-z\s.'-]{1,}"
            title="Please enter a valid name without numbers."
            onInput={(event) => {
              event.currentTarget.value = sanitizeName(event.currentTarget.value);
            }}
            required
          />
        </label>
        <label>
          <span>Phone number *</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="numeric"
            placeholder="7654002202"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            title="Please enter a valid 10-digit Indian mobile number."
            onInput={(event) => {
              event.currentTarget.value = sanitizePhone(event.currentTarget.value);
            }}
            required
          />
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
