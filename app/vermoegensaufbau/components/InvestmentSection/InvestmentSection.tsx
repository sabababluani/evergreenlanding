import Image from "next/image";
import React from "react";

const InvestmentSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 font-sans text-[#1a2e26]">
      <div className="max-w-7xl mx-auto">
        {/* Main Content: Text & App Mockup */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <header>
              <p className="text-xs font-semibold tracking-widest uppercase opacity-60 mb-4">
                Professionelle Vermögensverwaltung seit 2019
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Wir finden die Strategie,{" "}
                <span className="font-bold">die zu dir passt</span>
              </h1>
            </header>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Basierend auf deinem Risikoprofil, deinem Zeithorizont und deinen
              Zielen empfehlen wir dir die passende Strategie aus drei Welten —
              und setzen sie für dich um. Du musst dich um nichts kümmern.
            </p>

            {/* CEO Quote Section */}
            <div className="flex items-center gap-4 pt-4 border-l-2 border-gray-100 pl-6">
              <div className="w-[48px] h-[48px] rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <Image
                  src="/man3x3.png"
                  alt="Iven Kurz CEO"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <blockquote className="italic text-gray-600 text-sm md:text-base italic">
                  "Professionelle Vermögensverwaltung sollte nicht erst ab
                  100.000 € anfangen."
                </blockquote>
                <p className="text-xs font-bold mt-1 uppercase tracking-tighter">
                  Iven Kurz{" "}
                  <span className="font-normal opacity-60">
                    · Gründer & CEO
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mobile App Mockup */}
          <div className="relative flex justify-center">
            {/* Phone Frame */}
            <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] shadow-2xl border-[8px] border-white ring-1 ring-gray-200 overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white rounded-b-2xl z-20"></div>

              {/* Screen Content Placeholder */}
              <div className="p-6 pt-12 space-y-4">
                <p className="text-xs font-semibold text-gray-400">9:41</p>
                <h3 className="text-xl font-bold py-2">Was ist dein Ziel?</h3>

                {/* List Items */}
                {[
                  {
                    title: "Vermögen aufbauen",
                    sub: "Langfristig investieren",
                    color: "bg-orange-100",
                    icon: "🎯",
                    active: true,
                  },
                  {
                    title: "Altersvorsorge",
                    sub: "Für die Rente sparen",
                    color: "bg-gray-50",
                    icon: "🛡️",
                  },
                  {
                    title: "Notgroschen",
                    sub: "Rücklagen bilden",
                    color: "bg-gray-50",
                    icon: "💰",
                  },
                  {
                    title: "Für mein Kind",
                    sub: "Zukunft schenken",
                    color: "bg-gray-50",
                    icon: "🧸",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border flex items-center gap-3 ${item.active ? "border-green-500 ring-1 ring-green-500" : "border-gray-100"}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center text-lg`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold leading-none">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-gray-400">{item.sub}</p>
                    </div>
                    {item.active && (
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[10px] text-white">
                        ✓
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4">
                  <button className="w-full py-3 bg-[#f5a623] text-white font-bold rounded-xl shadow-lg shadow-orange-200">
                    Weiter
                  </button>
                </div>
              </div>
            </div>

            {/* Background decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gray-50 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Bottom Section: 3-Step Process */}
        <div className="relative mt-20">
          {/* Horizontal Line (Desktop Only) */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-[#f5a623] opacity-30 -z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-4 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-full bg-[#fceec7] text-[#f5a623] flex items-center justify-center font-bold text-lg mb-6 ring-8 ring-white">
                1
              </div>
              <h4 className="font-bold text-lg mb-1">Ziel definieren</h4>
              <p className="text-gray-500 text-sm">Was willst du erreichen?</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-full bg-[#fceec7] text-[#f5a623] flex items-center justify-center font-bold text-lg mb-6 ring-8 ring-white">
                2
              </div>
              <h4 className="font-bold text-lg mb-1">Strategie erhalten</h4>
              <p className="text-gray-500 text-sm">
                Wir empfehlen die passende Welt
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-full bg-[#fceec7] text-[#f5a623] flex items-center justify-center font-bold text-lg mb-6 ring-8 ring-white">
                3
              </div>
              <h4 className="font-bold text-lg mb-1">
                Automatisch investieren
              </h4>
              <p className="text-gray-500 text-sm">
                Dein Geld arbeitet — du lehnst dich zurück
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Newsletter Button (Desktop) */}
      <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#0a1f18] text-white p-3 rounded-l-lg hidden lg:flex flex-col items-center gap-2 shadow-xl hover:bg-black transition-colors z-50">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span className="[writing-mode:vertical-lr] text-[10px] font-bold tracking-widest uppercase">
          Newsletter abonnieren
        </span>
      </button>
    </section>
  );
};

export default InvestmentSection;
