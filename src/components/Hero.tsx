import HeroPipeline from "./HeroPipeline";

type TickerItem = { label: string; mark: string };

const TICKER_ITEMS: TickerItem[] = [
  { label: "Make.com", mark: "M" }, { label: "AI Agents", mark: "AI" },
  { label: "HubSpot", mark: "H" }, { label: "Google Workspace", mark: "G" },
  { label: "Slack", mark: "S" }, { label: "Salesforce", mark: "SF" },
  { label: "Gmail", mark: "@" }, { label: "Invoice Processing", mark: "AP" },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="reveal is-visible">
          <p className="hero-badge"><span className="pulse-dot" aria-hidden="true" />Make.com Automation · AI Workflows</p>
          <h1 className="h1">Give your team more time for the work that matters</h1>
          <p className="lede">Lumbe Tech designs practical AI automations with Make for sales and finance teams. Qualify enquiries, organise follow-ups and process invoices while people stay in control of important decisions.</p>
          <div className="hero-actions">
            <a href="#ai-automation" className="btn btn-primary">Explore Our Solutions</a>
            <a href="mailto:contact@lumbetech.com?subject=Lumbe%20Tech%20Discovery%20Call" className="btn btn-ghost">Book a Call</a>
          </div>
          <p className="trust-strip">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
            Connected workflows, clear rules and human review
          </p>
        </div>
        <div className="reveal is-visible" style={{ transitionDelay: "80ms" }}><HeroPipeline /></div>
      </div>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span className="ticker-item" key={item.label + "-" + i}>
              <span className="ticker-icon" style={{
                display: "inline-grid", placeItems: "center", background: "rgba(56,189,248,.12)",
                color: "var(--accent)", border: "1px solid var(--border-strong)",
                fontSize: item.mark.length > 1 ? 7 : 10, fontFamily: "var(--mono)", fontWeight: 700, lineHeight: 1
              }}>{item.mark}</span>
              {item.label}<span className="ticker-sep">&#10022;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
