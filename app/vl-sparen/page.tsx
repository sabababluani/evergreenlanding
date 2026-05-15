import EvergreenFundCard from "../components/Evergreenfundcard/Evergreenfundcard";
import FAQSection from "../components/FAQSection/FAQSection";
import AppPromoSection from "./components/AppPromoSection";
import ExistingDepotSection from "./components/ExistingDepotSection";
import MeritSection from "./components/MeritSection";
import PromoSection from "./components/PromoSection";
import StepsSection from "./components/StepsSection";

export default function VlSparen() {
  return (
    <div>
      <PromoSection />
      <AppPromoSection />
      <EvergreenFundCard />
      <MeritSection />
      <StepsSection />
      <ExistingDepotSection />
      <FAQSection />
    </div>
  );
}
