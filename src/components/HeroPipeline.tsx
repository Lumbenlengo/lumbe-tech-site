"use client";
import { Fragment, useEffect, useRef, useState } from "react";

const STAGES = ["Audit runs", "Findings scored", "You review", "Fixed"] as const;

const LOG_LINES = [
  { html: '<span class="out">Scanning AWS account: cost + security</span>' },
  { html: '<span class="out">12 idle resources found · 3 IAM risks flagged</span>' },
  { html: '<span class="ok">Report ready.</span> <span class="out">Prioritised, sent for review.</span>' },
  { html: '<span class="out">Reviewed by you</span>' },
  { html: '<span class="ok">Fixed.</span> <span class="out">$1,240/mo saved, 3 risks closed.</span>' },
];

export default function HeroPipeline() {
  const [stageState, setStageState] = useState<Record<number, "is-active" | "is-done" | undefined>>({});
  const [lineDone, setLineDone] = useState<Record<number, boolean>>({});
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const log = logRef.current;
    if (!log) return;

    const finish = () => {
      setStageState({ 0: "is-done", 1: "is-done", 2: "is-done", 3: "is-done" });
      setLineDone({ 0: true, 1: true, 2: true });
    };

    if (prefersReducedMotion) {
      log.innerHTML = LOG_LINES.map((l) => l.html).join("\n");
      finish();
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      log.innerHTML = "";
      setStageState({});
      setLineDone({});
      setStageState((s) => ({ ...s, 0: "is-active" }));
      timers.push(setTimeout(() => { log.innerHTML += LOG_LINES[0].html + "\n"; }, 300));
      timers.push(setTimeout(() => setStageState((s) => ({ ...s, 0: "is-done", 1: "is-active" })), 900));
      timers.push(setTimeout(() => { log.innerHTML += LOG_LINES[1].html + "\n"; }, 1100));
      timers.push(setTimeout(() => { log.innerHTML += LOG_LINES[2].html + "\n"; }, 1900));
      timers.push(setTimeout(() => setStageState((s) => ({ ...s, 1: "is-done" })), 2000));
      timers.push(setTimeout(() => setLineDone((l) => ({ ...l, 0: true })), 2000));
      timers.push(setTimeout(() => setStageState((s) => ({ ...s, 2: "is-active" })), 2400));
      timers.push(setTimeout(() => { log.innerHTML += LOG_LINES[3].html + "\n"; }, 3400));
      timers.push(setTimeout(() => setStageState((s) => ({ ...s, 2: "is-done", 3: "is-active" })), 3700));
      timers.push(setTimeout(() => setLineDone((l) => ({ ...l, 1: true })), 3700));
      timers.push(setTimeout(() => { log.innerHTML += LOG_LINES[4].html + "\n"; }, 4000));
      timers.push(setTimeout(() => { setStageState((s) => ({ ...s, 3: "is-done" })); setLineDone((l) => ({ ...l, 2: true })); }, 4300));
      timers.push(setTimeout(run, 9000));
    };

    timers.push(setTimeout(run, 400));
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, []);

  return (
    <div className="pipeline-visual" role="img" aria-label="Workflow: AWS account is audited for cost and security, findings are scored, you review them, then they are fixed.">
      <div className="pipeline">
        {STAGES.map((name, i) => (
          <Fragment key={name}>
            <div className={`pipeline-stage${stageState[i] ? " " + stageState[i] : ""}`}>
              <span className="pipeline-dot" />
              <span className="pipeline-name">{name}</span>
            </div>
            {i < STAGES.length - 1 && <span className={`pipeline-line${lineDone[i] ? " is-done" : ""}`} />}
          </Fragment>
        ))}
      </div>
      <div className="pipeline-log" ref={logRef} />
    </div>
  );
}
