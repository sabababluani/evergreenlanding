import { ProductGrid } from "./components/ProductGrid";
import RevenueTransparency from "./components/RevenueTransparency";
import ValueBanner from "./components/ValueBanner";

export default function nachhaltigkeit() {
  return (
    <div>
      <ValueBanner />
      <ProductGrid />
      <RevenueTransparency />
    </div>
  );
}
