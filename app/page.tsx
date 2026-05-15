import AppFeaturesSection from "./components/AppFeaturesSection/AppFeaturesSection";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";
import FAQSection from "./components/FAQSection/FAQSection";
import KidsDepotSection from "./components/KidsDepotSection/KidsDepotSection";
import MainHeroSection from "./components/MainHeroSection/MainHeroSection";
import PensionDepotSection from "./components/PensionDepotSection/PensionDepotSection";
import RetirementSection from "./components/RetirementSection/RetirementSection";
import SavingsSection from "./components/SavingsSection/SavingsSection";
import Sparplanrechner from "./components/Sparplanrechner/Sparplanrechner";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import TrustStatsSection from "./components/TrustStatsSection/TrustStatsSection";
import ValuePropSection from "./components/ValuePropSection/ValuePropSection";
import WealthBuildingSection from "./components/WealthBuildingSection/WealthBuildingSection";

export default function Home() {
  return (
    <div>
      <MainHeroSection />
      <TrustStatsSection />
      <ValuePropSection />
      <TestimonialSection />
      <Sparplanrechner />
      <RetirementSection />
      <WealthBuildingSection />
      <SavingsSection />
      <BenefitsSection />
      <KidsDepotSection />
      <PensionDepotSection />
      <AppFeaturesSection />
      <FAQSection />
    </div>
  );
}
