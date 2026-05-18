"use client";

import { Check } from "lucide-react";

const benefits = [
  "Jederzeit flexibel bleiben",
  "Für jedes Ziel ein eigener Sparplan",
  "Ab 1 Euro Anlagesumme",
  "Gebührenfrei investieren",
];

const stats = [
  { label: "Verwaltetes Vermögen", value: "130 Mio €+" },
  { label: "Zufriedene Kunden", value: "22.000+" },
  { label: "Zertifizierung", value: "B Corp" },
];

const BenefitPanel = () => {
  return (
    <div className="flex-1 p-8 lg:p-12 bg-[#FCF8ED] flex flex-col justify-center border-l border-[#0B2B1D]/10 lg:border-t-0 border-t text-[#0B2B1D]">
      <h2 className="text-3xl lg:text-4xl font-serif text-[#0B2B1D] mb-8 leading-tight">
        Geld nicht nur weglegen,{" "}
        <span className="font-bold">sondern wachsen lassen</span>
      </h2>

      <div className="space-y-5">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#B36B2F] flex items-center justify-center mt-0.5">
              <Check className="w-3.5 h-3.5 text-[#B36B2F]" strokeWidth={3} />
            </div>
            <p className="text-[#1A3C2F] leading-relaxed font-medium">{benefit}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-[#0B2B1D]/10">
        {stats.map((item, idx) => (
          <div key={idx} className="text-center space-y-1">
            <p className="text-[#4A4A4A] text-sm">{item.label}</p>
            <p className="text-2xl font-bold font-serif text-[#0B2B1D]">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitPanel;
