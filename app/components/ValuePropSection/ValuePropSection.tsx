import Image from "next/image";

const ValuePropSection = () => {
  const benefits = [
    "Jederzeit flexibel bleiben",
    "Für jedes Ziel ein eigener Sparplan",
    "Ab 1 Euro Anlagesumme",
    "Gebührenfrei investieren",
  ];

  return (
    <section className="w-full bg-white py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="relative bg-[#FCF8ED] rounded-[50px] overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center min-h-[500px]">
          <div className="z-10 w-full md:w-1/2 space-y-6">
            <span className="text-xs md:text-sm uppercase tracking-widest text-[#4A4A4A] font-bold">
              Spar dir das Kopfzerbrechen – wir kümmern uns
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#0B2B1D] leading-tight">
              Geld nicht nur weglegen <br />
              sondern <span className="font-bold">wachsen lassen</span>
            </h2>

            <ul className="space-y-4 pt-4">
              {benefits.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-[#0B2B1D] font-medium"
                >
                  <div className="w-6 h-6 rounded-full border-2 border-[#B36B2F] flex items-center justify-center text-[#B36B2F]">
                    <span className="text-[10px]">✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full md:w-1/2 h-[300px] md:h-full mt-12 md:mt-0">
            <div className="relative mt-16 w-full max-w-4xl h-64 md:h-96">
              <Image
                src="/propimage.png"
                alt="Relaxing"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;
