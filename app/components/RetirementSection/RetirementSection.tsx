import Image from "next/image";

const RetirementSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto bg-[#fdf8eb] rounded-[60px] overflow-hidden p-8 md:p-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative mt-16 w-full max-w-4xl h-64 md:h-96">
              <Image
                src="/statsImage.png"
                alt="Relaxing"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col text-left space-y-6">
            <p className="text-[12px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              Für mehr Ruhe im Ruhestand
            </p>

            <h2 className="text-5xl md:text-7xl font-serif text-[#0a1a0f] leading-[0.9]">
              Smarte <br />
              <span className="font-bold">Altersvorsorge</span>
            </h2>

            <p className="text-[#0a1a0f]/80 text-lg md:text-xl leading-relaxed max-w-lg">
              Finde heraus, was du hast, was du brauchst – und wie du deine
              Rentenlücke einfach schließen kannst. Direkt in der App, in
              wenigen Schritten und voller Transparenz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetirementSection;
