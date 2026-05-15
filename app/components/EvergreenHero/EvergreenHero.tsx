import React from "react";
import Image from "next/image";

const EvergreenHero = () => {
  return (
    <section className="flex items-center justify-center min-h-[500px] w-full p-6 bg-[#FCF8ED]">
      <div className="max-w-5xl w-full bg-[#FCF8ED] rounded-[40px] py-16 px-8 flex flex-col items-center text-center">
        <div className="mb-8 w-48 h-48 md:w-64 md:h-64 relative">
          <Image 
            src="/hero.png" 
            alt="Person riding a bicycle" 
            fill 
            className="object-contain"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#0B2B1D] leading-tight tracking-tight">
          Diese Geldanlage <span className="font-bold italic">kostet</span>
          <br />
          <span className="font-bold italic">nicht die Welt</span>
        </h1>

        <p className="mt-8 max-w-2xl text-[#1A3C2F] text-base md:text-lg lg:text-xl font-light leading-relaxed">
          Auf allen Ebenen: Denn das gebührenfreie Investieren bei Evergreen
          lohnt sich für deinen Geldbeutel, ohne auf Kosten unseres Planeten zu
          gehen.
        </p>
        <button className="mt-10 px-10 py-4 bg-[#FF931E] hover:bg-[#e6841a] text-[#0B2B1D] font-bold rounded-full transition-all duration-200 text-lg">
          Jetzt starten
        </button>
      </div>
    </section>
  );
};

export default EvergreenHero;
