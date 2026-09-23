"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { waLink } from "../lib/whatsapp";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_FILES = 5;
const ALLOWED = new Map([
  ["image/jpeg", ["jpg", "jpeg"]],
  ["image/png", ["png"]],
  ["application/pdf", ["pdf"]],
]);

const fieldLabels: Record<string, string> = {
  name: "Name",
  company: "Company",
  email: "Email",
  whatsapp: "WhatsApp",
  country: "Country",
  postcode: "Postcode / ZIP",
  packaging_type: "Packaging Type",
  quantity: "Quantity",
  finished_size: "Finished Box / Bag Size",
  product_size: "Product Size",
  preferred_material: "Preferred Material",
  insert_requirement: "Insert Requirement",
  finishing: "Finishing Required",
  target_delivery_date: "Target Delivery Date",
  destination_market: "Destination / Target Market",
  project_details: "Project Details",
};

function extension(name: string) {
  return name.toLowerCase().split(".").pop() || "";
}

function validateFiles(files: File[]) {
  if (files.length > MAX_FILES) return `Please upload no more than ${MAX_FILES} files.`;
  for (const file of files) {
    const extensions = ALLOWED.get(file.type) || [];
    if (file.size <= 0 || file.size > MAX_FILE_SIZE || !extensions.includes(extension(file.name))) {
      return `${file.name} must be a JPG, PNG or PDF file under 10MB.`;
    }
  }
  return "";
}

export default function RfqPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [finishes, setFinishes] = useState<string[]>([]);
  const [website, setWebsite] = useState("");
  const fileNames = useMemo(() => files.map((file) => file.name).join(", "), [files]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("");
    const fileError = validateFiles(files);
    if (fileError) return setError(fileError);
    const data = new FormData(event.currentTarget);
    const payload: Record<string, unknown> = {};
    for (const [key, value] of data.entries()) {
      if (key !== "files" && key !== "finish") payload[key] = value;
    }
    payload.finishing = finishes.join(", ");
    payload.source_page = window.location.pathname;
    payload.website = website;
    setSending(true);

    try {
      let uploadedFiles: Array<{ original_name: string; storage_path: string; mime_type: string; size_bytes: number }> = [];
      if (files.length) {
        const uploadRequest = await fetch("/api/rfq/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ files: files.map((file) => ({ name: file.name, type: file.type, size: file.size })) }),
        });
        const uploadData = await uploadRequest.json();
        if (!uploadRequest.ok) throw new Error(uploadData.error || "Could not prepare file upload.");
        await Promise.all(uploadData.files.map(async (signed: { signedUrl: string; path: string; token: string; name: string; type: string; size: number }) => {
          const file = files.find((candidate) => candidate.name === signed.name && candidate.type === signed.type && candidate.size === signed.size);
          if (!file) throw new Error("Uploaded file could not be matched.");
          const uploadResponse = await fetch(signed.signedUrl, {
            method: "PUT",
            headers: { "content-type": signed.type, "x-upsert": "false" },
            body: file,
          });
          if (!uploadResponse.ok) throw new Error("File upload failed.");
          uploadedFiles.push({ original_name: signed.name, storage_path: signed.path, mime_type: signed.type, size_bytes: signed.size });
        }));
      }

      const response = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, uploaded_files: uploadedFiles }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not submit your inquiry.");
      window.location.href = result.redirect || "/rfq/thank-you/";
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We could not submit your inquiry.");
      setSending(false);
    }
  }

  return (
    <main className="rfq-page">
      <section className="rfq-hero">
        <div className="rfq-wrap">
          <p className="rfq-eyebrow">REQUEST A QUOTE</p>
          <h1>Tell Us About Your Packaging Project</h1>
          <p>Share your product details, quantity, preferred structure, finishing and target delivery date for a more accurate quotation.</p>
        </div>
      </section>
      <section className="rfq-section">
        <div className="rfq-wrap">
          <form onSubmit={submit} className="rfq-form" noValidate>
            <div className="rfq-grid">
              {Object.entries(fieldLabels).map(([name, label]) => (
                <label key={name} className={name === "project_details" ? "rfq-field rfq-full" : "rfq-field"}>
                  <span>{label}{["name", "email", "country", "packaging_type", "quantity", "project_details"].includes(name) ? " *" : ""}</span>
                  {name === "project_details" ? <textarea name={name} required rows={6} placeholder="Product, colors, logo position, finish and special requirements." /> : name === "packaging_type" ? <select name={name} required defaultValue=""><option value="">Select</option><option>Magnetic Rigid Box</option><option>Foldable Magnetic Rigid Box</option><option>Drawer Box</option><option>Two-Piece Rigid Box</option><option>Tube Packaging</option><option>Luxury Paper Bag</option><option>Not Sure / Need Recommendation</option></select> : name === "quantity" ? <select name={name} required defaultValue=""><option value="">Select</option><option>100–299 pcs</option><option>300–499 pcs</option><option>500–999 pcs</option><option>1,000–4,999 pcs</option><option>5,000+ pcs</option></select> : <input name={name} type={name === "email" ? "email" : name === "target_delivery_date" ? "date" : "text"} required={["name", "email", "country"].includes(name)} placeholder={name.includes("size") ? "L × W × H (mm)" : undefined} />}
                </label>
              ))}
              <div className="rfq-field rfq-full"><span>Finishing Required</span><div className="rfq-checks">{["Foil Stamping", "Embossing", "Debossing", "Spot UV", "Matte Lamination", "Not Sure"].map((finish) => <label key={finish}><input type="checkbox" name="finish" value={finish} checked={finishes.includes(finish)} onChange={(event) => setFinishes((current) => event.target.checked ? [...current, finish] : current.filter((item) => item !== finish))} /> {finish}</label>)}</div></div>
              <label className="rfq-field rfq-full"><span>Upload Logo / Reference Images</span><input name="files" type="file" accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf" multiple onChange={(event) => { const selected = Array.from(event.target.files || []); const message = validateFiles(selected); setError(message); if (!message) setFiles(selected); }} /><small>{fileNames || "JPG, PNG or PDF. Maximum 10MB per file, up to 5 files."}</small></label>
              <label className="rfq-honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></label>
              <div className="rfq-full"><button className="rfq-submit" type="submit" disabled={sending}>{sending ? "Sending…" : "Submit Quote Request"}</button>{error && <p className="rfq-error" role="alert">{error}</p>}{status && <p className="rfq-status">{status}</p>}</div>
            </div>
          </form>
        </div>
      </section>
      <section className="rfq-section rfq-soft"><div className="rfq-wrap"><p className="rfq-eyebrow">WHAT HAPPENS NEXT</p><h2>From RFQ to Production</h2><div className="rfq-steps"><div><b>1. Review</b><p>We review size, quantity, structure, material and finishing.</p></div><div><b>2. Quote & Sample</b><p>We prepare the quotation and confirm whether a prototype is needed.</p></div><div><b>3. Production</b><p>After specification approval, the project moves into production and QC.</p></div></div></div></section>
      <section className="rfq-contact"><div className="rfq-wrap"><h2>Prefer WhatsApp?</h2><p>Send your reference image, size and quantity directly.</p><a className="btn-wa" href={waLink("Hello SORIVA Packaging, I would like to request a custom packaging quotation.")} target="_blank" rel="noreferrer">Chat on WhatsApp</a></div></section>
    </main>
  );
}
