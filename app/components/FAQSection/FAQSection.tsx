"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const faqs = [
    {
      question: "Wie steht Evergreen zum Thema Nachhaltigkeit?",
      answer: (
        <div className="space-y-4">
          <p>
            Für uns steht fest: Geldanlage darf nicht die Welt kosten. Und das
            meinen wir im wahrsten Sinne des Wortes. Wir sehen Nachhaltigkeit
            als ein ganzheitliches Konzept, dass nicht beim Produkt aufhören
            darf. Denn was nützt ein nachhaltiges Produkt, wenn das Unternehmen
            dahinter nicht nachhaltig agiert?
          </p>
          <p>
            Aus diesem Grund sind nicht nur all unsere Fonds nachhaltig
            aufgestellt, sondern auch wir als Unternehmen. So ist Evergreen{" "}
            <span className="text-[#B36B2F] underline cursor-pointer">
              B Corp zertifiziert
            </span>{" "}
            und damit nachweislich ein Unternehmen mit einem gesellschaftlichen
            und ökologischen Mehrwert.
          </p>
          <p>
            Außerdem ist Evergreen als Unternehmen{" "}
            <span className="text-[#B36B2F] underline cursor-pointer">
              CO2-neutral
            </span>{" "}
            durch Kompensation. Das bedeutet: Wir messen jedes Jahr unsere
            CO2-Emissionen, versuchen, diese kontinuierlich zu reduzieren, und
            kompensieren alle unvermeidbaren Emissionen durch die Renaturierung
            von Mooren oder den Kauf von Emissionsrechten am EU-Emissionsmarkt.
          </p>
        </div>
      ),
    },
    {
      question: "Was bedeutet es, dass Evergreen eine B Corp ist?",
      answer: (
        <div className="space-y-4">
          <p>
            B Corp steht für „Certified Benefit Corporation“, also zertifizierte
            gemeinnützige Gesellschaft. Die offizielle Zertifizierung als B Corp
            wird von der US-amerikanischen Non-Profit-Organisation B Lab
            vergeben.
          </p>
          <p>
            Um zertifiziert zu werden, haben wir ein Assessment bestehend aus
            200 Fragen durchlaufen. Dabei wurde geprüft, welchen Einfluss unser
            Handeln auf fünf Impact Areas hat: Unternehmensführung,
            Arbeitnehmer:innen, Gemeinschaft, Umwelt und Kund:innen.
          </p>
          <p>
            Statt der Gewinnmaximierung um jeden Preis stehen bei uns die
            Bedürfnisse aller Interessensgruppen im Vordergrund: Stakeholder-
            statt Shareholder-Ansatz.
          </p>
        </div>
      ),
    },
    {
      question: "Warum sind eure Fonds nachhaltig?",
      answer: (
        <div className="space-y-4">
          <p>
            Bei nachhaltigen Fonds werden neben der Rendite auch ethische,
            soziale und ökologische Aspekte berücksichtigt. Eine offizielle
            Klassifizierung erfolgt durch die EU-Offenlegungsverordnug (Artikel
            8 und 9).
          </p>
          <p>
            Der Evergreen Stable World Fund ist nach <strong>Artikel 8</strong>{" "}
            klassifiziert. Die Fonds Evergreen Sustainable World Stocks,
            Sustainable World Bonds und der Tomorrow Fund sind nach{" "}
            <strong>Artikel 9</strong> klassifiziert – der nachhaltigsten
            Produktkategorie.
          </p>
        </div>
      ),
    },
    {
      question: "Was sind Impact Investments?",
      answer: (
        <div className="space-y-4">
          <p>
            Impact Investments sind wirkungsorientierte Investitionen, die neben
            einer finanziellen Rendite auch nachweislich einen ökologischen und
            sozialen Mehrwert erzeugen (SDGs).
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Impact-Aligned:</strong> Geschäftstätigkeit trägt zu den
              SDGs bei.
            </li>
            <li>
              <strong>Impact-Generating:</strong> Investment unterliegt einem
              nachhaltigen Framework.
            </li>
          </ul>
          <p className="pt-2">
            <Link
              href="/hilfe"
              className="text-[#B36B2F] font-semibold underline"
            >
              Hier findest du mehr zum Thema.
            </Link>
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:py-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <Image
          src="/flowers.png"
          alt="Decorative flowers"
          width={150}
          height={113}
          className="object-contain"
        />

        <h2 className="text-4xl md:text-5xl font-serif text-[#0B2B1D] text-center mb-4">
          Häufige <span className="font-bold">Fragen</span>
        </h2>

        <p className="text-[#4A4A4A] text-center mb-12">
          Alles, was du über Nachhaltigkeit bei Evergreen wissen musst:
        </p>

        {/* FAQ Container */}
        <div className="w-full bg-white border border-gray-100 rounded-[40px] shadow-sm p-4 md:p-8 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between p-6 rounded-[25px] text-left transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#FCF8ED]"
                    : "bg-[#FCF8ED]/50 hover:bg-[#FCF8ED]"
                }`}
              >
                <span className="font-bold text-[#0B2B1D] md:text-lg">
                  {faq.question}
                </span>
                <span className="text-2xl text-[#0B2B1D]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-8 text-[#0B2B1D] bg-[#FCF8ED] rounded-b-[25px] -mt-6 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}

          {/* Footer Link */}
          <div className="text-center pt-8">
            <Link
              href="/hilfe"
              className="text-[#B36B2F] font-bold underline underline-offset-4 hover:text-[#8a5224]"
            >
              Alle Fragen ansehen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
