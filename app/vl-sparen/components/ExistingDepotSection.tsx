import Image from "next/image";

const ExistingDepotSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Image */}
        <div className="flex-1 w-full">
          <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-sm">
            <Image
              src="/womanleptop.png" // Replace with your image path
              alt="Woman working on laptop"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0D2B1D] leading-tight mb-8">
            Du hast schon ein <span className="font-bold">VL-Depot?</span>
          </h2>

          <div className="space-y-6 text-gray-500 text-lg md:text-xl leading-relaxed">
            <p>
              Kein Problem: Um endlich gebührenfrei zu sparen, kannst du einfach
              den neuen Evergreen-Antrag bei deiner Personalabteilung
              einreichen.
            </p>
            <p>
              Sobald deine vermögenswirksamen Leistungen in den
              Evergreen-Sparplan fließen, ruht dein altes VL-Depot und kann nach
              Ablauf der regulären Sperrfrist ausgezahlt werden. Eine Kündigung
              deines alten Vertrags ist nicht nötig.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExistingDepotSection;
