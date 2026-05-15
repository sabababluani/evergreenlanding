import Image from "next/image";

const AppPromoSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content Side */}
        <div className="flex-1 z-10 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0D2B1D] leading-tight mb-6">
            Vermögenswirksame <br />
            Leistungen <span className="font-bold italic">in smart</span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            In der Evergreen-App siehst du jederzeit, wie sich dein Vermögen
            entwickelt – und kannst alles mit wenigen Klicks steuern.
          </p>

          {/* <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="relative w-36 h-12">
              <Image
                src="/app-store-badge.png" // Replace with your App Store badge
                alt="Download on App Store"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-12">
              <Image
                src="/google-play-badge.png" // Replace with your Play Store badge
                alt="Get it on Google Play"
                fill
                className="object-contain"
              />
            </div>
          </div> */}
        </div>

        <div className="flex-1 w-full relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] aspect-[4/5] md:aspect-[3/4]">
            <Image
              src="/phone.png" // Replace with your composite image
              alt="Evergreen App Interface Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromoSection;
