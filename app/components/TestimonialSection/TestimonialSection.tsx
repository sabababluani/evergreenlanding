import React from "react";
import { Star } from "lucide-react";

// SVG Components
const GoogleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const AppleIcon = () => (
  <svg
    viewBox="0 0 384 512"
    className="w-5 h-5"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const testimonials = [
  {
    platform: "Google",
    author: "Winfried Werner",
    text: "Gute und sichere Geldanlage. Professionelle Web-Seite. Sehr übersichtlich und informativ. Schneller Kontakt bei Fragen. Einfach eine gute Sache!",
    rating: 5,
    Icon: GoogleIcon,
  },
  {
    platform: "App Store",
    author: "Volker Schlacht",
    text: "So macht Geld anlegen Spaß. Das Design ist frisch und die Benutzerführung ist übersichtlich.",
    rating: 5,
    Icon: AppleIcon,
  },
  {
    platform: "Google",
    author: "Claudia Schneider",
    text: "Meine Erfahrung mit Evergreen ist sehr positiv. Die Seite ist sehr übersichtlich gestaltet, auch für unerfahrene Anleger verständlich erklärt. Die Depoteröffnung ging schnell und unkompliziert vonstatten.",
    rating: 5,
    Icon: GoogleIcon,
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-[#fcfcfc] py-16 px-6 font-sans relative">
      {/* Floating Newsletter Label */}
      {/* <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 bg-[#0a1a0f] text-white py-4 px-2 rounded-l-lg flex-col items-center gap-3 z-50 cursor-pointer">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold uppercase tracking-widest">
          Newsletter abonnieren
        </span>
      </div> */}

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl text-[#0a1a0f] mb-8 font-serif leading-tight">
          Wenn sich Investieren{" "}
          <span className="font-bold italic">richtig anfühlt</span>
        </h2>

        <button className="bg-[#ff9021] hover:bg-[#fb8108] text-[#0a1a0f] font-bold py-4 px-12 rounded-full transition-all duration-200 mb-16 text-lg">
          Jetzt starten
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[3rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col text-left border border-gray-50"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-4">
                  <div className="bg-[#f2f2f2] w-12 h-12 rounded-full flex items-center justify-center">
                    <item.Icon />
                  </div>
                  <span className="font-bold text-2xl text-[#0a1a0f] tracking-tight">
                    {item.platform}
                  </span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffc107" color="#ffc107" />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-400 text-sm font-medium">
                  {item.author}
                </p>
                <p className="text-[#0a1a0f] leading-relaxed text-[1.05rem]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
