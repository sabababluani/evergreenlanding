import Link from "next/link";
import React from "react";

const KidsDepotHeroSecond = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Side */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
            <span className="font-bold">Steuervorteile</span> im <br />
            Kinderdepot gezielt nutzen
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            Im eigenen Depot verschenkst du oft Steuervorteile. Mit einem
            Kinderdepot nutzt du sie fürs Kind. Mit Freistellungsauftrag bleiben
            bis zu 1.000 Euro Kapitalerträge pro Jahr steuerfrei. Je nach
            Gesamteinkünften können Kinder außerdem den{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              Grundfreibetrag
            </span>{" "}
            von 12.096 Euro nutzen.
          </p>

          <Link href={"/register"} className="bg-[#ff9922] hover:bg-[#e68a1f] text-slate-900 font-bold py-4 px-8 rounded-full transition-colors duration-200">
            Kinderdepot eröffnen
          </Link>
        </div>

        {/* Right Card Side */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main Card Container */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 max-w-md border border-slate-50 relative z-10">
            <div className="flex items-start gap-4">
              {/* Icon Placeholder */}
              <div className="bg-[#ffcc44] p-3 rounded-xl flex-shrink-0">
                <div className="w-6 h-6 border-2 border-slate-800 rounded-sm flex items-center justify-center">
                  <span className="text-[10px] font-bold">📈</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Mehr Ertrag durch Steuerautomatisierung
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  Durch automatische Umschichtungen ermöglichen wir die einfache
                  Nutzung des gestellten Freistellungsauftrages, sodass
                  Steuervorteile nicht liegen bleiben.*
                </p>

                <p className="text-sm font-semibold text-slate-900">
                  Das macht bis zu 250 Euro mehr Ertrag pro Jahr.
                </p>

                <a
                  href="#"
                  className="inline-block text-[#8b6b2e] font-bold border-b-2 border-[#8b6b2e] pb-0.5 text-sm"
                >
                  Erfahre mehr über den Steuervorteil
                </a>

                <p className="text-[10px] text-slate-400 leading-tight pt-2">
                  *Hinweis: Eine individuelle steuerliche Beratung bieten wir
                  nicht an. Bitte wende dich bei steuerlichen Fragen an eine
                  Steuerberaterin oder einen Steuerberater.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative background blur (optional, mimics the clean look) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-100 rounded-full blur-3xl -z-0 opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default KidsDepotHeroSecond;
