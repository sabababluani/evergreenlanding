import Image from "next/image";

const SavingsSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      {/* Main Cream Container */}
      <div className="max-w-7xl mx-auto bg-[#fdf8eb] rounded-[60px] overflow-hidden p-8 md:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Photo/Graphic */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[40px] overflow-hidden">
              {/* Replace with your exported image asset */}
              <img src="/api/placeholder/600/450" />
              <Image
                src="/barchartImage.png"
                fill
                alt="Interest rates visualization"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col text-left space-y-6">
            <p className="text-[12px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              Kurzfristige Ziele
            </p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0a1a0f] leading-tight">
              Sparen & <span className="font-bold">Zinsen verdienen</span>
            </h2>

            <p className="text-[#0a1a0f]/80 text-lg md:text-xl leading-relaxed max-w-xl">
              Deine Ersparnisse für kurzfristige Ziele wachsen ganz einfach mit
              den Evergreen ZinsPockets. Verpasse keine Zinsänderung, denn die
              Rendite passt sich automatisch an.
            </p>

            <div className="pt-4">
              <button className="bg-white border border-[#0a1a0f] text-[#0a1a0f] font-bold py-3 px-10 rounded-full hover:bg-[#0a1a0f] hover:text-white transition-all duration-300">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsSection;
