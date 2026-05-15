import React from "react";
import { Leaf, Sparkles, Smartphone } from "lucide-react";

const SustainabilitySection = () => {
  const features = [
    {
      icon: <Leaf className="w-5 h-5 text-gray-800" />,
      iconBg: "bg-[#D9E265]",
      title: "Nachhaltiges Investment",
      text: "Im Kern steht der „Evergreen Sustainable World Stocks“, ein weltweit gestreuter Aktienfonds mit klaren ökologischen Kriterien und renditeorientierter Logik.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gray-800" />,
      iconBg: "bg-[#FFC542]",
      title: "Transparentes Kostenmodell",
      text: "Keine Provisionen. Keine versteckten Kosten. Dein Beitrag fließt in deine Rente statt in Vertrieb.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-gray-800" />,
      iconBg: "bg-[#A8BDB4]",
      title: "Digitale Infrastruktur",
      text: "Kein Papierkram, kein Versicherungsdeutsch. Alles digital, alles in deiner Hand.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6">
      {/* Outer Rounded Container */}
      <div className="max-w-7xl mx-auto bg-[#FEF9EE] rounded-[40px] py-16 px-6 md:px-12">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">
            Nachhaltigkeit, die{" "}
            <span className="font-bold">mehr ist als ein Label</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Nachhaltigkeit steckt bei uns in der Struktur des Produkts, nicht
            nur im Fondsnamen.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] flex flex-col h-full"
            >
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`${item.iconBg} w-12 h-12 rounded-full flex items-center justify-center shrink-0`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
