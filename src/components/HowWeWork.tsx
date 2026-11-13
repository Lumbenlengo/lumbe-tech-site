const STEPS = [
  { name: "Discover", desc: "We understand the process, the people involved, the current tools and the result your team needs." },
  { name: "Map the workflow", desc: "We define triggers, data fields, Make scenarios, business rules and the points where a person must review or approve." },
  { name: "Build & test", desc: "We connect the agreed tools, test normal and exception cases, and check that errors are visible and recoverable." },
  { name: "Launch & improve", desc: "We put the workflow into use with clear handover notes, then improve it using feedback from real operations." },
];
export default function HowWeWork() {
  return (
    <section className="section section-alt" id="how">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">How We Work</p>
          <h2 className="h2">A clear path from a manual process to a dependable automation</h2>
        </div>
        <div className="flow-steps">
          {STEPS.map((step, index) => (
            <div className="flow-step reveal" key={step.name}>
              <p className="flow-num">{String(index + 1).padStart(2, "0")}</p>
              <h3>{step.name}</h3><p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
