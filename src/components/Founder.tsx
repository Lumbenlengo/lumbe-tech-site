const CREDENTIALS = [
  "Make AI Agent Builder",
  "Make AI Automation Explorer",
  "Make Advanced",
  "Make Intermediate",
  "Make Basics",
];
export default function Founder() {
  return (
    <section className="section founder-section" id="founder">
      <div className="container">
        <div className="founder-premium glass reveal">
          <div className="founder-photo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/patricio-lumbe-founder.jpg" alt="Patricio Lumbe, Founder of Lumbe Tech" className="founder-photo" />
          </div>
          <div className="founder-content">
            <p className="eyebrow">Founder</p>
            <p className="founder-name">Patricio Lumbe</p>
            <p className="founder-role">Founder &amp; AI Automation Engineer</p>
            <p className="founder-copy">
              Patricio designs Make.com workflows and practical AI automations for sales and finance teams. He stays close to the work from the first process discussion through implementation, testing and handover, so the solution fits the way the business operates.
            </p>
            <p className="founder-education">Mathematics &amp; Computer Science<br /><span>Université Toulouse - Jean Jaurès</span></p>
            <ul className="chips founder-credentials">
              {CREDENTIALS.map((credential) => <li className="chip" key={credential}>{credential}</li>)}
            </ul>
            <div className="product-actions founder-actions">
              <a href="/ai-lead-qualification/en" className="btn btn-ghost">View Solutions</a>
              <a href="mailto:contact@lumbetech.com?subject=Conversation%20with%20Lumbe%20Tech" className="btn btn-primary">Start a Conversation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
