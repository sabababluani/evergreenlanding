"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function QualityPriceSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-[#f3f3f3] px-4 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <h2 className="text-[42px] font-light leading-[0.95] tracking-[-0.05em] text-[#001f14] md:text-[64px]">
            Wie wichtig sind dir <br />
            <span className="font-serif font-bold tracking-[-0.03em]">
              Qualität und Preis?
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-[20px] leading-[1.5] text-[#6f756f] md:text-[28px]">
            Nicht jede Geldanlage ist gleich. Manche bevorzugen volle
            Eigenverantwortung, andere wünschen sich starke Begleitung. Hier
            siehst du auf einen Blick, welche Lösungen welche Schwerpunkte
            setzen – und warum wir glauben, dass Qualität und faire Kosten
            zusammengehören.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          {/* IMAGE */}
          <div className="overflow-hidden rounded-[2.5rem] border border-[#e9e9e9] bg-white">
            <div className="relative h-[620px] w-full">
              <Image
                src="/Preisniveau.png"
                alt="Qualität und Preis"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* ACCORDION */}
          <div className="mt-5 overflow-hidden rounded-[2rem] bg-[#f8f1de]">
            <button
              onClick={() => setOpen(!open)}
              className="flex w-full items-center justify-between px-8 py-7 text-left"
            >
              <span className="text-[24px] font-bold tracking-[-0.03em] text-[#001f14]">
                Beschreibung der Grafik
              </span>

              <ChevronDown
                size={28}
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                open
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-8 pb-8">
                  <p className="text-[18px] leading-[1.6] text-[#6f756f] md:text-[22px]">
                    Die Grafik vergleicht vier Wege der Geldanlage nach zwei
                    Kriterien: Betreuung und Preis. Auf der linken Seite sieht
                    man, wie gut die Betreuung ist – oben viel, unten wenig.
                    Unten wird gezeigt, wie teuer das Angebot ist – links
                    günstig, rechts teuer.
                    <br />
                    <br />
                    Evergreen befindet sich oben links und steht damit für gute
                    Betreuung zu einem fairen Preis. Im Vergleich dazu sind
                    traditionelle Banken teuer, bieten aber ebenfalls gute
                    Betreuung.
                    <br />
                    <br />
                    Selbstentscheider handeln günstig, aber ohne Unterstützung.
                    Vermittler sind teuer, bieten aber keine besonders hohe
                    Qualität.
                    <br />
                    <br />
                    Die Grafik macht deutlich: Mit Evergreen bekommst du beides
                    – Qualität und Fairness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}