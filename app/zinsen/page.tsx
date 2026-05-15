import FAQSection from "../components/FAQSection/FAQSection";
import BenefitsSection from "./components/BenefitsSection";
import { DifferenceSection } from "./components/DifferenceSection";
import InterestProductComparison from "./components/InterestProductComparison";
import PocketsVisualSection from "./components/PocketsVisualSection";
import SavingsSection from "./components/SavingsSection";
import SecuritySection from "./components/SecuritySection";

export default function vermoegensaufbau() {
  return (
    <div>
      <SavingsSection />
      <InterestProductComparison />
      <BenefitsSection />
      <PocketsVisualSection />
      <SecuritySection />
      <DifferenceSection />
      <FAQSection />
    </div>
  );
}
