const PRINCIPLES = [
  { name: "Business First", desc: "We start with the business problem. Each workflow should save time, improve consistency or help your team respond with better context." },
  { name: "Human-Controlled Automation", desc: "Automation handles repetitive processing. Customer-facing messages, approvals and money-related decisions remain reviewable by a person." },
  { name: "Built with Make", desc: "We design connected Make scenarios with clear triggers, validation, error handling and handovers your team can understand." },
  { name: "Built for Your Stack", desc: "We connect the tools your company already uses whenever they fit the process and the technical requirements." },
];
const INTEGRATIONS = [
  ["Make.com", "M"], ["Gmail", "✉"], ["Google Workspace", "G"], ["Microsoft 365", "365"],
  ["Outlook", "O"], ["Slack", "S"], ["HubSpot", "H"], ["Salesforce", "SF"],
  ["Google Drive", "D"], ["IMAP-compatible email", "@"],
];

export default function WhyLumbeTech() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Why Lumbe Tech</p>
          <h2 className="h2">Useful automation, designed around the way your team works</h2>
        </div>
        <div className="principle-grid">
          {PRINCIPLES.map((principle) => (
            <div className="principle-card glass reveal" key={principle.name}>
              <h3>{principle.name}</h3><p>{principle.desc}</p>
            </div>
          ))}
        </div>
        <div className="reveal integrations-showcase">
          <p className="eyebrow integration-heading">Connects with tools like</p>
          <ul className="integration-grid">
            {INTEGRATIONS.map(([name, mark]) => (
              <li className="integration-brand" key={name}>
                <span className="integration-mark" aria-hidden="true">{mark}</span><span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
