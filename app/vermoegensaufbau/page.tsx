import FAQSection from "../components/FAQSection/FAQSection";
import PortfolioDashboard from "../components/Portfoliodashboard/Portfoliodashboard";
import GeldanlageSection from "./components/GeldanlageSection/GeldanlageSection";
import InvestmentSection from "./components/InvestmentSection/InvestmentSection";
import PocketSection from "./components/PocketSection/PocketSection";
import PortfolioOptimization from "./components/PortfolioOptimization/PortfolioOptimization";
import StrategySection from "./components/StrategyCards/StrategyCards";
import StrategySystem from "./components/StrategySystem/StrategySystem";
import TrustAndTestimonials from "./components/TrustAndTestimonials/TrustAndTestimonials";

export default function vermoegensaufbau() {
  return (
    <div>
      <GeldanlageSection />
      <TrustAndTestimonials />
      <InvestmentSection />
      <StrategySection />
      <PortfolioDashboard />
      <PortfolioOptimization />
      <StrategySystem />
      <PocketSection />
      <FAQSection />
    </div>
  );
}
