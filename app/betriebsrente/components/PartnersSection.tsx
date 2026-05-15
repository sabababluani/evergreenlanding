import React from "react";
import Image from "next/image";

const PartnersSection = () => {
  const partners = [
    {
      logoSrc: "/alter.webp", // Add your image path here (e.g., "/logos/alte-leipziger.svg")
      alt: "Alte Leipziger Logo",
      backCategory: "Versicherer",
      backTitle: "Alte Leipziger",
      backText:
        "Renommierter Versicherer im Bereich der betrieblichen Altersvorsorge. Ein Vertragsmodell mit bis zu 100 % Kapitalmarktquote zu Vertragsbeginn als starke Basis für deine Altersvorsorge.",
    },
    {
      logoSrc: "/dyno.webp", // Add your image path here
      alt: "DYNO Logo",
      backCategory: "Plattform & Beratung",
      backTitle: "DYNO",
      backText:
        "DYNO übernimmt für dich Beratung und Vertragsabwicklung. Digital, provisionsfrei, unabhängig.",
    },
    {
      logoSrc: "/ever.webp", // Add your image path here
      alt: "Evergreen Logo",
      backCategory: "Nachhaltiges Investment",
      backTitle: "Evergreen",
      backText:
        "Über 22.000 Anleger:innen vertrauen unseren nachhaltigen Fonds. Dein Geld wird von unserem eigenen Fondsmanagement-Team verwaltet.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto bg-[#FEF9EE] rounded-[40px] py-16 px-6 md:px-12 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">
            Deine Betriebsrente braucht{" "}
            <span className="font-bold">starke Partner</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Versicherer, Plattform und Fondsmanagement. Drei Partner, ein Ziel:
            eine Betriebsrente, die transparent und provisionsfrei funktioniert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="group h-[280px] [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center p-8 shadow-sm [backface-visibility:hidden]">
                  <div className="relative w-full h-14">
                    <Image
                      src={partner.logoSrc || "/placeholder-logo.png"}
                      alt={partner.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-8 flex flex-col justify-center text-left shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-[#FF4D00] text-xs font-bold uppercase tracking-wider mb-2">
                    {partner.backCategory}
                  </p>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {partner.backTitle}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {partner.backText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
