import FAQSection from "../components/FAQSection/FAQSection";
import FamilySection from "./components/FamilySection";
import { GiftPromo } from "./components/GiftPromo";
import { GoalsSection } from "./components/GoalsSection";
import KidsDepotHero from "./components/KidsDepotHero";
import KidsDepotHeroSecond from "./components/KidsDepotHeroSecond";
import SparplanRechner from "./components/Sparplanrechner";
import StepsSection from "./components/StepsSection";

export default function Kinderdepot() {
  return (
    <div>
      <KidsDepotHero />
      <GiftPromo />
      <GoalsSection />
      <SparplanRechner />
      <KidsDepotHeroSecond />
      <FamilySection />
      <StepsSection />
      <FAQSection />
    </div>
  );
}
