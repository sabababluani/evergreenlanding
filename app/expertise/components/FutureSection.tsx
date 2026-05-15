import { Flower2, ShieldCheck, Smartphone, Mail } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    color: "bg-[#a9c5b6]",
    text: "Erfahrene Expert:innen kümmern sich um deine professionelle Geldanlage, steuern dein Vermögen fundiert, effizient und abgestimmt auf deine Ziele.",
  },
  {
    icon: Smartphone,
    color: "bg-[#ffc83d]",
    text: "Mit unserer App hast du deine Geldanlage und alle Sparziele jederzeit transparent im Blick – einfach, modern und kostengünstig.",
  },
  {
    icon: Flower2,
    color: "bg-[#d9df44]",
    text: "Nachhaltigkeit ist bei uns kein Extra, sondern Grundsatz: Wir investieren verantwortungsvoll – für dich und für eine bessere Zukunft.",
  },
];

export default function FutureSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-4xl text-center text-[42px] font-light leading-[0.95] tracking-[-0.05em] text-[#001f14] md:text-[64px]">
          Weil kluge Entscheidungen <br />
          heute deine{" "}
          <span className="font-serif font-bold tracking-[-0.03em]">
            Zukunft sichern
          </span>
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="rounded-[1.8rem] bg-white p-8 shadow-[0_12px_35px_rgba(0,0,0,0.03)]"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${item.color}`}
                >
                  <Icon size={28} strokeWidth={2} className="text-[#001f14]" />
                </div>

                <p className="mt-8 text-[20px] font-semibold leading-[1.45] tracking-[-0.03em] text-[#6f756f]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="fixed right-0 top-1/2 hidden -translate-y-1/2 rounded-l-lg bg-[#002b18] px-5 py-6 text-white lg:block">
        <Mail size={18} className="mx-auto mb-3" />
        <p className="text-center text-sm font-bold leading-tight">
          Newsletter <br /> abonnieren
        </p>
      </div>
    </section>
  );
}