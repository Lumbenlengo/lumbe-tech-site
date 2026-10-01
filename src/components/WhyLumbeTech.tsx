const PRINCIPLES = [
  { name: "Business First", desc: "We start with the business problem. The solution must save time, reduce cost, reduce risk or improve how your team works." },
  { name: "Human-Controlled Automation", desc: "Automation handles the repetitive work. High-risk decisions, anything customer-facing or money-related, stay reviewable by a person." },
  { name: "Cloud-Native Engineering", desc: "Secure, observable and maintainable infrastructure designed for real production environments." },
  { name: "Built for Your Stack", desc: "We work with the tools your company already uses whenever that is the right technical choice." },
];

const INTEGRATIONS = ["Gmail", "Google Workspace", "Microsoft 365", "Outlook", "Slack", "HubSpot", "Salesforce", "Google Drive", "AWS", "IMAP-compatible email"];

export default function WhyLumbeTech() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Why Lumbe Tech</p>
          <h2 className="h2">Practical systems built around your business.</h2>
        </div>
        <div className="principle-grid">
          {PRINCIPLES.map((p) => (
            <div className="principle-card glass reveal" key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 40 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Works with tools like</p>
          <ul className="chips">
            {INTEGRATIONS.map((i) => <li className="chip" key={i}>{i}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
