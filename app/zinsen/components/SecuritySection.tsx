import Image from "next/image";
import Link from "next/link";
import React from "react";

const SecuritySection = () => {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-24 bg-white font-sans text-[#1a2e26]">
      {/* Container with rounded corners and cream background */}
      <div className="max-w-7xl mx-auto bg-[#fdf8f0] rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center items-center h-[350px] md:h-[450px]">
            <div className="absolute right-0 top-0 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl z-20 border-[6px] border-white rotate-3">
              <Image
                src="/window.png"
                alt="Security context"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Sicherheit hat{" "}
              <span className="font-bold">höchste Priorität</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Dein Evergreen-ZinsPocket ist in unbegrenzter Höhe vor Insolvenz
              geschützt. Anders als bei der Einlagensicherung vieler
              europäischer Banken geht der Insolvenzschutz über 100.000 Euro
              hinaus, denn deine Ersparnisse genießen die Sicherheit eines
              Sondervermögens.
            </p>

            <div className="pt-4">
              <Link href="/register">
                <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-orange-100 transition-all">
                  Jetzt Zinsen verdienen
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
