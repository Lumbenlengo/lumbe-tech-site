export default function FinalCTA() {
  return (
    <section className="section" id="contact" style={{ paddingBottom: 100 }}>
      <div className="container">
        <div className="cta-band reveal">
          <p className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>Get Started</p>
          <h2 className="h2">Start with the problem you want to solve.</h2>
          <p className="lede" style={{ margin: "16px auto 0", textAlign: "center" }}>
            Tell us where AWS cost, cloud risk or repetitive work is slowing your team down. We will help you define the right next step.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: 30 }}>
            <a href="mailto:contact@lumbetech.com?subject=Book%20a%20call" className="btn btn-primary">Book a Call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
