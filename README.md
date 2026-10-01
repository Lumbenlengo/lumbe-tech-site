# Lumbe Tech website (v3, cloud-first hero)

## What changed in this round
- Hero rewritten: leads with AWS cost/security (the sales priority decided),
  not AI automation. Shorter lede, one clear next step.
- Hero pipeline demo now shows an AWS audit flow (Audit runs -> Findings
  scored -> You review -> Fixed), matching the new hero copy.
- AWS Cloud section now appears BEFORE AI Automation on the page and in the
  nav, matching the go-to-market priority (FinOps + Security Audit first).
- AWS Cloud lede updated: "Two fixed-scope engagements to start" (was three),
  reflecting that Resilience Engineering is proof, not a first-call pitch.
- Founder section now lists real, verified credentials: AWS SAA, AWS CP,
  BSc Mathematics & Computer Science (University of Toulouse), and 3 Make
  certifications (AI Agent Builder, AI Automation Explorer, Advanced).
- Fixed an escaped em-dash (\u2014) hidden inside HeroPipeline's log text
  that the earlier plain-text dash check did not catch.

## Honesty note
The hero trust line was drafted first as a pricing-policy claim ("no fixed
retainer") that was never confirmed as true, and was replaced before
shipping with a claim that is actually verifiable: every project links to a
real repository or live build.

## Run
```bash
npm install
npm run build
firebase deploy --only hosting:lumbetech
```
