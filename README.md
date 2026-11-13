# Lumbe Tech website

The Lumbe Tech website is dedicated to AI Automation with Make for B2B sales and finance teams. AWS Cloud services now have a separate website and repository: https://github.com/Lumbenlengo/cloud-lumbe-tech.

## Services on this website

- AI Lead Qualification: capture inbound enquiries, qualify and prioritize opportunities, update the CRM and prepare human-reviewed follow-up.
- Invoice & Accounts Payable Automation: extract and validate invoice data, identify exceptions and prepare invoices for human approval.

Both product pages retain English, Portuguese, French and Spanish versions. The homepage is currently in English.

## Stack

- Next.js 16
- React 19
- TypeScript
- Static site output in out/
- Firebase Hosting
- Make.com for connected business workflows

## Local development

Use Node.js 22 or newer. Run npm install, then npm run dev. Open http://localhost:3000.

## Build and deployment

Run npm run build, then firebase deploy --only hosting:lumbetech.

The Firebase Hosting configuration retains the existing /api/contact rewrite used by the AI Lead Qualification free-pilot form. The hosting target remains lumbetech.

## Scope boundary

This repository intentionally does not contain AWS cloud service pages, AWS assessments, cloud infrastructure offers or AWS marketing materials. Those services belong in the separate cloud-lumbe-tech repository and will be hosted on a separate Firebase Hosting site.

Keep this project focused on Make.com automation, AI-assisted workflows, lead operations, invoice processing and the business tools connected to those workflows.
