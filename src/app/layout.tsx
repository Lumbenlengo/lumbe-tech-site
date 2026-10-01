import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import PageEffects from "@/components/PageEffects";

export const metadata: Metadata = {
  title: "Lumbe Tech | AWS Cloud Engineering & AI Automation for B2B",
  description:
    "Lumbe Tech reviews AWS cost and security, and builds the AI systems that qualify leads and process invoices. Human-controlled, fixed-scope, built for your stack.",
  metadataBase: new URL("https://lumbetech.com"),
  openGraph: {
    title: "Lumbe Tech | AWS Cloud Engineering & AI Automation for B2B",
    description: "AWS cost and security reviews, and AI systems for leads and invoices. Human-controlled. Built for your stack.",
    type: "website",
    url: "https://lumbetech.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumbe Tech | AWS Cloud Engineering & AI Automation for B2B",
    description: "AWS cost and security reviews, and AI systems for leads and invoices.",
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
