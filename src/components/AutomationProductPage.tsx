import Link from "next/link";

export type ProductLang = "en" | "pt" | "fr" | "es";

type Copy = {
  languageName: string;
  eyebrow: string;
  title: string;
  tagline: string;
  demoTitle: string;
  demoText: string;
  problemTitle: string;
  problem: string;
  worksTitle: string;
  steps: string[];
  whyTitle: string;
  why: string;
  impactTitle: string;
  impact: string;
  controlTitle: string;
  control: string;
  docsTitle: string;
  docsIntro: string;
  docs: { title: string; text: string }[];
  docsStatus: string;
  ctaTitle: string;
  ctaText: string;
  cta: string;
  back: string;
  faq?: { question: string; answer: string }[];
};

const LABELS: Record<ProductLang, string> = { en: "English", pt: "Português", fr: "Français", es: "Español" };
const DOC_FILES: Record<string, string[]> = {
  "ai-lead-qualification": ["lead-security-overview.pdf", "lead-data-handling.pdf", "lead-ai-human-oversight.pdf"],
  "ai-invoice-automation": ["invoice-security-overview.pdf", "invoice-data-handling.pdf", "invoice-approval-audit.pdf"],
  "aws-finops": ["aws-finops-methodology.pdf", "aws-finops-access.pdf", "aws-finops-deliverables.pdf"],
  "aws-audit": ["aws-security-methodology.pdf", "aws-security-access.pdf", "aws-security-deliverables.pdf"],
};


const LEAD_DEMO_URL = "https://storage.googleapis.com/lumbetech-public/lead-qualification/demo-en.mp4";

const CONTACT_SUBJECTS: Record<string, string> = {
  "ai-lead-qualification": "AI Lead Qualification, Discovery Call",
  "ai-invoice-automation": "AI Invoice Automation, Discovery Call",
  "aws-finops": "AWS Cost Optimization Assessment",
  "aws-audit": "AWS Security Assessment",
};

export default function AutomationProductPage({
  lang,
  productSlug,
  copy,
}: {
  lang: ProductLang;
  productSlug: "ai-lead-qualification" | "ai-invoice-automation" | "aws-finops" | "aws-audit";
  copy: Copy;
}) {
  return (
    <>
      <header className="nav is-scrolled">
        <div className="nav-inner">
          <Link href="/" className="logo">Lumbe<span>.Tech</span></Link>
          <nav className="nav-menu" aria-label="Main">
            <ul className="nav-links"><li><Link href={productSlug.startsWith("aws-") ? "/#aws-cloud" : "/#ai-automation"}>&larr; {copy.back}</Link></li></ul>
          </nav>
        </div>
      </header>

      <main className="section" style={{ paddingTop: 60 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 30 }} aria-label="Choose language">
            {(Object.keys(LABELS) as ProductLang[]).map((code) => (
              <Link key={code} href={`/${productSlug}/${code}`} className={`btn btn-sm ${code === lang ? "btn-primary" : "btn-ghost"}`} aria-current={code === lang ? "page" : undefined}>
                {LABELS[code]}
              </Link>
            ))}
          </div>

          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="h1" style={{ fontSize: "clamp(34px, 5vw, 54px)", maxWidth: 820 }}>{copy.title}</h1>
          <p className="lede" style={{ fontSize: 19, maxWidth: 760 }}>{copy.tagline}</p>

          <section id="demo" style={{ marginTop: 44 }}>
            {productSlug === "ai-lead-qualification" ? (
              <div className="product-media glass demo-video-card" style={{ minHeight: 0, padding: 20 }}>
                <div style={{ marginBottom: 16 }}>
                  <p className="eyebrow" style={{ marginBottom: 8 }}>{copy.demoTitle}</p>
                  <p style={{ color: "var(--text-2)", lineHeight: 1.7 }}>{copy.demoText}</p>
                </div>
                <video controls preload="metadata" playsInline style={{ width: "100%", borderRadius: 12, display: "block" }}>
                  <source src={LEAD_DEMO_URL} type="video/mp4" />
                  Your browser does not support HTML video
                </video>
              </div>
            ) : (
              <div className="product-media glass" style={{ minHeight: 360, display: "grid", placeItems: "center", padding: 30 }}>
                <div style={{ textAlign: "center", maxWidth: 520 }}>
                  <p className="eyebrow" style={{ marginBottom: 10 }}>{copy.demoTitle}</p>
                  <p style={{ color: "var(--text-2)", lineHeight: 1.7 }}>{copy.demoText}</p>
                </div>
              </div>
            )}
          </section>

          <section style={{ marginTop: 54 }}>
            <h2 className="h2" style={{ fontSize: 28 }}>{copy.problemTitle}</h2>
            <p className="lede" style={{ maxWidth: 800 }}>{copy.problem}</p>
          </section>

          <section style={{ marginTop: 48 }}>
            <h2 className="h2" style={{ fontSize: 28, marginBottom: 24 }}>{copy.worksTitle}</h2>
            <div style={{ display: "grid", gap: 14 }}>
              {copy.steps.map((step, i) => (
                <div key={step} className="glass" style={{ borderRadius: "var(--radius)", padding: "20px 22px", display: "flex", gap: 16 }}>
                  <span style={{ fontFamily: "var(--mono)", color: "var(--accent)", fontWeight: 700 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ color: "var(--text-2)", lineHeight: 1.7 }}>{step}</span>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            <div className="glass" style={{ borderRadius: "var(--radius)", padding: 26 }}>
              <h2 className="h3">{copy.whyTitle}</h2>
              <p style={{ color: "var(--text-2)", lineHeight: 1.7, marginTop: 12 }}>{copy.why}</p>
            </div>
            <div className="glass" style={{ borderRadius: "var(--radius)", padding: 26 }}>
              <h2 className="h3">{copy.impactTitle}</h2>
              <p style={{ color: "var(--text-2)", lineHeight: 1.7, marginTop: 12 }}>{copy.impact}</p>
            </div>
          </section>

          <section style={{ marginTop: 48 }}>
            <h2 className="h2" style={{ fontSize: 28 }}>{copy.controlTitle}</h2>
            <p className="lede" style={{ maxWidth: 800 }}>{copy.control}</p>
          </section>

          <section style={{ marginTop: 48 }}>
            <h2 className="h2" style={{ fontSize: 28 }}>{copy.docsTitle}</h2>
            <p className="lede" style={{ maxWidth: 800 }}>{copy.docsIntro}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 24 }}>
              {copy.docs.map((doc, i) => (
                <div key={doc.title} className="glass" style={{ borderRadius: "var(--radius)", padding: 22 }}>
                  <span className="product-tag early" style={{ marginBottom: 12 }}>{copy.docsStatus}</span>
                  <h3 className="h3">{doc.title}</h3>
                  <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.65, marginTop: 8 }}>{doc.text}</p>
                  <a href={`/docs/${DOC_FILES[productSlug][i]}`} target="_blank" rel="noopener" className="btn btn-ghost btn-sm" style={{ marginTop: 14 }}>PDF</a>
                </div>
              ))}
            </div>
          </section>

          {copy.faq && copy.faq.length > 0 && (
            <section style={{ marginTop: 54 }}>
              <p className="eyebrow">FAQ</p>
              <h2 className="h2" style={{ fontSize: 28, marginBottom: 22 }}>Frequently asked questions</h2>
              <div style={{ display: "grid", gap: 12 }}>
                {copy.faq.map((item) => (
                  <details className="glass faq-item" key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <section className="glass" style={{ borderRadius: "var(--radius)", padding: 32, marginTop: 54 }}>
            <h2 className="h2" style={{ fontSize: 28 }}>{copy.ctaTitle}</h2>
            <p className="lede">{copy.ctaText}</p>
            <div className="product-actions" style={{ marginTop: 24 }}>
              <a href={`mailto:contact@patriciolumbe.com?subject=${encodeURIComponent(CONTACT_SUBJECTS[productSlug])}`} className="btn btn-primary">{copy.cta}</a>
              <Link href="/" className="btn btn-ghost">{copy.back}</Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer"><div className="container footer-inner"><span className="footer-text">© 2026 Lumbe Tech</span><span className="footer-text">contact@patriciolumbe.com</span></div></footer>
    </>
  );
}
