import Image from "next/image";
import { Mail } from "lucide-react";
import Link from "next/link";

const experts = [
  {
    name: "Iven Kurz",
    role: "Gründer von Evergreen",
    image: "/team-1.png",
    backText:
      "Geldanlage bedeutet Verantwortung. Ohne Erfahrung wird sie schnell zur Belastung. Große Vermögen setzen auf erfahrene Berater:innen – Privatanleger und -anlegerinnen sollten es nicht anders machen. Professionelles Management schafft Ruhe, Sicherheit und Freiheit.",
  },
  {
    name: "Hanna Mathias",
    role: "CSR Managerin",
    image: "/team-2.png",
    backText:
      "Verantwortung für Umwelt und Gesellschaft ist unser Anspruch. Als CSR-Managerin integriere ich soziale und ökologische Standards in unsere Fonds und den Unternehmensalltag. Mit meiner Erfahrung in internationalen Projekten für nachhaltige Entwicklung fördere ich Transparenz und echte Verantwortung in der Finanzwelt.",
  },
  {
    name: "Benjamin Kaden",
    role: "Leiter Fondsmanagement",
    image: "/team-3.png",
    backText:
      "Wir können die Zukunft nicht vorhersagen, aber wir können klug für dich vorsorgen. Nach vielen Jahren im Investmentgeschäft großer Banken in Hamburg und London setze ich meine Erfahrung heute bei Evergreen ein – damit wir deine Geldanlage professionell managen und du langfristig davon profitierst.",
  },
];

export default function ExpertsSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbf6e8] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-5xl text-center text-[46px] font-light leading-[0.95] tracking-[-0.05em] text-[#001f14] md:text-[76px]">
          Entspannte Finanzen <br />
          beginnen mit{" "}
          <span className="font-serif font-bold tracking-[-0.03em]">
            Erfahrung
          </span>
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {experts.map((expert) => (
            <div key={expert.name} className="group [perspective:1200px]">
              <div className="relative h-[420px] rounded-[1.8rem] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* FRONT */}
                <div className="absolute inset-0 rounded-[1.8rem] bg-[#fff1bf] p-5 [backface-visibility:hidden]">
                  <div className="relative h-[300px] overflow-hidden rounded-[1.4rem]">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-6 text-center">
                    <h3 className="text-[24px] font-bold text-[#001f14]">
                      {expert.name}
                    </h3>
                    <p className="mt-1 text-[18px] font-semibold text-[#6f756f]">
                      {expert.role}
                    </p>
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rounded-[1.8rem] bg-[#fff1bf] p-7 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="text-[20px] leading-[1.35] tracking-[-0.03em] text-[#001f14]">
                    {expert.backText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={"/register"} className="rounded-full bg-[#ff9514] px-14 py-4 text-[20px] font-bold text-[#001f14]">
            Jetzt starten
          </Link>
        </div>
      </div>

      <div className="fixed right-0 top-1/2 hidden -translate-y-1/2 rounded-l-lg bg-[#002b18] px-5 py-6 text-white lg:block">
        <Mail size={20} className="mx-auto mb-3" />
        <p className="text-center text-sm font-bold leading-tight">
          Newsletter <br /> abonnieren
        </p>
      </div>
    </section>
  );
}