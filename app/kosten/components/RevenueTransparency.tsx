import React from "react";

const RevenueTransparency = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">
            Neugierig, wie wir{" "}
            <span className="font-bold">Geld verdienen?</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transparenz ist uns sehr wichtig, deshalb gibt es auch beim Thema
            Kosten keine Geheimnisse.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1: Vermögensaufbau */}
          <div className="bg-[#FFD7BE] rounded-[40px] p-8 md:p-12 flex flex-col justify-center min-h-[320px] transition-transform hover:scale-[1.02] duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Vermögensaufbau
            </h3>
            <p className="text-gray-800/80 leading-relaxed text-sm md:text-base">
              Wir verdienen an der Verwaltung der Evergreen-Fonds, die Teil
              deiner Anlagestrategie sind. Diese Einnahmen ermöglichen es uns,
              die Plattform sowie dein Depot kostenfrei anzubieten.
            </p>
          </div>

          {/* Card 2: Zinssparen */}
          <div className="bg-[#FFD541] rounded-[40px] p-8 md:p-12 flex flex-col justify-center min-h-[320px] transition-transform hover:scale-[1.02] duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Zinssparen
            </h3>
            <p className="text-gray-800/80 leading-relaxed text-sm md:text-base">
              Beim Zinssparen stellen wir für dich sichere und breit gestreute
              Geldmarkt-Investitionen zusammen. Für dieses Management fällt eine
              All-In-Gebühr an – damit finanzieren wir dein Depot und den
              Betrieb unserer Plattform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueTransparency;
