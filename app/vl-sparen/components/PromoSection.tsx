import Image from "next/image";

const PromoSection = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white">
      {/* Main Wrapper */}
      <div className="max-w-7xl mx-auto bg-[#FDF8F1] rounded-[2.5rem] p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <p className="uppercase tracking-[0.15em] text-[10px] md:text-xs font-bold text-gray-500">
            Vermögenswirksame Leistungen
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#0D2B1D] leading-[1.1]">
            Hol dir jetzt dein <br />
            <span className="font-bold italic">Geldgeschenk</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Jahr für Jahr bis zu 480 Euro geschenkt vom Arbeitgeber – du musst
            nur starten.
          </p>

          <div className="pt-4">
            <button className="bg-[#FF9124] hover:bg-[#e68220] transition-all transform hover:scale-105 text-white font-bold py-4 px-10 rounded-full text-sm shadow-lg shadow-orange-200">
              Geldgeschenk sichern
            </button>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[540px] aspect-[6/5]">
            <Image
              src="/worker2.png"
              alt="Promotion Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
