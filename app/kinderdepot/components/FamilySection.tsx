// FamilySection.jsx

import Image from "next/image";

const features = [
  {
    id: 1,
    iconBg: "bg-yellow-400",
    title: "Gemeinsam mehr erreichen",
    description:
      "Alle Familienmitglieder – wie Oma und Opa, Freunde und Verwandte – können einfach beim Besparen des Kinderdepots helfen.",
    iconAlt: "Group icon",
    iconSrc: "/icons/group.svg", // replace with your icon
  },
  {
    id: 2,
    iconBg: "bg-pink-400",
    title: "Einzahlen leicht gemacht",
    description:
      "Auch ohne eigenes Evergreen-Depot können Einzahlungen ganz unkompliziert per Überweisung erfolgen.",
    iconAlt: "Deposit icon",
    iconSrc: "/icons/deposit.svg",
  },
  {
    id: 3,
    iconBg: "bg-orange-400",
    title: "Eigene IBAN fürs Kinderdepot",
    description:
      "Jedes Kinderdepot bekommt eine persönliche Kontonummer – so geht keine Überweisung verloren.",
    iconAlt: "IBAN icon",
    iconSrc: "/icons/iban.svg",
  },
  {
    id: 4,
    iconBg: "bg-yellow-300",
    title: "Immer informiert",
    description:
      "Du erhältst automatisch eine Benachrichtigung über jede neue Einzahlung.",
    iconAlt: "Notification icon",
    iconSrc: "/icons/notification.svg",
  },
];

export default function FamilySection() {
  return (
    <section className="w-full bg-[#fdf8ef] py-16 px-4 sm:px-6 lg:px-12 rounded-3xl">
      {/* Hero illustration + heading */}
      <div className="flex flex-col items-center text-center mb-12">
        {/* Illustration placeholder — replace src when ready */}
        <div className="mb-6">
          <Image
            src="/family.png" // replace with your illustration
            alt="Familie am Tisch"
            width={180} // adjust to match your actual illustration
            height={150} // adjust to match your actual illustration
            className="object-contain"
          />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 leading-snug">
          Die ganze Familie{" "}
          <span className="font-black font-sans">spart einfach mit</span>
        </h2>
      </div>

      {/* Feature cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm"
          >
            <div>
              <h3 className="text-base font-bold text-gray-900 leading-snug mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
