import React from "react";
import { Leaf, Check } from "lucide-react";

const strategies = [
  {
    title: "Evergreen Komfort",
    variant: "EINE STRATEGIE-VARIANTE",
    highlight: "Perfekt für die Auszahlungen im Rentenalter.",
    iconColor: "bg-[#a3bfa8]", // Muted Green
    features: [
      "Eine Strategie mit Fokus auf stetigen Ertrag",
      "Professionelles Fondsmanagement reagiert täglich auf Marktentwicklungen",
      "Sicherheitsmechanismus kann Schwankungen in schwierigen Phasen abfedern",
    ],
  },
  {
    title: "Evergreen Balance",
    variant: "6 STRATEGIE-VARIANTEN",
    highlight:
      "Für alle, die ruhig schlafen wollen – auch wenn die Märkte unruhig sind.",
    iconColor: "bg-[#d4e157]", // Muted Lime
    features: [
      "Sechs ausgewogene Anlagestrategien mit Risikomanagement",
      "Zwei Fonds legen die Verteilung zwischen Aktien und Anleihen fest",
      "Ein dritter Fonds steuert flexibel zwischen Aktien und Anleihen, um das Gesamtrisiko zu steuern",
    ],
  },
  {
    title: "Evergreen Wachstum",
    variant: "4 STRATEGIE-VARIANTEN",
    highlight:
      "Für alle, die das volle Potenzial globaler Märkte nutzen wollen.",
    iconColor: "bg-[#f48fb1]", // Muted Pink
    features: [
      "Vier ertragsorientierte Anlagestrategien mit Aktienfokus",
      "Breite Streuung über globale Aktien- und Anleihenmärkte",
      "Professionell zusammengestellt und ständig optimiert",
    ],
  },
];

const StrategySection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Strategy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {strategies.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`${item.iconColor} w-12 h-12 rounded-full flex items-center justify-center text-white`}
                >
                  <Leaf size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#1a2e26]">
                  {item.title}
                </h3>
              </div>

              {/* Sub-label */}
              <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-4 uppercase">
                {item.variant}
              </p>

              {/* Highlight Box */}
              <div className="bg-[#fef3c7] rounded-xl p-6 mb-8 min-h-[100px] flex items-center">
                <p className="text-[#1a2e26] font-bold leading-snug">
                  {item.highlight}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 flex-grow">
                {item.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-3 items-start">
                    <div className="mt-1 flex-shrink-0">
                      <Check
                        size={18}
                        className="text-[#f5a623]"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-sm text-gray-600 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-gray-600 text-lg">
            Du möchtest persönlich beraten werden?{" "}
            <a
              href="#"
              className="text-[#1a2e26] font-bold border-b-2 border-[#f5a623] hover:opacity-70 transition-opacity pb-1 inline-flex items-center gap-1"
            >
              Gespräch buchen <span className="text-xl">→</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
