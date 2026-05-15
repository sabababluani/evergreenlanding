import React from "react";

const StepsSection = () => {
  const steps = [
    {
      number: "1",
      bgColor: "bg-[#D9E66B]", // Lime/Yellow
      text: "Frag deine Personalabteilung, ob sie VL anbietet und wie viel du monatlich bekommst.",
    },
    {
      number: "2",
      bgColor: "bg-[#A7BCB0]", // Sage Green
      text: "Eröffne online dein VL-Depot bei Evergreen – ohne Papierkram.",
    },
    {
      number: "3",
      bgColor: "bg-[#F2A7BB]", // Pink
      text: "Reiche den Antrag, den wir für dich erstellen, bei deiner Personalabteilung ein.",
    },
    {
      number: "4",
      bgColor: "bg-[#FFC34D]", // Amber
      text: "Kassiere bis zu 40 € im Monat zusätzlich zu deinem Gehalt. So geht vermögenswirksames Sparen!",
    },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto bg-[#FDF8F1] rounded-[2.5rem] p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Headline */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0D2B1D] leading-[1.1]">
            Eröffne dein VL-Depot <br />
            <span className="font-bold italic">in wenigen Minuten</span>
          </h2>
        </div>

        {/* Right Side: Step Cards Grid */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 md:p-8 flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Step Number Circle */}
                <div
                  className={`${step.bgColor} w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 text-[#0D2B1D] font-bold text-xl md:text-2xl`}
                >
                  {step.number}
                </div>

                {/* Step Text */}
                <p className="text-[#0D2B1D] text-sm md:text-base leading-snug pt-1">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
