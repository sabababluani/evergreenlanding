import Image from "next/image";

const CarbonNeutralBanner = () => {
  return (
    <section className="w-full px-6 py-12 bg-white">
      <div className="relative max-w-7xl mx-auto bg-[#ffeec2] rounded-[50px] overflow-hidden min-h-[300px] flex flex-col items-center justify-center text-center p-8">
        <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-24 h-32 md:w-40 md:h-56 opacity-80 pointer-events-none">
          <Image
            src="/leftleaf.png"
            alt="Person riding a bicycle"
            fill
            className="object-contain"
          />
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#0B2B1D] leading-tight">
            Seit 2022 ist Evergreen{" "}
            <span className="font-bold italic">CO₂-</span>
            <br />
            <span className="font-bold italic">
              neutral durch Kompensation.
            </span>
          </h2>

          <a
            href="#"
            className="mt-6 text-[#B36B2F] font-semibold text-lg underline underline-offset-8 hover:text-[#8a5224] transition-colors"
          >
            Was steckt dahinter?
          </a>
        </div>

        <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-24 h-32 md:w-40 md:h-56 opacity-80 pointer-events-none">
          <Image
            src="/rightleaf.png"
            alt="Person riding a bicycle"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CarbonNeutralBanner;
