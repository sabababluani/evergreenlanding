import React from "react";
import { Check } from "lucide-react";

const products = [
  {
    title: "ZinsPocket",
    yield: "1,71 % erwarteter Ertrag p. a.*",
    features: [
      "Die Alternative zum Tagesgeld",
      "Täglich verfügbar",
      "Zinssatz passt sich automatisch an die Marktlage an",
    ],
    icon: "🌼", // Replace with your flower SVG
    bgColor: "bg-[#fff9e6]", // Very light cream
  },
  {
    title: "ZinsPocket Plus",
    yield: "3,00 % erwarteter Ertrag p. a.**",
    features: [
      "Die Alternative zum Festgeld",
      "Nach 6 Monaten Haltedauer täglich verfügbar",
      "Wertschwankungen möglich",
    ],
    icon: "🌼💠", // Replace with your combined flower/blue icon SVG
    bgColor: "bg-[#ffedb3]", // Deeper yellow/cream
  },
];

const InterestProductComparison = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a2e26] leading-tight">
            Wähle das Zinsprodukt,{" "}
            <span className="font-bold">
              das <br className="hidden md:block" /> zu dir passt
            </span>
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`${product.bgColor} rounded-[2rem] p-10 shadow-sm border border-white/50 flex flex-col items-start hover:shadow-lg transition-all duration-300`}
            >
              {/* Product Icon & Title */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1a2e26]">
                  {product.title}
                </h3>
              </div>

              {/* Features List */}
              <ul className="space-y-5">
                {product.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Check
                        size={18}
                        className="text-[#f5a623]"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-sm font-medium text-[#1a2e26] opacity-80 leading-snug">
                      {feature === product.features[0] && idx === 1 ? (
                        feature // Just plain text
                      ) : feature.includes(product.yield.split(" ")[0]) ? (
                        <span className="font-bold">{feature}</span>
                      ) : (
                        feature
                      )}
                    </span>
                  </li>
                ))}

                {/* Yield Item - Separated to ensure bolding matches image */}
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check
                      size={18}
                      className="text-[#f5a623]"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-sm font-bold text-[#1a2e26] leading-snug">
                    {product.yield}
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestProductComparison;
