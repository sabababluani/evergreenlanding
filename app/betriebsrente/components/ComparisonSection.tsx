import React from "react";

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Provisionen",
      classic:
        "Du zahlst erst den Vertrieb und nur den Rest in deine Altersvorsorge",
      evergreen: "Keine Provision. Mehr für dich und deine Rente",
    },
    {
      feature: "Kapitalmarktquote",
      classic: "Oft hoher Anteil im renditeschwachen Sicherungsvermögen",
      evergreen: "Bis zu 100 % Kapitalmarktquote zu Vertragsbeginn",
    },
    {
      feature: "Transparenz",
      classic: "Komplexe Kostenstrukturen, schwer vergleichbar",
      evergreen: "Klare Kostenstruktur, jederzeit digital einsehbar",
    },
    {
      feature: "Nachhaltigkeit",
      classic: "Nachhaltige Fonds anteilig möglich",
      evergreen:
        "Konsequent nachhaltige Fonds, die sich ohne Provision auch für dich lohnen",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
            So unterscheidet sich Evergreen{" "}
            <span className="font-bold">
              von <br className="hidden md:block" /> einer klassischen
              Betriebsrente
            </span>
          </h2>
        </div>

        {/* Responsive Table Wrapper - Allows horizontal scroll on mobile */}
        <div className="w-full overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {/* Inner container needs a min-width so columns don't squish on tiny screens */}
          <div className="min-w-[700px] md:min-w-0">
            {/* Header Row */}
            <div className="grid grid-cols-[1.2fr_1.5fr_1.5fr] gap-4 mb-2">
              <div></div> {/* Empty Top Left */}
              <div className="text-gray-500 font-medium text-sm px-4">
                Klassische bAV
              </div>
              <div className="text-gray-900 font-bold text-sm px-6 py-4 bg-[#FFF8E6] rounded-t-2xl">
                Mit Evergreen
              </div>
            </div>

            {/* Table Body */}
            <div className="flex flex-col">
              {comparisonData.map((row, index) => {
                const isLast = index === comparisonData.length - 1;
                return (
                  <div
                    key={index}
                    className="grid grid-cols-[1.2fr_1.5fr_1.5fr] gap-4 items-stretch border-b border-gray-100 last:border-0"
                  >
                    {/* Feature Name */}
                    <div className="py-6 pr-4 text-gray-900 font-medium text-sm md:text-base flex items-center">
                      {row.feature}
                    </div>

                    {/* Classic bAV */}
                    <div className="py-6 px-4 text-gray-600 text-sm md:text-base flex items-center">
                      {row.classic}
                    </div>

                    {/* Evergreen (Highlighted) */}
                    <div
                      className={`py-6 px-6 text-gray-900 font-bold text-sm md:text-base bg-[#FFF8E6] flex items-center
                      ${isLast ? "rounded-b-2xl" : ""}
                    `}
                    >
                      {row.evergreen}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
