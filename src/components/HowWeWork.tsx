const STEPS = [
  { name: "Discover", desc: "We understand the problem, current process, constraints and the result you need." },
  { name: "Build", desc: "We build the agreed solution around your systems, access model and business requirements." },
  { name: "Shadow & Test", desc: "We test the workflow with controlled cases before it becomes part of day-to-day operations." },
  { name: "Deploy & Improve", desc: "We deploy with the right controls in place, then improve the system using real operational feedback." },
];

export default function HowWeWork() {
  return (
    <section className="section section-alt" id="how">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">How We Work</p>
          <h2 className="h2">A clear path from problem to production</h2>
        </div>
        <div className="flow-steps">
          {STEPS.map((s, i) => (
            <div className="flow-step reveal" key={s.name}>
              <p className="flow-num">{String(i + 1).padStart(2, "0")}</p>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
