import React from "react";
import { ArrowUpRight, PieChart, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WealthBuildingSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col space-y-8 order-2 lg:order-1">
          <span className="text-gray-400 font-bold tracking-[0.2em] text-xs uppercase">
            Vermögensaufbau
          </span>

          <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#0a1a0f] font-serif leading-[1.1]">
            Clever investieren & <br />
            <span className="font-bold">Vermögen aufbauen</span>
          </h2>

          <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed">
            Investiere nachhaltig in Aktien, Anleihen und Fonds – smart
            gesteuert von Expert:innen, die dich auf dem Weg begleiten.
          </p>

          <div className="pt-4">
            <Link href={"/vermoegensaufbau"} className="border border-[#0a1a0f] text-[#0a1a0f] font-bold py-3 px-10 rounded-full hover:bg-[#0a1a0f] hover:text-white transition-all duration-300">
              Mehr erfahren
            </Link>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="relative w-[280px] md:w-[320px] aspect-[9/19]">
            <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative">
              <Image
                src="/phonestats.png"
                alt="Relaxing"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WealthBuildingSection;
