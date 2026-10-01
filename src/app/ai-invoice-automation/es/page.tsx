import AutomationProductPage from "@/components/AutomationProductPage";
import { invoiceContent } from "@/components/automationProductContent";

export const metadata = { title: "AI Invoice & Accounts Payable Automation | Lumbe Tech", description: "Automate invoice intake, structured extraction, validation, duplicate controls and approval workflows while keeping financial decisions human-controlled." };

export default function Page() {
  return <AutomationProductPage lang="es" productSlug="ai-invoice-automation" copy={invoiceContent.es} />;
}
