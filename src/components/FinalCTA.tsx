export default function FinalCTA() {
  return (
    <section className="section" id="contact" style={{ paddingBottom: 100 }}>
      <div className="container">
        <div className="cta-band reveal">
          <p className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>Get Started</p>
          <h2 className="h2">Start with one process your team would like to simplify</h2>
          <p className="lede" style={{ margin: "16px auto 0", textAlign: "center" }}>
            Tell us where manual lead handling, invoice processing or repetitive administration is taking time away from your team. We will help you define a practical first step.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: 30 }}>
            <a href="mailto:contact@lumbetech.com?subject=Lumbe%20Tech%20Discovery%20Call" className="btn btn-primary">Book a Call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
