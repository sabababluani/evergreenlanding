import Image from "next/image";
import Link from "next/link";

export const GoalsSection = () => {
  const goals = [
    {
      title: "Führerschein",
      subtitle: "Pauls Kinderdepot",
      amount: "4.396 €",
      duration: "12 Jahre",
      rate: "20 € pro Monat",
      total: "2.880 €",
      img: "/kid1.png",
    },
    {
      title: "Ausbildung",
      subtitle: "Lauras Kinderdepot",
      amount: "11.437 €",
      duration: "15 Jahre",
      rate: "50 € pro Monat",
      total: "9.000 €",
      img: "/kid2.png",
    },
    {
      title: "Starthilfe",
      subtitle: "Emmas Kinderdepot",
      amount: "33.109 €",
      duration: "18 Jahre",
      rate: "100 € pro Monat",
      total: "21.600 €",
      img: "/kid3.png",
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-white flex flex-col items-center">
      <div className="text-center mb-12">
        {/* Floating Icon Placeholder */}
        <div className="relative w-20 h-12 mx-auto mb-4">
          <Image
            src="/coins-blue-flower.png"
            alt="Icon"
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-[#0D2B1D]">
          Damit kleine Schritte{" "}
          <span className="font-bold italic">große Wege öffnen</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full mb-12">
        {goals.map((goal, idx) => (
          <div key={idx} className="flex flex-col">
            {/* Image Card */}
            <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6">
              <Image
                src={goal.img}
                alt={goal.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2 px-4 text-sm text-[#0D2B1D]">
              <p className="flex items-center gap-2">
                📅 <span className="text-gray-500">Anlagedauer:</span>{" "}
                <strong>{goal.duration}</strong>
              </p>
              <p className="flex items-center gap-2">
                🪙 <span className="text-gray-500">Sparrate:</span>{" "}
                <strong>{goal.rate}</strong>
              </p>
              <p className="flex items-center gap-2">
                📈 <span className="text-gray-500">Eingezahlt:</span>{" "}
                <strong>{goal.total}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link href={"/register"} className="bg-[#FF9124] hover:bg-[#e68220] text-[#0D2B1D] font-bold py-4 px-12 rounded-full shadow-lg transition-transform hover:scale-105">
        Kinderdepot eröffnen
      </Link>

      <p className="mt-12 text-[10px] text-gray-400 text-center max-w-4xl leading-relaxed">
        Grundlage der Berechnung ist die Wertentwicklung der Strategie
        „Evergreen Wachstum 80“... [Full Disclaimer Text]
      </p>
    </section>
  );
};
