import BAVSection from "./components/BAVSection";
import CarbonNeutralBannerSecond from "./components/CarbonNeutralBannerSecond";
import ComparisonSection from "./components/ComparisonSection";
import PartnersSection from "./components/PartnersSection";
import PensionCalculator from "./components/PensionCalculator";
import PensionSection from "./components/PensionSection";
import SustainabilitySection from "./components/SustainabilitySection";

export default function betriebsrente() {
  return (
    <div>
      <PensionSection />
      <BAVSection />
      <PartnersSection />
      <CarbonNeutralBannerSecond />
      <PensionCalculator />
      <ComparisonSection />
      <SustainabilitySection />
    </div>
  );
}
