import Link from "next/link";

const SavingsSection = () => {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-24 bg-white font-sans text-[#1a2e26]">
      {/* Container with rounded corners and cream background */}
      <div className="max-w-7xl mx-auto bg-[#fdf8f0] rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <div className="space-y-6 z-10">
            <p className="text-xs font-semibold tracking-widest uppercase opacity-60">
              Kurzfristige Ziele
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Sparen & <span className="font-bold italic">Zinsen</span> <br />{" "}
              verdienen
            </h2>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-md">
              Deine Ersparnisse wachsen ganz einfach mit unseren ZinsPockets.
              Verpasse keine Zinsänderung, denn die Rendite passt sich
              automatisch an.
            </p>

            <div className="pt-4">
              <Link href="/register">
                <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105">
                  Jetzt Zinsen verdienen
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Mockup & Interest Badge */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Interest Rate Badge (Floating) */}
            <div className="absolute left-0 md:left-10 top-1/4 z-20 bg-white rounded-3xl p-6 shadow-2xl border border-gray-50 max-w-[240px]">
              <p className="text-[#f59e0b] text-xs font-bold uppercase mb-1">
                bis zu
              </p>
              <p className="text-5xl md:text-6xl font-bold text-[#f59e0b] leading-none mb-2">
                3,00%
              </p>
              <p className="text-[10px] text-gray-400 font-semibold leading-tight uppercase">
                erwarteter Ertrag pro Jahr**
              </p>
            </div>

            {/* Phone Mockup */}
            <div className="relative w-[260px] h-[520px] bg-[#0a1a14] rounded-[2.5rem] border-[6px] border-[#1a2e26] shadow-2xl overflow-hidden">
              {/* Internal Screen UI */}
              <div className="bg-white h-full w-full p-4 flex flex-col pt-8">
                <p className="text-center text-[10px] text-gray-400 font-bold mb-4">
                  ZinsPocket Plus
                </p>

                <div className="flex flex-col items-center mb-6">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center text-pink-500 text-xs mb-2">
                    🏢
                  </div>
                  <p className="text-[10px] font-bold text-gray-400">
                    Kurztrip nach Leipzig
                  </p>
                  <p className="text-2xl font-bold">500 €</p>
                  <p className="text-green-500 text-[10px] font-bold">
                    ▲ 5,23%
                  </p>
                </div>

                {/* Simplified Graph placeholder */}
                <div className="flex-grow flex items-end px-2 pb-12">
                  <div className="w-full h-32 bg-gradient-to-t from-green-50 to-transparent relative rounded-b-xl overflow-hidden">
                    {/* Simple SVG Line for the graph */}
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full preserve-3d"
                    >
                      <path
                        d="M0,100 L0,80 L20,75 L40,85 L60,60 L80,65 L100,20 L100,100 Z"
                        fill="rgba(34, 197, 94, 0.1)"
                      />
                      <path
                        d="M0,80 L20,75 L40,85 L60,60 L80,65 L100,20"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2"
                      />
                      <circle cx="100" cy="20" r="3" fill="#1a2e26" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Navigation Mockup */}
                <div className="border-t border-gray-100 pt-3 flex justify-around items-center">
                  <div className="flex flex-col items-center opacity-100">
                    <div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    <span className="text-[8px] mt-1 font-bold">Pockets</span>
                  </div>
                  <div className="flex flex-col items-center opacity-40">
                    <div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    <span className="text-[8px] mt-1">Rente</span>
                  </div>
                  <div className="flex flex-col items-center opacity-40">
                    <div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    <span className="text-[8px] mt-1">Entdecken</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsSection;
