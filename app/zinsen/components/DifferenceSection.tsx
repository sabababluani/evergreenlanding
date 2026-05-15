import React from "react";
import { Percent, TrendingUp, Check } from "lucide-react";

export const DifferenceSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24 font-sans text-[#1a2e26]">
      <div className="max-w-7xl mx-auto">
        {/* Header with Illustration placeholder */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-6 text-5xl">📍</div>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Sparen oder investieren, was ist{" "}
            <span className="font-bold">
              der <br /> Unterschied?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Sparen Card */}
          <div className="bg-gray-50/50 rounded-[2.5rem] p-10 border border-gray-100 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                <Percent size={24} />
              </div>
              <h3 className="text-2xl font-bold">Sparen</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Zinsen auf dein Guthaben",
                "Kurzfristig verfügbar",
                "Ideal für Rücklagen und kurzfristige Ziele",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600">
                  <Check
                    size={18}
                    className="text-orange-400 shrink-0"
                    strokeWidth={3}
                  />{" "}
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Investieren Card */}
          <div className="bg-gray-50/50 rounded-[2.5rem] p-10 border border-gray-100 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-2xl font-bold">Investieren</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Langfristiges Wachstumspotenzial",
                "Wertschwankungen möglich",
                "Geeignet für Vermögensaufbau über viele Jahre",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600">
                  <Check
                    size={18}
                    className="text-pink-400 shrink-0"
                    strokeWidth={3}
                  />{" "}
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="mt-16 text-[10px] text-gray-400 space-y-4 max-w-5xl mx-auto">
          <p>
            *Der erwartete Ertrag von 1,71 % p. a. bezieht sich auf ein
            Investment in breit gestreute Geldmarktfonds...
          </p>
          <p>
            **Der erwartete Ertrag von 3,00 % p. a. bezieht sich auf ein
            Investment in Zinsprodukte mit höchster Bonität (AAA)...
          </p>
        </div>
      </div>
    </section>
  );
};
