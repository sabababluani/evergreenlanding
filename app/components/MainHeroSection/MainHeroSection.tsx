import React from "react";
import Image from "next/image";

const MainHeroSection = () => {
  return (
    <section className="w-full px-4 py-8 bg-white">
      {/* Main Cream Container */}
      <div className="relative max-w-7xl mx-auto bg-[#FCF8ED] rounded-[50px] pt-20 pb-12 px-6 flex flex-col items-center overflow-hidden">
        {/* Header Text */}
        <div className="text-center max-w-3xl z-10">
          <h1 className="text-5xl md:text-7xl font-serif text-[#0B2B1D] leading-tight">
            Dein Finanzleben <br />
            <span className="font-bold">in einfach</span>
          </h1>
          <p className="mt-6 text-[#4A4A4A] text-lg md:text-xl">
            Planen, sparen und investieren. Für heute, für morgen und für die
            Rente.
          </p>
        </div>

        {/* CTA Feature Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl z-10">
          {/* Card 1: Kurzfristig */}
          <div className="bg-white rounded-[30px] p-6 flex items-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-[#FFCE50] flex items-center justify-center text-xl shrink-0">
              %
            </div>
            <div className="ml-5 flex-grow">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  Kurzfristig anlegen
                </span>
                <span className="text-gray-300 group-hover:text-[#0B2B1D] transition-colors">
                  ↗
                </span>
              </div>
              <h4 className="text-[#0B2B1D] font-bold text-lg">
                Zinsen verdienen
              </h4>
              <p className="text-[10px] text-gray-500">
                Bis zu 3,00% p. a. erwarteter Ertrag*
              </p>
            </div>
          </div>

          {/* Card 2: Langfristig */}
          <div className="bg-white rounded-[30px] p-6 flex items-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-[#D4E67B] flex items-center justify-center text-xl shrink-0">
              📈
            </div>
            <div className="ml-5 flex-grow">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  Langfristig investieren
                </span>
                <span className="text-gray-300 group-hover:text-[#0B2B1D] transition-colors">
                  ↗
                </span>
              </div>
              <h4 className="text-[#0B2B1D] font-bold text-lg">
                Vermögen aufbauen
              </h4>
              <p className="text-[10px] text-gray-500">
                Professionell gemanagt, nachhaltig
              </p>
            </div>
          </div>
        </div>

        <button className="mt-12 px-12 py-4 bg-[#FF931E] hover:bg-[#e6841a] text-[#0B2B1D] font-bold rounded-full transition-all text-lg z-10">
          Jetzt starten
        </button>

        <div className="relative mt-16 w-full max-w-4xl h-64 md:h-96">
          <Image
            src="/mainHero.png"
            alt="Relaxing"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MainHeroSection;
