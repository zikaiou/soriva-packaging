"use client";

import type { FormEvent } from "react";

const WHATSAPP_NUMBER = "8615913881634";

export default function QuoteForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const lines = [
      "Hello SORIVA Packaging, I would like a quotation.",
      `Name: ${f.get("name") || ""}`,
      `Company: ${f.get("company") || ""}`,
      `Email: ${f.get("email") || ""}`,
      `Country: ${f.get("country") || ""}`,
      `Packaging type: ${f.get("type") || ""}`,
      `Quantity: ${f.get("qty") || ""}`,
      `Project details: ${f.get("message") || ""}`,
    ];
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <form id="quoteForm" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Name
          <input required name="name" placeholder="Your name" />
        </label>
        <label>
          Company
          <input name="company" placeholder="Company name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="name@company.com" />
        </label>
        <label>
          Country
          <input name="country" placeholder="Country" />
        </label>
        <label>
          Packaging Type
          <select name="type">
            <option>Magnetic Rigid Box</option>
            <option>Two-Piece Rigid Box</option>
            <option>Drawer Box</option>
            <option>Foldable Rigid Box</option>
            <option>Tube Packaging</option>
            <option>Luxury Paper Bag</option>
            <option>Other / Not sure</option>
          </select>
        </label>
        <label>
          Quantity
          <input name="qty" placeholder="e.g. 1,000 pcs" />
        </label>
        <label className="wide">
          Project Details
          <textarea
            name="message"
            rows={4}
            placeholder="Product size, desired box size, materials, printing, insert, target delivery date..."
          />
        </label>
      </div>
      <button className="btn gold" type="submit">
        Send via WhatsApp
      </button>
      <p className="form-note">
        No data is stored on this website. Your inquiry opens in WhatsApp for
        you to review before sending.
      </p>
    </form>
  );
}
