import React from "react";
import { ShieldCheck, Smile, Lock } from "lucide-react";
import Image from "next/image";

const benefitCards = [
  {
    icon: <ShieldCheck size={20} className="text-[#0a1a0f]" />,
    iconBg: "bg-[#fce181]",
    title: "Bewährt & strukturiert",
    text: "Klare Strategien, die unser Fondsmanagement-Team täglich anpasst.",
  },
  {
    icon: <Smile size={20} className="text-[#0a1a0f]" />,
    iconBg: "bg-[#f4c9a9]",
    title: "Kein Aufwand für dich",
    text: "Wir übernehmen Planung, Anpassung und Verwaltung.",
  },
  {
    icon: <Lock size={20} className="text-[#0a1a0f]" />,
    iconBg: "bg-[#acc1b3]",
    title: "Transparenz & Flexibilität",
    text: "Du behältst jederzeit die volle Kontrolle und Übersicht. Schon ab 1 € investieren — mit flexiblen Sparplänen.",
  },
];

const GeldanlageSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      {/* Cream Container */}
      <div className="max-w-7xl mx-auto bg-[#fdf8eb] rounded-[60px] p-8 md:p-20 relative flex flex-col items-center text-center">
        {/* Header Content */}
        <div className="max-w-3xl space-y-6 mb-12">
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
            Langfristiger Vermögensaufbau · Sparplan ab 1 € monatlich
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl text-[#0a1a0f] font-serif leading-tight">
            Geldanlage, die{" "}
            <span className="font-bold">einfach funktioniert</span>
          </h2>

          <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
            Evergreen investiert dein Geld professionell — mit klarer Strategie,
            aktivem Risikomanagement und automatischer Steueroptimierung. Du
            musst kein Finanzprofi sein. Wir kümmern uns um alles.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button className="bg-[#ff9021] hover:bg-[#fb8108] text-[#0a1a0f] font-bold py-4 px-10 rounded-full transition-all">
              Jetzt starten
            </button>
            <button className="bg-transparent border border-[#0a1a0f] text-[#0a1a0f] font-bold py-4 px-10 rounded-full hover:bg-[#0a1a0f] hover:text-white transition-all">
              Gespräch buchen
            </button>
          </div>
        </div>

        {/* Botanical Illustration Placeholder */}
        <div className="relative w-full max-w-md h-64 md:h-80 mb-12">
          <Image
            src="/birds.png"
            fill
            alt="Botanical illustration"
            className="w-full h-full object-contain mix-blend-multiply opacity-90"
          />
        </div>

        {/* Bottom Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {benefitCards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-start text-left"
            >
              <div
                className={`${card.iconBg} w-10 h-10 rounded-full flex items-center justify-center mb-6`}
              >
                {card.icon}
              </div>
              <h3 className="text-[#0a1a0f] font-bold text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeldanlageSection;
