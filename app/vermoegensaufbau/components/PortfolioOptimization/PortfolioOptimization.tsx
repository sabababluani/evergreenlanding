import React from "react";

const PortfolioOptimization = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 font-sans text-[#1a2e26]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content: Text and Tags */}
        <div className="space-y-6">
          <p className="text-xs font-semibold tracking-widest uppercase opacity-60">
            Inklusive bei jeder Strategie
          </p>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Mehr aus deinem Geld <br /> herausholen,{" "}
            <span className="font-bold">automatisch</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
            Wir optimieren dein Portfolio laufend und nutzen deinen
            Sparerpauschbetrag jedes Jahr bestmöglich aus. Ohne Kosten, ohne
            Aufwand für dich.*
          </p>

          {/* Badges / Tags */}
          <div className="flex flex-wrap gap-3 pt-4">
            {[
              { label: "Steueroptimierung", icon: "€" },
              { label: "Risikomanagement", icon: "🛡️" },
              { label: "Rebalancing", icon: "🔄" },
            ].map((tag, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-[#fdf8e7] px-4 py-2 rounded-full border border-[#f5a623]/20"
              >
                <span className="text-[#f5a623] text-sm">{tag.icon}</span>
                <span className="text-xs font-bold">{tag.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content: Chart Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 md:p-12">
          <header className="mb-12">
            <h3 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
              Genutzter Sparerpauschbetrag*
            </h3>
          </header>

          {/* Custom Tailwind Bar Chart */}
          <div className="flex items-end justify-between gap-2 md:gap-4 h-48 border-b border-gray-100 pb-2 relative">
            {/* 1 Year */}
            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-xs font-bold">1.000 €</span>
              <div className="w-full bg-[#fef3c7] rounded-md h-4"></div>
              <span className="text-[10px] text-gray-400 whitespace-nowrap">
                1 Jahr
              </span>
            </div>

            {/* 3 Years */}
            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-xs font-bold">3.000 €</span>
              <div className="w-full bg-[#fde68a] rounded-md h-12"></div>
              <span className="text-[10px] text-gray-400 whitespace-nowrap">
                3 Jahre
              </span>
            </div>

            {/* 5 Years */}
            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-xs font-bold">5.000 €</span>
              <div className="w-full bg-[#fcd34d] rounded-md h-20"></div>
              <span className="text-[10px] text-gray-400 whitespace-nowrap">
                5 Jahre
              </span>
            </div>

            {/* 10 Years */}
            <div className="flex-1 flex flex-col items-center gap-4">
              <span className="text-xs font-bold">10.000 €</span>
              <div className="w-full bg-[#f5a623] rounded-md h-32"></div>
              <span className="text-[10px] text-gray-400 whitespace-nowrap">
                10 Jahre
              </span>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-xs text-gray-600 leading-snug">
              So viel Sparerpauschbetrag nutzt Evergreen für dich — je länger du
              investiert bist, desto mehr sparst du.
            </p>
            <p className="text-[9px] text-gray-400 leading-normal">
              *Sparerpauschbetrag: bis zu 1.000 € pro Jahr (Einzelperson) /
              2.000 € (Zusammenveranlagung). Der tatsächliche Vorteil hängt von
              den realisierten Gewinnen im Portfolio ab. Keine individuelle
              Steuerberatung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioOptimization;
