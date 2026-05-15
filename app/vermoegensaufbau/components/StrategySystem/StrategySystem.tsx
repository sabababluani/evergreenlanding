import React from "react";
import { Target, ThumbsUp, Search } from "lucide-react";
import Image from "next/image";

const StrategySystem = () => {
  const features = [
    {
      title: "Gezielt für unsere Anlagestrategien konzipiert",
      description:
        "Unsere Fonds bilden die Grundlage für alle Strategien – abgestimmt auf unterschiedliche Risikoprofile und Anlageziele.",
      icon: <Target className="w-5 h-5 text-[#1a2e26]" />,
      bgColor: "bg-[#fde68a]", // Yellow
    },
    {
      title: "Professionell gemanagt",
      description:
        "Unser Fondsmanagement-Team sorgt für die passende Zusammensetzung – ob mit passiver Struktur oder aktivem Risikomanagement.",
      icon: <ThumbsUp className="w-5 h-5 text-[#1a2e26]" />,
      bgColor: "bg-[#a3bfa8]", // Muted Green
    },
    {
      title: "Transparenz bis ins Detail",
      description:
        "Zusammensetzung und Entwicklung sind jederzeit einsehbar – bis zur einzelnen Aktie oder Anleihe.",
      icon: <Search className="w-5 h-5 text-[#1a2e26]" />,
      bgColor: "bg-[#f48fb1]", // Muted Pink
    },
  ];

  return (
    <section className="px-6 py-12 md:px-12 lg:px-24 bg-white">
      {/* Large Rounded Container */}
      <div className="max-w-7xl mx-auto bg-[#fdf8f0] rounded-[3rem] p-10 md:p-20 text-[#1a2e26]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Strategien mit System,{" "}
            <span className="font-bold">Fonds mit Substanz</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Hinter jeder Strategie stehen eigens entwickelte Fonds —
            transparent, nachhaltig und von unserem Fondsmanagement-Team aktiv
            gesteuert.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-4"
            >
              <div
                className={`${feature.bgColor} w-10 h-10 rounded-full flex items-center justify-center`}
              >
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial / Footer Quote */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <Image
              src="/man4x4.png"
              alt="Benjamin Kaden"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <blockquote className="italic text-gray-600 text-sm md:text-base">
              „Wir beobachten die Märkte jeden Tag und passen unsere Fonds aktiv
              an — <br className="hidden md:block" />
              damit unsere Anleger ruhig schlafen können.“
            </blockquote>
            <p className="text-xs font-bold mt-2 uppercase tracking-tighter">
              Benjamin Kaden{" "}
              <span className="font-normal opacity-60">
                · Leiter Fondsmanagement
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySystem;
