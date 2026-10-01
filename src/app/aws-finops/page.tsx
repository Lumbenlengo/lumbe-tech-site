import AutomationProductPage from "@/components/AutomationProductPage";
import { finopsContent } from "@/components/awsProductContent";

export const metadata = { title: "AWS Cost Optimization Assessment | Lumbe Tech" };

export default function Page() {
  return <AutomationProductPage lang="en" productSlug="aws-finops" copy={finopsContent.en} />;
}
