import Link from "next/link";
import FreePilotForm from "../../components/FreePilotForm";

export default function FreePilotPage() {
  return (
    <>
      <header className="nav is-scrolled"><div className="nav-inner"><Link href="/" className="logo">Lumbe<span>.Tech</span></Link><nav className="nav-menu"><ul className="nav-links"><li><Link href="/ai-lead-qualification/en">Lead Qualification</Link></li></ul></nav></div></header>
      <main className="section" style={{ paddingTop: 72 }}>
        <div className="container pilot-page">
          <div className="pilot-intro">
            <p className="eyebrow">FREE 15-DAY PILOT</p>
            <h1 className="h1" style={{ fontSize: "clamp(36px,5vw,56px)" }}>Try AI Lead Qualification with a defined part of your sales process</h1>
            <p className="lede">Tell us how your team handles new enquiries today. We will review the fit, agree a practical scope and configure a focused 15-day pilot around supported tools.</p>
            <div className="pilot-points">
              <div><strong>Scoped</strong><span>One agreed enquiry source and a focused workflow.</span></div>
              <div><strong>Controlled</strong><span>Your team keeps control of customer communication.</span></div>
              <div><strong>No long-term commitment</strong><span>Evaluate the workflow before deciding on a wider rollout.</span></div>
            </div>
          </div>
          <FreePilotForm />
        </div>
      </main>
      <footer className="footer"><div className="container footer-inner"><span className="footer-text">© 2026 Lumbe Tech</span><span className="footer-text">contact@lumbetech.com</span></div></footer>
    </>
  );
}
