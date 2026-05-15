import Image from "next/image";

export const GiftPromo = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto bg-[#FDF8F1] rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
        {/* Left Side */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <p className="uppercase tracking-widest text-[10px] font-bold text-gray-400">
            Vermögenswirksame Leistungen
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0D2B1D] leading-tight">
            Hol dir jetzt dein <br />
            <span className="font-bold italic">Geldgeschenk</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0">
            Jahr für Jahr bis zu 480 Euro geschenkt vom Arbeitgeber – du musst
            nur starten.
          </p>
          <button className="bg-[#FF9124] hover:bg-[#e68220] transition-colors text-[#0D2B1D] font-bold py-4 px-10 rounded-full text-sm">
            Geldgeschenk sichern
          </button>
        </div>

        {/* Right Side - Single Composite Image */}
        <div className="flex-1 relative w-full max-w-[500px] aspect-[1.2/1]">
          <Image
            src="/son.png" // Your image with worker, card, and coins
            alt="Geldgeschenk Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
