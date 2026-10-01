"use client";

function LeadDemo() {
  return (
    <div className="product-media lead-outcomes" style={{ padding: 28 }}>
      <p className="eyebrow">What your sales team receives</p>
      <div className="lead-outcome-grid">
        {[
          ["01", "Qualified priority", "New enquiries are reviewed and organised as HIGH, MEDIUM or LOW priority using configured rules"],
          ["02", "CRM context", "Useful qualification context, notes and follow-up actions are prepared where your sales team already works"],
          ["03", "Human control", "Customer-facing AI text stays as a draft until a person reviews and decides what to send"],
        ].map(([n, title, text]) => (
          <div className="lead-outcome" key={n}>
            <span>{n}</span>
            <div><strong>{title}</strong><p>{text}</p></div>
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
          <h2 className="h2">Automate repetitive work <em>without losing control</em></h2>
          <p className="lede">Two focused automation systems for sales and finance teams. They handle repetitive processing while important customer and payment decisions stay with your team.</p>
        </div>

        <div className="product-block product-frame glass reveal">
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
              <a href="/free-pilot" className="btn btn-ghost">Book a Free Pilot</a>
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

        <div className="product-block product-frame glass is-reversed reveal">
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
              <a href="/ai-invoice-automation/en" className="btn btn-ghost">Get Started</a>
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
