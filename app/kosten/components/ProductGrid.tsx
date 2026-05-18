import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const ProductGrid = () => {
  const products = [
    {
      title: "Vermögensaufbau",
      accent: "bg-[#D9E265]",
      desc: "Professionelle Verwaltung deiner Geldanlage für die Altersvorsorge.",
      mainVal: "Keine Gebühren",
      bullets: [
        "Ab 1 Euro Anlagesumme",
        "beliebig viele Sparpläne",
        "Steuerautomatisierung*",
        "kostenloses Depot",
      ],
      btn: "Depot eröffnen",
    },
    {
      title: "Zinssparen",
      accent: "bg-[#FFC542]",
      badge: "Bis zu 3 % Zinsen p.a.",
      desc: "Spare und verdiene dabei Zinsen",
      subLabel: "VERWALTUNGSGEBÜHR",
      mainVal: "0,39 % pro Jahr",
      bullets: [
        "Ab 1 Euro Anlagesumme",
        "Kein Maximalbetrag",
        "Unbegrenzter Insolvenzschutz**",
        "Steuerautomatisierung*",
      ],
      btn: "Zinssparen starten",
    },
    {
      title: "Vermögenswirksame Leistungen",
      accent: "bg-[#FFD7BE]",
      desc: "Dein Geldgeschenk vom Arbeitgeber",
      mainVal: "Keine Gebühren",
      bullets: [
        "Ab 1 Euro Anlagesumme",
        "nachhaltiger Fondssparplan",
        "Steuerautomatisierung*",
        "kostenloses Depot",
      ],
      btn: "VL-Sparplan starten",
    },
    {
      title: "Kinderdepot",
      accent: "bg-[#A8BDB4]",
      desc: "Der gebührenfreie Fondssparplan für dein Kind",
      mainVal: "Keine Gebühren",
      bullets: [
        "Ab 1 Euro Anlagesumme",
        "Freunde und Familie sparen mit",
        "Steuerautomatisierung*",
        "kostenloses Depot",
      ],
      btn: "Kinderdepot anlegen",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col border border-gray-100"
            >
              <div className={`h-2 w-full ${item.accent}`} />
              {item.badge && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#FFC542] text-[10px] font-bold py-1 px-4 rounded-b-lg">
                  {item.badge}
                </div>
              )}
              <div className="p-8 flex-grow">
                <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-snug">
                  {item.desc}
                </p>

                {item.subLabel && (
                  <p className="text-[10px] font-bold text-gray-400 tracking-widest mb-1">
                    {item.subLabel}
                  </p>
                )}
                <div className="text-4xl font-serif text-gray-900 mb-8">
                  {item.mainVal}
                </div>

                <ul className="space-y-3 mb-10">
                  {item.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#FF9E2C] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 text-center flex flex-col items-center">
                <Link href={"/register"} className="w-full bg-[#FF9E2C] text-white font-bold py-4 rounded-xl hover:bg-[#e68a1b] transition-colors mb-4">
                  {item.btn}
                </Link>
                <Link href={"/zinsen"} className="text-sm font-bold text-gray-900 border-b border-gray-900 pb-0.5">
                  Mehr erfahren →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Fine Print Footer */}
        <div className="bg-[#FEF9EE] p-8 rounded-2xl text-[11px] text-gray-500 leading-relaxed space-y-2">
          <p>
            * Die Steuerautomatisierung erfolgt im Rahmen der Nutzung des
            Sparer-Pauschbetrags. Keine individuelle Steuerberatung.
          </p>
          <p>
            ** Geldanlage beim Zinssparen mittels Zinsprodukten mit höchster
            Bonität (AAA), als Sondervermögen unabhängig von der Insolvenz der
            Depotbank.
          </p>
          <p>
            Bei allen Produkten fallen Fondskosten zwischen ca. 0,19 % und 0,79
            % p.a. an, die direkt auf Fondsebene berücksichtigt werden.
          </p>
        </div>
      </div>
    </section>
  );
};
