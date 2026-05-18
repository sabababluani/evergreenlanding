import Image from "next/image";
import Link from "next/link";

const BenefitsSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-visible">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col space-y-6 order-2 lg:order-1">
          <span className="text-gray-400 font-bold tracking-[0.2em] text-xs uppercase">
            Deine vermögenswirksamen Leistungen
          </span>

          <h2 className="text-5xl md:text-6xl text-[#0a1a0f] font-serif leading-[1.1]">
            In wenigen Schritten{" "}
            <span className="font-bold">
              zum <br /> Geldgeschenk
            </span>
          </h2>

          <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed">
            Deine vermögenswirksamen Leistungen werden jeden Monat gebührenfrei
            und automatisch in unseren nachhaltigen Aktienfonds investiert.
          </p>

          <div className="pt-6">
            <Link href={"/vl-sparen"} className="border border-[#0a1a0f] text-[#0a1a0f] font-bold py-3 px-10 rounded-full hover:bg-[#0a1a0f] hover:text-white transition-all duration-300">
              Mehr erfahren
            </Link>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end pr-0 lg:pr-12">
          <div className="relative w-full max-w-[420px] aspect-[4/5] bg-gray-100 rounded-[40px] overflow-hidden shadow-sm">
            <Image
              src="/worker.png"
              fill
              alt="Person working in a doorway"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
