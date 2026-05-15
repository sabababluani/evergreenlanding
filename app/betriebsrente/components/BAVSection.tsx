import React from "react";

const BAVSection = () => {
  const steps = [
    {
      number: "1",
      title: "Du zahlst vom Brutto",
      description:
        "Ein Teil deines Gehalts wird vor Steuern und Sozialabgaben in deine Betriebsrente investiert. Aus 100 € Beitrag werden für dich je nach Gehalt und Steuerklasse oft nur etwa 50–65 € netto weniger auf dem Konto.",
    },
    {
      number: "2",
      title: "Dein Arbeitgeber zahlt mit",
      description:
        "Dein Arbeitgeber ist gesetzlich verpflichtet, mindestens 15 % deines Beitrags dazuzugeben, auf Beiträge bis 338 €/Monat (SV-freier Höchstbetrag 2026). Viele Arbeitgeber zahlen sogar mehr.",
    },
    {
      number: "3",
      title: "Dein Geld wächst",
      description:
        "Deine Beiträge werden am Kapitalmarkt investiert und arbeiten über Jahre für dich. Je früher du anfängst, desto stärker wirkt der Zinseszinseffekt.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
          Wie funktioniert eine <span className="italic">betriebliche</span>{" "}
          <br className="hidden md:block" /> Altersvorsorge?
        </h2>

        {/* Subtext */}
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          Mit der betrieblichen Altersvorsorge (bAV) sparst du direkt aus deinem
          Bruttogehalt für die Rente, noch bevor Steuern und Sozialabgaben
          abgezogen werden. Das heißt: Du sparst mehr, als es dich netto kostet.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col h-full border border-gray-50"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#FFD541] rounded-full flex items-center justify-center font-bold text-gray-900">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {step.title}
              </h3>
            </div>

            {/* Description Text */}
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BAVSection;
