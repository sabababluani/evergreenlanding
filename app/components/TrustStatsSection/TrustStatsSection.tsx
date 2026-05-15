import React from "react";
import Image from "next/image";

const TrustStatsSection = () => {
  // Array to manage your 7 cards
  const cards = [
    { id: 1, src: "/card1.svg", alt: "4.8 Google Rating" },
    { id: 2, src: "/card2.svg", alt: "Capital Award" },
    { id: 3, src: "/card3.svg", alt: "130 Mio Euro Invested" },
    { id: 4, src: "/card4.svg", alt: "22.000 Customers" },
    { id: 5, src: "/card5.svg", alt: "Best Performance Award" },
    { id: 6, src: "/card6.svg", alt: "B Corp Certified" },
    {
      id: 7,
      src: "/card7.svg",
      alt: "extraETF Recommendation",
      isCentered: true,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`
                relative overflow-hidden bg-white rounded-[40px] 
                aspect-[4/3] md:aspect-auto md:min-h-[220px] lg:min-h-[180px]
                transition-all duration-300
                ${card.isCentered ? "lg:col-start-2" : ""}
              `}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                priority={card.id <= 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStatsSection;
