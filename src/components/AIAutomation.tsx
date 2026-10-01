"use client";

import { useEffect, useState } from "react";

type FeedEvent = { id: number; who: string; text: string; time: string; status?: "wait" | "sent" };

const SCRIPT: Omit<FeedEvent, "id">[] = [
  { who: "Sarah Kim", text: "Inbound lead: needs a quote for onboarding 40 people next quarter.", time: "02:14" },
  { who: "Lumbe assistant", text: "Qualified HIGH. CRM updated and follow-up task prepared for sales review.", time: "02:14", status: "wait" },
  { who: "Sales", text: "Reviewed the lead and decided the next customer action.", time: "07:52", status: "sent" },
  { who: "Marco Ferreira", text: "Inbound enquiry: asked about integrating with HubSpot.", time: "09:31" },
  { who: "Lumbe assistant", text: "Answer drafted from your integration notes. Waiting for review.", time: "09:31", status: "wait" },
];

function LeadDemo() {
  const [events, setEvents] = useState<FeedEvent[]>([]);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setEvents(SCRIPT.slice(0, 3).map((e, i) => ({ ...e, id: i })));
      return;
    }
    let i = 0, id = 0;
    let timer: ReturnType<typeof setTimeout>;
    const push = () => {
      setEvents((prev) => [...prev, { ...SCRIPT[i % SCRIPT.length], id: id++ }].slice(-3));
      i++;
      timer = setTimeout(push, 2200);
    };
    timer = setTimeout(push, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="product-media" style={{ padding: 20 }}>
      <div style={{ display: "grid", gap: 10 }}>
        {events.map((e) => (
          <div key={e.id} style={{ padding: 14, borderRadius: 10, border: "1px solid var(--border)", background: "var(--card)", display: "grid", gridTemplateColumns: "1fr auto", gap: 10 }}>
            <div>
              <strong style={{ fontSize: 14 }}>{e.who}</strong>
              <p style={{ fontSize: 13.5, color: "var(--text-2)", marginTop: 3 }}>{e.text}</p>
            </div>
            <div style={{ display: "grid", gap: 6, justifyItems: "end" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--muted)" }}>{e.time}</span>
              {e.status === "wait" && <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 999, background: "rgba(251,191,36,.12)", color: "var(--amber)" }}>Waiting for you</span>}
              {e.status === "sent" && <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 999, background: "rgba(52,211,153,.12)", color: "var(--success)" }}>Sent</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InvoiceMedia() {
  return (
    <div className="product-media" style={{ padding: 32, display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
      {["Invoice received", "Invoice data extracted and validated", "Waiting for approval"].map((step, i) => (
        <div key={step} style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, background: i < 2 ? "rgba(56,189,248,.14)" : "rgba(251,191,36,.14)", color: i < 2 ? "var(--accent)" : "var(--amber)", display: "grid", placeItems: "center", fontFamily: "var(--mono)", fontSize: 12, fontWeight: 700 }}>
            {i + 1}
          </span>
          <span style={{ fontSize: 14.5, color: "var(--text-2)" }}>{step}</span>
        </div>
      ))}
      <p style={{ fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--muted)", marginTop: 8 }}>
        Early access build. Full walkthrough video coming soon.
      </p>
    </div>
  );
}

export default function AIAutomation() {
  return (
    <section className="section section-alt" id="ai-automation">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">AI Automation</p>
          <h2 className="h2">Automate repetitive work <em>without losing control</em>.</h2>
          <p className="lede">Two focused automation systems for sales and finance teams. They handle repetitive processing while important customer and payment decisions stay with your team.</p>
        </div>

        <div className="product-block reveal">
          <div>
            <span className="product-tag live">Flagship solution</span>
            <h3 className="product-title">Lead Qualification & Response</h3>
            <p className="product-desc">
              Companies lose opportunities because leads arrive at all hours and sales
              teams respond too slowly. This system captures inbound enquiries from configured sources, qualifies and prioritizes them,
              updates the CRM and prepares the right follow-up context for your sales team.
              Customer-facing AI text remains under human review.
            </p>
            <ul className="product-benefits">
              <li><span className="check-dot" aria-hidden="true">&#10003;</span>Faster, more consistent lead qualification</li>
              <li><span className="check-dot" aria-hidden="true">&#10003;</span>Fewer opportunities missed outside business hours</li>
              <li><span className="check-dot" aria-hidden="true">&#10003;</span>CRM notes and follow-up actions kept traceable</li>
            </ul>
            <div className="product-actions">
              <a href="/ai-lead-qualification/en#demo" className="btn btn-primary">Watch Demo</a>
              <a href="#contact" className="btn btn-ghost">Get Started</a>
            </div>
            <div className="product-language-links" aria-label="Discover Lead Qualification in your preferred language">
              <span>Discover more:</span>
              <a href="/ai-lead-qualification/en" className="btn btn-ghost btn-sm">English</a>
              <a href="/ai-lead-qualification/pt" className="btn btn-ghost btn-sm">Português</a>
              <a href="/ai-lead-qualification/fr" className="btn btn-ghost btn-sm">Français</a>
              <a href="/ai-lead-qualification/es" className="btn btn-ghost btn-sm">Español</a>
            </div>
          </div>
          <LeadDemo />
        </div>

        <div className="product-block is-reversed reveal">
          <div>
            <span className="product-tag early">Early access</span>
            <h3 className="product-title">Invoice & Accounts Payable Automation</h3>
            <p className="product-desc">
              Finance teams lose hours downloading invoices, checking suppliers, hunting
              duplicates and chasing approvals. This system reads each invoice, validates
              configured fields and duplicate conditions, flags exceptions, and prepares it for
              human approval. It reads and checks; it does not move money on its own.
            </p>
            <ul className="product-benefits">
              <li><span className="check-dot" aria-hidden="true">&#10003;</span>Less manual data entry per invoice</li>
              <li><span className="check-dot" aria-hidden="true">&#10003;</span>Duplicate and mismatch detection before approval</li>
              <li><span className="check-dot" aria-hidden="true">&#10003;</span>A clear audit trail for every invoice</li>
            </ul>
            <div className="product-actions">
              <a href="/ai-invoice-automation/en#demo" className="btn btn-primary">Watch Demo</a>
              <a href="#contact" className="btn btn-ghost">Get Started</a>
            </div>
            <div className="product-language-links" aria-label="Discover Invoice Automation in your preferred language">
              <span>Discover more:</span>
              <a href="/ai-invoice-automation/en" className="btn btn-ghost btn-sm">English</a>
              <a href="/ai-invoice-automation/pt" className="btn btn-ghost btn-sm">Português</a>
              <a href="/ai-invoice-automation/fr" className="btn btn-ghost btn-sm">Français</a>
              <a href="/ai-invoice-automation/es" className="btn btn-ghost btn-sm">Español</a>
            </div>
          </div>
          <InvoiceMedia />
        </div>
      </div>
    </section>
  );
}
