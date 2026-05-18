import Image from "next/image";

const DiarySection = () => {
  return (
    <section className="w-full px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto bg-[#FCF8ED] rounded-[50px] py-16 md:py-24 px-8 flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0B2B1D] text-center mb-12">
          Mein <span className="font-bold">Tagebuch</span> über
          <br />
          unsere Nachhaltigkeit
        </h2>

        <div className="bg-white rounded-[30px] shadow-sm max-w-4xl w-full p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 overflow-hidden rounded-[25px]">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-xs italic">
                Hanna's Photo
              </span>
            </div>
            Replace with:
            <Image 
              src="/team-2.png" 
              alt="Hanna - CSR Managerin" 
              fill 
              className="object-cover"
            />
          </div>

          {/* Card Content */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#0B2B1D]">
              Hey, ich bin Hanna!
            </h3>

            <p className="text-[#4A4A4A] italic text-base md:text-lg leading-relaxed">
              Als Managerin für soziale Unternehmensverantwortung kümmere ich
              mich bei Evergreen darum, dass wir sowohl auf Unternehmens- als
              auch auf Produktebene nachhaltig handeln. Im
              Nachhaltigkeitstagebuch nehme ich dich mit in meinen Alltag und
              ermögliche dir einen Blick hinter die Kulissen eines nachhaltigen
              Finanzunternehmens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiarySection;
