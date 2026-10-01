"use client";

import Link from "next/link";
import { useState } from "react";

export type Lang = "en" | "fr" | "es" | "pt";

export type ServiceContent = {
  tagline: string;
  problem: string;
  howItWorks: string[];
  impact: string;
  ctaLabel: string;
};

const LANG_LABEL: Record<Lang, string> = { en: "EN", fr: "FR", es: "ES", pt: "PT" };
const LANG_NAME: Record<Lang, string> = { en: "English", fr: "Fran\u00e7ais", es: "Espa\u00f1ol", pt: "Portugu\u00eas" };

const FALLBACK: Record<Lang, ServiceContent> = {
  en: { tagline: "", problem: "", howItWorks: [], impact: "", ctaLabel: "" },
  fr: {
    tagline: "Contenu en fran\u00e7ais bient\u00f4t disponible.",
    problem: "", howItWorks: [], impact: "",
    ctaLabel: "Parlez-nous de votre projet",
  },
  es: {
    tagline: "Contenido en espa\u00f1ol pr\u00f3ximamente.",
    problem: "", howItWorks: [], impact: "",
    ctaLabel: "H\u00e1blanos de tu proyecto",
  },
  pt: {
    tagline: "Conte\u00fado em portugu\u00eas em breve.",
    problem: "", howItWorks: [], impact: "",
    ctaLabel: "Fale-nos do seu projeto",
  },
};

export default function ServiceDetailPage({
  eyebrow,
  title,
  content,
}: {
  eyebrow: string;
  title: string;
  content: Partial<Record<Lang, ServiceContent>>;
}) {
  const [lang, setLang] = useState<Lang>("en");
  const c = content[lang] && content[lang]!.tagline ? content[lang]! : FALLBACK[lang];
  const hasFullContent = !!content[lang];

  return (
    <>
      <header className="nav is-scrolled">
        <div className="nav-inner">
          <Link href="/" className="logo">Lumbe<span>.Tech</span></Link>
          <nav className="nav-menu" aria-label="Main">
            <ul className="nav-links">
              <li><Link href="/#aws-cloud">&larr; Back to solutions</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="section" style={{ paddingTop: 60 }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>{title}</h1>

          <div style={{ display: "flex", gap: 8, marginTop: 28, marginBottom: 8 }} role="group" aria-label="Choose language">
            {(Object.keys(LANG_LABEL) as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className="btn btn-sm"
                aria-pressed={lang === l}
                style={{
                  background: lang === l ? "var(--gradient)" : "transparent",
                  color: lang === l ? "#0b1626" : "var(--text-2)",
                  borderColor: lang === l ? "transparent" : "var(--border-strong)",
                }}
              >
                {LANG_LABEL[l]}
              </button>
            ))}
          </div>
          <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)", marginBottom: 32 }}>
            Reading in {LANG_NAME[lang]}
          </p>

          <div className="product-media glass" style={{ minHeight: 280, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 40 }}>
            <div style={{ textAlign: "center", color: "var(--muted)" }}>
              <p style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Demo video, {LANG_NAME[lang]}
              </p>
              <p style={{ fontSize: 13.5, marginTop: 8 }}>Recording in progress. Coming soon.</p>
            </div>
          </div>

          {hasFullContent ? (
            <>
              <p className="lede" style={{ fontSize: 18 }}>{c.tagline}</p>

              <div style={{ marginTop: 36 }}>
                <h2 className="h3" style={{ marginBottom: 12 }}>The problem</h2>
                <p style={{ color: "var(--text-2)", lineHeight: 1.75 }}>{c.problem}</p>
              </div>

              <div style={{ marginTop: 36 }}>
                <h2 className="h3" style={{ marginBottom: 16 }}>How it works</h2>
                <ol style={{ display: "grid", gap: 14, listStyle: "none" }}>
                  {c.howItWorks.map((step, i) => (
                    <li key={i} style={{ display: "flex", gap: 12 }}>
                      <span style={{ fontFamily: "var(--mono)", color: "var(--accent)", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                      <span style={{ color: "var(--text-2)", lineHeight: 1.7 }}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div style={{ marginTop: 36 }}>
                <h2 className="h3" style={{ marginBottom: 12 }}>Impact on your business</h2>
                <p style={{ color: "var(--text-2)", lineHeight: 1.75 }}>{c.impact}</p>
              </div>
            </>
          ) : (
            <p className="lede">{c.tagline}</p>
          )}

          <div className="hero-actions" style={{ marginTop: 44 }}>
            <a href="/#contact" className="btn btn-primary">{c.ctaLabel || "Get Started"}</a>
            <Link href="/" className="btn btn-ghost">Back to homepage</Link>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-text">© 2026 Lumbe Tech</span>
          <span className="footer-text">contact@lumbetech.com</span>
        </div>
      </footer>
    </>
  );
}
