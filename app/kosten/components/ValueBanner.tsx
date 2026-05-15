import Image from "next/image";

const ValueBanner = () => {
  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto bg-[#FEF9EE] rounded-[48px] py-20 px-6 text-center flex flex-col items-center">
        <div className="w-full max-w-[400px] aspect-[2/1] mb-10 flex items-center justify-center">
          <Image
            src={"/bird2.png"}
            alt="Bird Illustration"
            width={200}
            height={100}
          />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 tracking-tight">
          Weniger Kosten, <span className="font-bold">mehr Ertrag</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-lg md:text-xl font-medium">
          Starte gebührenfrei mit dem Vermögensaufbau.
        </p>
      </div>
    </section>
  );
};

export default ValueBanner;
