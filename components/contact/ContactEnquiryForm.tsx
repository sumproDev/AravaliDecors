"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const sanitizeName = (value: string) => value.replace(/[^A-Za-z\s.'-]/g, "");
  const sanitizePhone = (value: string) => value.replace(/\D/g, "").slice(0, 10);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const requirement = String(formData.get("requirement") || "").trim();
    const location = String(formData.get("location") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!/^[A-Za-z][A-Za-z\s.'-]{1,}$/.test(name) || !/^[6-9]\d{9}$/.test(phone)) {
      form.reportValidity();
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          requirement,
          location,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Thank you! Your enquiry has been sent successfully.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send enquiry. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please check your network and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="contact-enquiry-form" onSubmit={handleSubmit}>
      <div className="contact-enquiry-form__heading">
        <p className="eyebrow">Send an enquiry</p>
        <h3>Share Your Requirement</h3>
        <p>Complete the form and our team will get in touch with you shortly.</p>
      </div>

      {status && (
        <div
          style={{
            padding: "14px 16px",
            borderRadius: "8px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
            lineHeight: "1.5",
            backgroundColor: status.type === "success" ? "#f0fdf4" : "#fef2f2",
            color: status.type === "success" ? "#166534" : "#991b1b",
            border: `1px solid ${status.type === "success" ? "#bbf7d0" : "#fecaca"}`,
          }}
        >
          {status.type === "success" ? (
            <CheckCircle2 style={{ width: "20px", height: "20px", flexShrink: 0, color: "#16a34a" }} />
          ) : (
            <AlertCircle style={{ width: "20px", height: "20px", flexShrink: 0, color: "#dc2626" }} />
          )}
          <span>{status.message}</span>
        </div>
      )}

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
            disabled={submitting}
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
            disabled={submitting}
          />
        </label>
        <label>
          <span>Email address</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            disabled={submitting}
          />
        </label>
        <label>
          <span>Product or service *</span>
          <select name="requirement" defaultValue="" required disabled={submitting}>
            <option value="" disabled>Select your requirement</option>
            {enquiryTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="contact-form-grid__wide">
          <span>Project location</span>
          <input
            name="location"
            type="text"
            autoComplete="address-level2"
            placeholder="City or project location"
            disabled={submitting}
          />
        </label>
        <label className="contact-form-grid__wide">
          <span>Tell us what you need *</span>
          <textarea
            name="message"
            rows={5}
            placeholder="Mention products, room, approximate quantity or dimensions, and expected timeline."
            required
            disabled={submitting}
          />
        </label>
      </div>

      <div className="contact-enquiry-form__footer">
        <p>Your details are used only to respond to this enquiry.</p>
        <button className="button button--red" type="submit" disabled={submitting}>
          {submitting ? (
            <>
              Sending enquiry... <Loader2 className="animate-spin" style={{ width: "18px", height: "18px" }} />
            </>
          ) : (
            <>
              Send enquiry <ArrowUpRight />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
