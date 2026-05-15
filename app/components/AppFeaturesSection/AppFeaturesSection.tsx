import Link from "next/link";
import React from "react";

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 text-[#0a1a0f]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const features = [
  {
    title: "Sparen",
    text: "Jederzeit flexibel auf dein Geld zugreifen – ganz ohne Gebühren, Wartezeiten, Mindestbeträge oder versteckte Kosten.",
    iconBg: "bg-[#fce181]",
  },
  {
    title: "Steuervorteil nutzen",
    text: "Wir automatisieren die Nutzung deines Steuerfreibetrages und erhöhen so deinen Ertrag.",
    iconBg: "bg-[#f5a15d]",
  },
  {
    title: "Automatisch sparen",
    text: "Lege Sparpläne an, die regelmäßig Geld für deine Ziele zurücklegen – ganz automatisch.",
    iconBg: "bg-[#f1a7b9]",
  },
  {
    title: "Pockets erstellen",
    text: "Ordne dein Geld übersichtlich nach Zielen, z. B. Urlaub, Notgroschen oder Wohnung.",
    iconBg: "bg-[#d4e661]",
  },
  {
    title: "Gestaffelt einzahlen",
    text: "Investiere automatisch über einen Zeitraum hinweg, um Schwankungen am Markt clever auszugleichen.",
    iconBg: "bg-[#acc1b3]",
  },
  {
    title: "Altersvorsorge planen",
    text: "Berechne einfach, wie viel du für deinen Ruhestand brauchst – und wie du dorthin kommst.",
    iconBg: "bg-[#f4c9a9]",
  },
];

const AppFeaturesSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      {/* Container with Cream Background */}
      <div className="max-w-7xl mx-auto bg-[#fdf8eb] rounded-[60px] p-10 md:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-4 flex flex-col space-y-8 sticky top-10">
            <h2 className="text-5xl md:text-6xl text-[#0a1a0f] font-serif leading-tight">
              Alles in <span className="font-bold">einer App</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
              Verwalte dein finanzielles Leben – einfach, sicher und
              übersichtlich.
            </p>
            <div>
              <Link href={"/register"}>
                <button className="bg-[#ff9021] hover:bg-[#fb8108] text-[#0a1a0f] font-bold py-4 px-12 rounded-full transition-all text-lg shadow-sm">
                   Jetzt starten
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Feature Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[2.5rem] shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col"
              >
                <div
                  className={`${feature.iconBg} w-10 h-10 rounded-full flex items-center justify-center mb-6`}
                >
                  <CheckIcon />
                </div>
                <h3 className="text-[#0a1a0f] font-bold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Footer (Optional based on image) */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <p className="text-[10px] text-gray-400 leading-normal max-w-5xl">
            *Der erwartete Ertrag von 3,00 % p. a. bezieht sich auf ein
            Investment in Zinsprodukte mit höchster Bonität (AAA) vor Abzug der
            Evergreen-All-In-Gebühr von 0,39 % p. a. Nach Kosten ergibt sich ein
            Nettoertrag von 2,61 % p. a. Die Fondskosten sind enthalten. Der
            Ertrag ist nicht garantiert...
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppFeaturesSection;
