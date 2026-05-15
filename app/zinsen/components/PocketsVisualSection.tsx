import Image from "next/image";
import React from "react";

const PocketsVisualSection = () => {

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 font-sans text-[#1a2e26]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Für jedes Sparziel{" "}
            <span className="font-bold">
              ein <br className="hidden md:block" /> eigenes Pocket
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">
            Mit den Evergreen Pockets kannst du beliebig viele Sparpläne
            erstellen und Einzahlungen vornehmen. So organisierst du deine
            Sparziele übersichtlicher.
          </p>
        </div>

        {/* Right Column: Visual Composition */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main Hero Image */}
          <div className="relative w-full max-w-[500px] h-[500px] rounded-[3rem] overflow-hidden shadow-xl">
            <Image
              src="/camping.png"
              fill
              alt="Sparziele Hintergrund"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Overlapping Pocket Cards */}
          <div className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 space-y-4 w-full max-w-[280px]">

          </div>
        </div>
      </div>
    </section>
  );
};

export default PocketsVisualSection;
