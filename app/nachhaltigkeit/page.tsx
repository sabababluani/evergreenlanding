import BCorpSection from "../components/BCorpSection/BCorpSection";
import CarbonNeutralBanner from "../components/CarbonNeutralBanner/CarbonNeutralBanner";
import DiarySection from "../components/DiarySection/DiarySection";
import EvergreenFundCard from "../components/Evergreenfundcard/Evergreenfundcard";
import EvergreenHero from "../components/EvergreenHero/EvergreenHero";
import FAQSection from "../components/FAQSection/FAQSection";
import SustainabilityReport from "../components/SustainabilityReport/SustainabilityReport";
import TeamSection from "../components/TeamSection/TeamSection";

export default function nachhaltigkeit() {
  return (
    <div>
      <EvergreenHero />
      <BCorpSection />
      <CarbonNeutralBanner />
      <SustainabilityReport />
      <EvergreenFundCard />
      <TeamSection />
      <DiarySection />
      <FAQSection />
    </div>
  );
}
