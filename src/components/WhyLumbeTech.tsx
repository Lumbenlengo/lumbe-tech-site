import BrandLogo from "./BrandLogo";

const PRINCIPLES = [
  { name: "Business First", desc: "We start with the business problem. Each workflow should save time, improve consistency or help your team respond with better context." },
  { name: "Human-Controlled Automation", desc: "Automation handles repetitive processing. Customer-facing messages, approvals and money-related decisions remain reviewable by a person." },
  { name: "Built with Make", desc: "We design connected Make scenarios with clear triggers, validation, error handling and handovers your team can understand." },
  { name: "Built for Your Stack", desc: "We connect the tools your company already uses whenever they fit the process and the technical requirements." },
];
const INTEGRATIONS = [
  { name: "Make", slug: "make" },
  { name: "Gmail", slug: "gmail" },
  { name: "Google Drive", slug: "googledrive" },
  { name: "Outlook", slug: "microsoftoutlook" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Salesforce", slug: "salesforce" },
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
            {INTEGRATIONS.map(({ name, slug }) => (
              <li className="integration-brand" key={name}>
                <span className="integration-mark" aria-hidden="true">
                  <BrandLogo brand={name} slug={slug} className="integration-logo" decorative />
                </span>
                <span>{name}</span>
              </li>
            ))}
          </ul>
          <p className="integration-legal-note">
            Brand names and logos belong to their respective owners and are shown only to identify example tools. No partnership or endorsement is implied.
          </p>
        </div>
      </div>
    </section>
  );
}
