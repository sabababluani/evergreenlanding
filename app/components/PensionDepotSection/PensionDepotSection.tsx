import React from "react";

// SVGs for the cards
const EuroIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6 text-[#0a1a0f]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 8a2 2 0 012-2h4m-6 4h4m-4 4h4m-6 4a2 2 0 002 2h4M7 15H2m5-6H2"
    />
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      opacity="0.1"
      fill="currentColor"
    />
  </svg>
);

const ChartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6 text-[#0a1a0f]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6 text-[#0a1a0f]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const cards = [
  {
    icon: <EuroIcon />,
    iconBg: "bg-[#fce181]",
    title: "Bis zu 540 € vom Staat. Jedes Jahr",
    text: "Du zahlst ein, der Staat legt bis zu 540 € obendrauf. Für jedes Kind kommen nochmal 300 € pro Jahr dazu.",
  },
  {
    icon: <ChartIcon />,
    iconBg: "bg-[#fdf0d5]",
    title: "100 € im Monat können deine Rente verändern",
    text: "Mit staatlicher Förderung und Zinseszins können nach 30 Jahren über 200.000 € für deinen Ruhestand zusammenkommen.",
  },
  {
    icon: <CheckCircleIcon />,
    iconBg: "bg-[#fdf8eb]",
    title: "Rente geht jetzt auch ohne Versicherung",
    text: "Kein komplizierter Vertrag, keine versteckten Kosten. Ein einfaches Depot, professionell gemanagt.",
  },
];

const PensionDepotSection = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Badge */}
        <div className="inline-block bg-[#ffc107] text-[#0a1a0f] text-[10px] font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-wider">
          Bald bei Evergreen
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl text-[#0a1a0f] font-serif mb-6">
          Das <span className="font-bold">Altersvorsorgedepot</span> kommt
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
          Ab 2027 kannst du mit staatlicher Förderung für deine Rente
          investieren. Einfach, flexibel und mit deutlich weniger Kosten als
          bisherige Vorsorgeprodukte.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[3rem] shadow-[0_10px_50px_rgba(0,0,0,0.04)] text-left flex flex-col border border-gray-50 transition-transform hover:scale-[1.02]"
            >
              <div
                className={`${card.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-6`}
              >
                {card.icon}
              </div>
              <h3 className="text-[#0a1a0f] font-bold text-xl mb-4 leading-tight">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="space-y-8">
          <button className="bg-[#ff9021] hover:bg-[#fb8108] text-[#0a1a0f] font-bold py-4 px-12 rounded-full transition-all text-lg">
            Newsletter abonnieren
          </button>

          <p className="text-gray-400 text-xs max-w-md mx-auto">
            Das geförderte Altersvorsorgedepot soll ab dem 1. Januar 2027
            starten. Wir informieren dich, sobald es losgeht.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PensionDepotSection;
