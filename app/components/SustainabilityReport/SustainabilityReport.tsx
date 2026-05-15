import Image from "next/image";
import Link from "next/link";

const SustainabilityReport = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Team Image */}
        <div className="relative max-w-[600px] w-full aspect-square md:aspect-video lg:aspect-square max-h-[440px] overflow-hidden rounded-[40px] shadow-sm">
          <Image 
            src="/people.png" 
            alt="Evergreen Team" 
            fill 
            className="object-cover"
          />
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col space-y-6 lg:pl-8">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0B2B1D] leading-tight">
            Bericht über unsere
            <br />
            <span className="font-bold">Nachhaltigkeitsreise</span>
          </h2>

          <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed max-w-xl">
            In unserem Nachhaltigkeitsbericht erfährst du alles über die
            Meilensteine, die wir in 2024 erreicht haben.
          </p>

          <div className="pt-2">
            <Link
              href="/register"
              className="text-[#B36B2F] font-semibold text-lg underline underline-offset-8 hover:text-[#8a5224] transition-all"
            >
              Jetzt reinlesen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityReport;
