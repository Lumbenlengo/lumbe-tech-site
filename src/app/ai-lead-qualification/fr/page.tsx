import AutomationProductPage from "@/components/AutomationProductPage";
import { leadContent } from "@/components/automationProductContent";

export const metadata = { title: "AI Lead Qualification & Response | Lumbe Tech", description: "Qualify and prioritize inbound B2B leads, update CRM records and prepare follow-up context with human control over customer communication." };

export default function Page() {
  return <AutomationProductPage lang="fr" productSlug="ai-lead-qualification" copy={leadContent.fr} />;
}
