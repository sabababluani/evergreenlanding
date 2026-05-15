import Image from "next/image";

const MeritSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Left Visual Side (Single Composite Image) */}
        <div className="flex-1 w-full relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[500px] aspect-[4/5]">
            {/* This image should contain the woman in the rounded frame 
              AND the colorful plant illustrations at the bottom.
            */}
            <Image
              src="/womansitting.png" // Replace with your path
              alt="Lifestyle Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Content Side */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0D2B1D] leading-tight mb-8">
            Weil du es <span className="font-bold">verdienst</span>
          </h2>

          <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Vermögenswirksame Leistungen zahlt dir dein Arbeitgeber, und zwar
            monatlich bis zu 40 Euro. Einfach so. Perfekt für deine
            Altersvorsorge oder andere langfristige Sparziele. Lass dir das
            nicht entgehen!
          </p>

          <div>
            <button className="bg-[#FF9124] hover:bg-[#e68220] transition-all text-[#0D2B1D] font-bold py-4 px-10 rounded-full text-sm shadow-md">
              Geldgeschenk sichern
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeritSection;
