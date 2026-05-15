import React from "react";

const PensionSection = () => {
  return (
    <section className="bg-[#fdf8eb] rounded-[40px] px-6 py-16 md:py-24 max-w-7xl mx-auto my-12 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Overline Title */}
        <span className="text-[10px] md:text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
          Betriebliche Altersvorsorge
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-[1.1] mb-8">
          Mehr aus deinem Gehalt machen – mit einer Betriebsrente,{" "}
          <span className="font-bold">die sich einfach geht's</span>
        </h2>

        {/* Description */}
        <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
          Im eigenen Depot verschenkst du oft Steuervorteile. Mit einem
          Kinderdepot nutzt du sie fürs Kind. Mit Freistellungsauftrag bleiben
          bis zu 1.000 Euro Kapitalerträge pro Jahr steuerfrei.
        </p>
      </div>
    </section>
  );
};

export default PensionSection;
