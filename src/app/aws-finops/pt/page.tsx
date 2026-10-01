import AutomationProductPage from "@/components/AutomationProductPage";
import { finopsContent } from "@/components/awsProductContent";

export const metadata = { title: "AWS Cost Optimization Assessment | Lumbe Tech", description: "Understand AWS spend, identify avoidable cloud costs and receive a prioritized optimization roadmap based on your actual workloads." };

export default function Page() {
  return <AutomationProductPage lang="pt" productSlug="aws-finops" copy={finopsContent.pt} />;
}
