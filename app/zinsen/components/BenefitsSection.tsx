import React from "react";
import { Clock, Lock, Euro, Percent } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "Täglich verfügbar",
    description:
      "Du kommst jederzeit an dein Geld und Transaktionen sind immer gebührenfrei.",
    icon: <Clock size={20} className="text-[#1a2e26]" />,
  },
  {
    title: "Unbegrenzter Schutz",
    description:
      "Die Einlagensicherung europäischer Banken reicht oft nur bis 100.000 Euro. Im Evergreen ZinsPocket ist dein Geld in unbegrenzter Höhe vor Insolvenz geschützt.",
    icon: <Lock size={20} className="text-[#1a2e26]" />,
  },
  {
    title: "Keine Mindestanlage",
    description:
      "Woanders brauchst du oft viel Startkapital für gute Zinsen – bei Evergreen reicht ein Euro.",
    icon: <Euro size={20} className="text-[#1a2e26]" />,
  },
  {
    title: "Tägliche Zinsgutschrift",
    description:
      "Erträge erhöhen jeden Tag den Wert deines ZinsPockets. Du kannst deinem Geld sprichwörtlich beim Wachsen zusehen.",
    icon: <Percent size={20} className="text-[#1a2e26]" />,
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24 font-sans text-[#1a2e26]">
      <div className="max-w-7xl mx-auto">
        {/* Top Illustration & Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="mb-6 relative">
            <Image src={"/pig.png"} width={280} height={169} alt="Saving" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Geld parken mit <span className="font-bold">Extra-Vorteil</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-full bg-[#fceec7] flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                {benefit.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-lg font-bold mb-3 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[240px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
