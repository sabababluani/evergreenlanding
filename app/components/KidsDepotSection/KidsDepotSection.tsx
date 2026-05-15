import Image from "next/image";
import React from "react";

const KidsDepotSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      {/* Main Cream Container */}
      <div className="max-w-7xl mx-auto bg-[#fdf8eb] rounded-[60px] p-8 md:p-20 relative overflow-hidden">
        {/* Decorative Flower Asset Placeholder */}


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Full Picture */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-sm z-0">
              <Image
                fill
                src="/menflower.png"
                alt="Father carrying child"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col text-left space-y-6 z-20">
            <p className="text-[12px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              Kinderdepot
            </p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0a1a0f] leading-tight">
              Investiere in die <br />
              <span className="font-bold text-[#0a1a0f]">
                Zukunft deiner Kinder
              </span>
            </h2>

            <p className="text-[#0a1a0f]/80 text-lg md:text-xl leading-relaxed max-w-md">
              Lege heute den Grundstein für die Träume deiner Kinder.
            </p>

            <div className="pt-4">
              <button className="bg-transparent border border-[#0a1a0f] text-[#0a1a0f] font-bold py-3 px-10 rounded-full hover:bg-[#0a1a0f] hover:text-white transition-all duration-300">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsDepotSection;
