"use client";
import { Fragment, useEffect, useRef, useState } from "react";

const STAGES = ["New enquiry", "Validated", "AI qualified", "CRM updated"] as const;
const LOG_LINES = [
  { html: '<span class="out">New enquiry received from a connected channel</span>' },
  { html: '<span class="out">Make checks required fields and duplicate conditions</span>' },
  { html: '<span class="ok">AI context prepared.</span> <span class="out">Suggested priority ready for review.</span>' },
  { html: '<span class="ok">CRM updated.</span> <span class="out">Sales team has the context for follow-up.</span>' },
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
      log.innerHTML = LOG_LINES.map((line) => line.html).join("\n");
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
      setStageState((state) => ({ ...state, 0: "is-active" }));
      timers.push(setTimeout(() => { log.innerHTML += LOG_LINES[0].html + "\n"; }, 300));
      timers.push(setTimeout(() => setStageState((state) => ({ ...state, 0: "is-done", 1: "is-active" })), 900));
      timers.push(setTimeout(() => { log.innerHTML += LOG_LINES[1].html + "\n"; }, 1100));
      timers.push(setTimeout(() => { log.innerHTML += LOG_LINES[2].html + "\n"; }, 1900));
      timers.push(setTimeout(() => { setStageState((state) => ({ ...state, 1: "is-done" })); setLineDone((line) => ({ ...line, 0: true })); }, 2000));
      timers.push(setTimeout(() => setStageState((state) => ({ ...state, 2: "is-active" })), 2400));
      timers.push(setTimeout(() => { log.innerHTML += LOG_LINES[3].html + "\n"; }, 3400));
      timers.push(setTimeout(() => { setStageState((state) => ({ ...state, 2: "is-done", 3: "is-active" })); setLineDone((line) => ({ ...line, 1: true })); }, 3700));
      timers.push(setTimeout(() => { setStageState((state) => ({ ...state, 3: "is-done" })); setLineDone((line) => ({ ...line, 2: true })); }, 4300));
      timers.push(setTimeout(run, 9000));
    };
    timers.push(setTimeout(run, 400));
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, []);

  return (
    <div className="pipeline-visual" role="img" aria-label="Example Make.com workflow: a new enquiry is validated, AI prepares qualification context, and the CRM is updated for human follow-up.">
      <div className="pipeline">
        {STAGES.map((name, i) => (
          <Fragment key={name}>
            <div className={"pipeline-stage" + (stageState[i] ? " " + stageState[i] : "")}>
              <span className="pipeline-dot" /><span className="pipeline-name">{name}</span>
            </div>
            {i < STAGES.length - 1 && <span className={"pipeline-line" + (lineDone[i] ? " is-done" : "")} />}
          </Fragment>
        ))}
      </div>
      <div className="pipeline-log" ref={logRef} />
    </div>
  );
}
