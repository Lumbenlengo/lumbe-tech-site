import HeroPipeline from "./HeroPipeline";

type TickerItem = { label: string; isAws?: true; brand?: string };

const TICKER_ITEMS: TickerItem[] = [
  { label: "AWS", isAws: true },
  { label: "Terraform", brand: "https://cdn.simpleicons.org/terraform/844FBA" },
  { label: "Kubernetes", brand: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  { label: "Docker", brand: "https://cdn.simpleicons.org/docker/2496ED" },
  { label: "GitHub Actions", brand: "https://cdn.simpleicons.org/githubactions/2088FF" },
  { label: "Python", brand: "https://cdn.simpleicons.org/python/3776AB" },
  { label: "Grafana", brand: "https://cdn.simpleicons.org/grafana/F46800" },
  { label: "Linux", brand: "https://cdn.simpleicons.org/linux/FCC624" },
];

function AwsBadge() {
  return (
    <svg className="ticker-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="4" fill="#232F3E" />
      <text x="20" y="21" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12.5" fontWeight="700" fill="#FFF">aws</text>
      <path d="M10 26.5c6 4.4 14 4.4 20 0" stroke="#FF9900" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="reveal is-visible">
          <p className="hero-badge">
            <span className="pulse-dot" aria-hidden="true" />
            AWS Certified &middot; Built on Make
          </p>
          <h1 className="h1">
            Turn repetitive work into faster sales, finance and cloud operations
          </h1>
          <p className="lede">
            Lumbe Tech builds practical AI automations for sales and finance teams, and helps businesses reduce AWS waste and cloud risk while keeping people in control of important decisions
          </p>
          <div className="hero-actions">
            <a href="#ai-automation" className="btn btn-primary">Explore Our Solutions</a>
            <a href="mailto:contact@patriciolumbe.com?subject=Lumbe%20Tech%20Discovery%20Call" className="btn btn-ghost">Book a Call</a>
          </div>
          <p className="trust-strip">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
            Built from real cloud engineering and automation work
          </p>
        </div>

        <div className="reveal is-visible" style={{ transitionDelay: "80ms" }}>
          <HeroPipeline />
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span className="ticker-item" key={`${item.label}-${i}`}>
              {item.isAws ? (
                <AwsBadge />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="ticker-icon" src={item.brand} alt="" loading="lazy" />
              )}
              {item.label}
              <span className="ticker-sep">&#10022;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
