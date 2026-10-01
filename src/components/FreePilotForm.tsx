"use client";

import { FormEvent, useState } from "react";

export default function FreePilotForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get("fullName") || "").trim();
    const nameParts = fullName.split(/\s+/).filter(Boolean);
    const firstName = nameParts.shift() || fullName;
    const lastName = nameParts.join(" ") || "-";

    const message = [
      "Free 15-Day Pilot application",
      "",
      `Company website: ${String(data.get("companyWebsite") || "Not provided")}`,
      `Approx. sales enquiries per month: ${String(data.get("monthlyEnquiries") || "")}`,
      `Current CRM or sales system: ${String(data.get("crm") || "")}`,
      `Where new enquiries arrive: ${String(data.get("sources") || "")}`,
      "",
      "Biggest qualification or follow-up problem:",
      String(data.get("problem") || ""),
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          company: String(data.get("company") || ""),
          email: String(data.get("email") || ""),
          message,
          website: "",
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="pilot-form glass" onSubmit={submit}>
      <div className="pilot-grid">
        <label>Full name<input name="fullName" autoComplete="name" required /></label>
        <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
        <label>Company<input name="company" autoComplete="organization" required /></label>
        <label>Company website<input name="companyWebsite" type="url" placeholder="https://" /></label>
        <label>Approx. sales enquiries per month
          <select name="monthlyEnquiries" required defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>1 to 25</option><option>26 to 100</option><option>101 to 300</option><option>301 to 1,000</option><option>More than 1,000</option>
          </select>
        </label>
        <label>Current CRM or sales system<input name="crm" placeholder="HubSpot, Salesforce, another tool..." required /></label>
      </div>
      <label>Where do new enquiries arrive?<input name="sources" placeholder="Website, forms, landing pages, email, other channels..." required /></label>
      <label>What is the biggest qualification or follow-up problem today?
        <textarea name="problem" rows={5} required placeholder="Tell us what is slowing your team down." />
      </label>
      <label className="pilot-consent"><input type="checkbox" name="consent" value="yes" required /> <span>I agree that Lumbe Tech may use these details to review my pilot request and contact me about it.</span></label>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Apply for Free 15-Day Pilot"}</button>
      {status === "sent" && <p className="pilot-success">Thank you. Your pilot request has been received. We will review it and contact you about the next step.</p>}
      {status === "error" && <p className="pilot-error">We could not send the form. Please email contact@lumbetech.com and we will help you directly.</p>}
    </form>
  );
}
