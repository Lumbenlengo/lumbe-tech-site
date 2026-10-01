import AutomationProductPage from "@/components/AutomationProductPage";
import { securityContent } from "@/components/awsProductContent";

export const metadata = { title: "AWS Security & Cloud Posture Assessment | Lumbe Tech", description: "Identify AWS security gaps, risky configurations and missing controls across IAM, networking, encryption, logging, secrets and backups." };

export default function Page() {
  return <AutomationProductPage lang="en" productSlug="aws-audit" copy={securityContent.en} />;
}
