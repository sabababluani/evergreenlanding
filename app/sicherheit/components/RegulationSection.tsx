import {
    Building2,
    BadgeCheck,
  } from "lucide-react";
  
  export default function RegulationSection() {
    return (
      <section className="bg-[#f4f0e4] px-4 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 rounded-[3rem] px-6 py-10 lg:grid-cols-2 lg:px-16">
          {/* LEFT */}
          <div>
            <h2 className="text-[44px] font-light leading-[0.95] tracking-[-0.05em] text-[#001f14] md:text-[64px]">
              Lizenziert und{" "}
              <span className="font-serif font-bold tracking-[-0.03em]">
                kontrolliert
              </span>
            </h2>
  
            <p className="mt-8 text-[22px] leading-relaxed text-[#6f756f] md:text-[30px]">
              Nach § 15 WpIG (Wertpapierinstitutsgesetz)
            </p>
          </div>
  
          {/* RIGHT */}
          <div className="flex flex-col gap-8">
            {/* CARD 1 */}
            <div className="rounded-[2.5rem] bg-white px-8 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f6c88d]">
                  <Building2
                    size={30}
                    strokeWidth={2}
                    className="text-[#001f14]"
                  />
                </div>
  
                <div>
                  <h3 className="text-[24px] font-bold tracking-[-0.04em] text-[#001f14] md:text-[24px]">
                    Beaufsichtigt durch die BaFin
                  </h3>
  
                  <p className="mt-2 text-[16px] text-[#6f756f] md:text-[20px]">
                    BaFin – Bundesanstalt für
                    Finanzdienstleistungsaufsicht
                  </p>
  
                  <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#6f756f] md:text-[16px]">
                    Die BaFin überwacht Banken, Versicherungen und
                    Finanzdienstleister in Deutschland. Sie sorgt dafür,
                    dass diese Unternehmen sicher, transparent und
                    gesetzeskonform arbeiten.
                  </p>
                </div>
              </div>
            </div>
  
            {/* CARD 2 */}
            <div className="rounded-[2.5rem] bg-white px-8 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f6c88d]">
                  <BadgeCheck
                    size={30}
                    strokeWidth={2}
                    className="text-[#001f14]"
                  />
                </div>
  
                <div>
                  <h3 className="text-[20px] font-bold tracking-[-0.04em] text-[#001f14] md:text-[24px]">
                    Anschluss an die EdW
                  </h3>
  
                  <p className="mt-2 text-[16px] text-[#6f756f] md:text-[16px]">
                    EdW – Entschädigungseinrichtung der
                    Wertpapierhandelsunternehmen
                  </p>
  
                  <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#6f756f] md:text-[16px]">
                    Als digitaler Vermögensverwalter sind wir an die EdW
                    angeschlossen. Sie sichert Ansprüche aus
                    Wertpapiergeschäften bis maximal 20.000 Euro ab.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }