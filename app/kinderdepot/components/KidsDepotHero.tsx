import Image from "next/image";

const KidsDepotHero = () => {
  const features = [
    "Maximale Flexibilität",
    "Individueller Sparplan",
    "Nachhaltig",
    "Von Profis überwacht",
  ];

  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto bg-[#FDF8F1] rounded-[2.5rem] pt-16 pb-12 px-6 md:px-12 flex flex-col items-center text-center">
        {/* Header Content */}
        <div className="max-w-3xl space-y-6 mb-10">
          <span className="uppercase tracking-widest text-[10px] md:text-xs font-bold text-gray-500">
            Gebührenfreies Kinderdepot
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0D2B1D] leading-tight">
            Heute schon <br />
            <span className="font-bold italic">an morgen denken</span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Mit dem Kinderdepot Zukunft schenken.{" "}
            <br className="hidden md:block" />
            Lege heute den Grundstein für die finanzielle Zukunft deiner Kinder.
          </p>

          <div className="pt-4">
            <button className="bg-[#FF9124] hover:bg-[#e68220] transition-all text-white font-bold py-4 px-10 rounded-full text-sm shadow-lg shadow-orange-100">
              Kinderdepot eröffnen
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-[700px] aspect-[16/9] mb-12">
          <Image
            src="/family.png"
            alt="Family Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-8 border-t border-orange-100/50 w-full max-w-4xl">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-[#0D2B1D] text-xs md:text-sm font-medium"
            >
              <div className="w-4 h-4 rounded-full border border-[#FF9124] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-[#FF9124]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KidsDepotHero;
