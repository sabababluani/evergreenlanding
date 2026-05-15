import Image from "next/image";
import { Mail } from "lucide-react";

export default function ResponsibilitySection() {
  return (
    <section className="relative bg-[#f3f3f3] px-4 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <h2 className="text-[44px] font-light leading-[0.92] tracking-[-0.05em] text-[#001f14] md:text-[50px]">
            Verantwortung – <br />
            <span className="font-serif font-bold tracking-[-0.03em]">
              transparent gemacht
            </span>
          </h2>

          <p className="mt-10 max-w-2xl text-[16px] leading-[1.5] text-[#6f756f] md:text-[24px]">
            In unserem Nachhaltigkeitsbericht zeigen wir, was uns wirklich
            wichtig ist: Verantwortung zu übernehmen – für Menschen,
            Gesellschaft und Umwelt.
            <span className="font-bold text-[#5f6661]">
              {" "}
              CSR steht für „Corporate Social Responsibility“
            </span>
            , also die soziale und ökologische Verantwortung von Unternehmen.
            Als
            <span className="font-bold text-[#5f6661]">
              {" "}
              zertifizierte B-Corp
            </span>{" "}
            ist genau das ein fester Teil unserer Identität: Wir wollen mit
            unserem Handeln einen positiven Unterschied machen.
          </p>

          <p className="mt-14 text-[16px] font-semibold text-[#5f6661] md:text-[20px]">
            Erfahre, wie wir Nachhaltigkeit leben – transparent und echt.
          </p>

        
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-[900px]">
          <div className="relative h-[560px] overflow-hidden rounded-[2.5rem]">
            <Image
              src="/bookediton.png"
              alt="Nachhaltigkeitsbericht"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="fixed right-0 top-1/2 hidden -translate-y-1/2 rounded-l-lg bg-[#002b18] px-5 py-6 text-white lg:block">
        <Mail size={18} className="mx-auto mb-3" />

        <p className="text-center text-sm font-bold leading-tight">
          Newsletter <br /> abonnieren
        </p>
      </div>
    </section>
  );
}