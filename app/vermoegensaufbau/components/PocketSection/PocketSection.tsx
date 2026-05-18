import React from "react";
import { Star, Check } from "lucide-react";
import Link from "next/link";

const PocketSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 font-sans text-[#1a2e26]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Title and Intro */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Für jedes Ziel{" "}
            <span className="font-bold">
              eine <br className="hidden md:block" /> eigene Strategie
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">
            Mit Evergreen kannst du für jedes deiner Sparziele einen eigenen
            digitalen Anlagebereich anlegen – wir nennen das Pocket.
          </p>
        </div>

        {/* Right Column: Info Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-50 p-8 md:p-12">
          {/* Card Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#fcc43c] rounded-full flex items-center justify-center text-white">
              <Star size={24} fill="white" />
            </div>
            <h3 className="text-2xl font-bold">Was ist ein Pocket?</h3>
          </div>

          {/* Card Body */}
          <div className="space-y-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              Ein Pocket ist ein separater Bereich in deinem Depot, den du einem
              bestimmten Ziel zuordnest – z. B. Altersvorsorge, Haus oder
              Weltreise. Jedes Pocket bekommt automatisch die passende
              Anlagestrategie.
            </p>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Deine Vorteile</h4>
              <ul className="space-y-3">
                {[
                  "Für jedes Ziel die richtige Strategie",
                  "Beliebig viele Pockets möglich",
                  "Sparpläne flexibel einrichten oder anpassen",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check
                      size={18}
                      className="text-[#f5a623]"
                      strokeWidth={3}
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-[#f5a623]" strokeWidth={3} />
                  <span className="text-sm text-gray-700">
                    Auch für Kinder: Eigenes Depot mit passender Strategie →{" "}
                    <Link
                      href="/kinderdepot"
                      className="text-[#1a2e26] font-bold border-b border-[#f5a623] hover:opacity-70"
                    >
                      Kinderdepot entdecken
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PocketSection;
