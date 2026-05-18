import Link from "next/link";
import React from "react";

const StepsSection = () => {
  const steps = [
    {
      id: 1,
      text: "Evergreen-Depot online eröffnen",
      isLast: false,
    },
    {
      id: 2,
      text: "Kinderdepot anlegen und Gutscheincode KINDER20 nutzen",
      isLast: false,
    },
    {
      id: 3,
      text: "Dokumente per App einreichen",
      isLast: false,
    },
    {
      id: 4,
      text: "Fertig!",
      isLast: true,
    },
  ];

  return (
    <section className="px-4 py-16 bg-[#fdf8eb] rounded-[40px] max-w-7xl mx-auto my-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
          Kinderdepot eröffnen —{" "}
          <span className="font-bold italic">so einfach geht's</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`relative p-8 rounded-2xl min-h-[220px] flex flex-col justify-between transition-transform hover:scale-[1.02] ${
              step.isLast
                ? "bg-[#ffe082] overflow-hidden"
                : "bg-white shadow-sm"
            }`}
          >
            {/* Step Number Badge */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                step.isLast ? "bg-white" : "bg-[#ffe082]"
              }`}
            >
              {step.id}
            </div>

            {/* Step Content */}
            <div className="mt-6">
              <p
                className={`text-lg font-semibold leading-snug ${
                  step.isLast ? "text-slate-900" : "text-slate-800"
                }`}
              >
                {step.text}
              </p>
            </div>

            {/* Background Illustration Placeholder for Step 4 */}
            {step.isLast && (
              <div className="absolute right-0 bottom-0 w-32 h-32 opacity-80 pointer-events-none">
                {/* Your flower illustration goes here */}
                <div
                  className="w-full h-full bg-contain bg-no-repeat bg-right-bottom"
                  style={{
                    backgroundImage: `url('/flowers.png')`,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link href={"/register"} className="bg-[#ff9922] hover:bg-[#e68a1f] text-slate-900 font-bold py-3 px-10 rounded-full transition-colors shadow-md">
          Kinderdepot eröffnen
        </Link>
      </div>
    </section>
  );
};

export default StepsSection;
