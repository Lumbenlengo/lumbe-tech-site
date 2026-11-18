import HeroPipeline from "./HeroPipeline";
import BrandLogo from "./BrandLogo";

type TickerItem = { label: string; slug: string };

const TICKER_ITEMS: TickerItem[] = [
  { label: "Make", slug: "make" },
  { label: "Gmail", slug: "gmail" },
  { label: "Google Drive", slug: "googledrive" },
  { label: "Outlook", slug: "microsoftoutlook" },
  { label: "HubSpot", slug: "hubspot" },
  { label: "Salesforce", slug: "salesforce" },
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
              <BrandLogo brand={item.label} slug={item.slug} className="ticker-icon" decorative />
              {item.label}<span className="ticker-sep">&#10022;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
