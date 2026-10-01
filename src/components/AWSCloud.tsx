const SERVICES = [
  {
    icon: "$",
    name: "AWS Cost Optimization Assessment",
    desc: "Understand where your AWS money goes, identify avoidable spend, and get a prioritized optimization roadmap grounded in your actual workloads.",
    tag: "Fixed-scope B2B assessment",
    cta: "Discuss Your AWS Spend",
    slug: "aws-finops",
  },
  {
    icon: "◇",
    name: "AWS Security & Cloud Posture Assessment",
    desc: "Find risky configurations, missing controls and unnecessary exposure across IAM, networking, encryption, logging, secrets and backups, then prioritize remediation.",
    tag: "Fixed-scope B2B assessment",
    cta: "Discuss a Security Assessment",
    slug: "aws-audit",
  },
];

const LANGS = [
  ["English", "en"], ["Português", "pt"], ["Français", "fr"], ["Español", "es"],
] as const;

export default function AWSCloud() {
  return (
    <section className="section" id="aws-cloud">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">AWS Cloud Engineering</p>
          <h2 className="h2">Reduce avoidable AWS spend. Make cloud risk visible.</h2>
          <p className="lede">Two focused B2B assessments built around concrete engineering evidence: cost optimization and AWS security posture. Clear scope, prioritized findings, and deliverables your team can act on.</p>
        </div>
        <div className="service-grid">
          {SERVICES.map((s) => (
            <div className="service-card glass reveal" key={s.name}>
              <span className="service-icon" aria-hidden="true">{s.icon}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <p className="service-tag">{s.tag}</p>
              <a href={`/${s.slug}/en`} className="btn btn-ghost btn-sm">{s.cta}</a>
              <div className="product-language-links">
                <span>Discover more</span>
                {LANGS.map(([label, code]) => <a key={code} href={`/${s.slug}/${code}`} className="btn btn-ghost btn-sm">{label}</a>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
