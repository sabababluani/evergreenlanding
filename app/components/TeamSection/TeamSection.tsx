import React from "react";
import Image from "next/image";

const TeamSection = () => {
  const team = [
    { id: 1, name: "Iven Kurz", role: "CEO" },
    { id: 2, name: "Hanna Mathias", role: "CSR Managerin" },
    { id: 3, name: "Benjamin Kaden", role: "Leiter Asset Management" },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Text Content (Span 5) */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0B2B1D] leading-tight">
            Wir für{" "}
            <span className="font-bold">deine nachhaltige Geldanlage</span>
          </h2>

          <div className="space-y-4 text-[#4A4A4A] text-base md:text-lg leading-relaxed">
            <p>
              Unser vierstufiger Nachhaltigkeitsprozess garantiert, dass in
              unseren Produkten nur Wertpapiere landen, die unserem strengen
              Nachhaltigkeitsstandard entsprechen – mit besonderem Fokus auf
              Impact Investments, die messbare ökologische oder soziale Wirkung
              erzielen.
            </p>

            <a
              href="#"
              className="inline-block text-[#B36B2F] font-semibold underline underline-offset-4 hover:text-[#8a5224] transition-colors"
            >
              Mehr zu unserem Nachhaltigkeitsprozess
            </a>

            <p className="text-sm md:text-base opacity-90">
              Das überprüft unser Nachhaltigkeitsausschuss. Bestehend aus
              Vertreter:innen der Geschäftsführung, des CSR-Managements und des
              Portfoliomanagements sorgt er dafür, dass Nachhaltigkeit, Ertrag
              und Sicherheit immer im Einklang stehen.
            </p>
          </div>
        </div>

        {/* Right Column: Staggered Team Grid (Span 7) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {team.map((member, index) => (
            <div
              key={member.id}
              className={`flex flex-col space-y-3 ${index === 2 ? "sm:mt-[-40px]" : ""}`}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[30px] bg-gray-100 border border-gray-200">
                <div className="w-full h-full flex items-center justify-center text-gray-400 italic text-xs">
                  {member.name} Image
                </div>
                <Image
                  src={`/team-${member.id}.png`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-[#0B2B1D] font-bold text-lg">
                  {member.name}
                </h4>
                <p className="text-[#4A4A4A] text-sm uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
