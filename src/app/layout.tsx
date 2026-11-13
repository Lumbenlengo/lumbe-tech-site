import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import PageEffects from "@/components/PageEffects";

export const metadata: Metadata = {
  title: "Lumbe Tech | AI Automation with Make for B2B",
  description: "Lumbe Tech builds practical Make.com automations and AI-assisted workflows for sales and finance teams. Qualify leads, process invoices and keep people in control of important decisions.",
  metadataBase: new URL("https://lumbetech.com"),
  openGraph: {
    title: "Lumbe Tech | AI Automation with Make for B2B",
    description: "Practical Make.com automations for lead qualification and invoice processing. Human-controlled, built around the way your team works.",
    type: "website",
    url: "https://lumbetech.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumbe Tech | AI Automation with Make for B2B",
    description: "Make.com automations for sales and finance teams, with people in control of important decisions.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ScrollReveal />
        <PageEffects />
        <div className="grid-bg" aria-hidden="true" />
        <div className="aurora aurora-1" aria-hidden="true" />
        <div className="aurora aurora-2" aria-hidden="true" />
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
