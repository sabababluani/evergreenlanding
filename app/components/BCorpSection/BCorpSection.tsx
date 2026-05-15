import Image from "next/image";

const BCorpSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Column */}
        <div className="flex flex-col space-y-6 order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0B2B1D]">
            Wir machen’s <span className="font-bold">nachhaltig</span>
          </h2>

          <h3 className="text-lg md:text-xl font-bold text-[#0B2B1D]">
            Wir sind eine zertifizierte B Corp!
          </h3>

          <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed max-w-xl">
            B Corp steht für „Benefit Corporation“. Das bezeichnet
            gewinnorientierte Unternehmen, die gesellschaftliche Verantwortung
            übernehmen und nachweislich einen Mehrwert für Mensch und Natur
            schaffen.
          </p>

          <a
            href="#"
            className="text-[#B36B2F] font-semibold underline underline-offset-4 hover:text-[#8a5224] transition-colors inline-flex items-center"
          >
            Was es bedeutet, eine B Corp zu sein
          </a>
        </div>

        {/* Right Image/Badge Stack Column */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 h-[400px] md:h-[500px]">
          {/* Decorative Clouds (Simple SVG/Div placeholders) */}
          <div className="absolute top-0 left-1/4 opacity-40">
            <div className="w-16 h-8 bg-blue-100 rounded-full blur-md"></div>
          </div>

          {/* Main Rounded Image Wrapper */}
          {/* <div className="relative w-64 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-[60px] shadow-sm z-10">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm italic">
                Person in Field Photo
              </span>
            </div>
          </div> */}

          {/* <div className="absolute -right-4 md:right-8 top-10 md:top-16 z-20 w-40 h-56 md:w-48 md:h-64 bg-[#07472E] rounded-[30px] p-6 flex flex-col items-center justify-between text-white shadow-xl">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">
              Zertifizierte
            </span>
            <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-white rounded-full flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold">B</span>
            </div>
            <div className="w-12 h-1 bg-white"></div>
            <span className="text-sm md:text-base font-semibold">
              Corporation
            </span>
          </div> */}

          {/* <div className="absolute bottom-10 right-0 md:right-4 z-30">
            <div className="text-yellow-500 text-4xl">✿</div>
          </div> */}
          <Image
            src="/bcorporation.png"
            alt="Person riding a bicycle"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BCorpSection;
