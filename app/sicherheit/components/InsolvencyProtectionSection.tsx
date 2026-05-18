import Image from "next/image";

export default function InsolvencyProtectionSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <h2 className="text-[40px] font-light leading-[0.92] tracking-[-0.06em] text-[#001f14] md:text-[50px]">
            Insolvenzschutz? <br />
            <span className="font-serif font-bold tracking-[-0.04em]">
              Selbstverständlich!
            </span>
          </h2>

          <p className="mt-12 max-w-3xl text-[20px] leading-[1.45] tracking-[-0.03em] text-[#6f756f] md:text-[24px]">
            Dein Geld ist bei uns in sicheren Händen. Es wird als
            Sondervermögen geführt – das bedeutet, es gehört ausschließlich dir
            und bleibt strikt getrennt vom Vermögen der Depotbank und von
            Evergreen. Selbst im unwahrscheinlichen Fall einer Insolvenz bleibt
            dein Geld in unbegrenzter Höhe geschützt und fällt nicht in die
            Insolvenzmasse. Kurz gesagt: Dein Geld bleibt dein Geld.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-[700px]">
          <div className="relative h-[640px] w-full overflow-hidden rounded-[3rem]">
            <Image
              src="/isnovlenzschutz.png"
              alt="Insolvenzschutz"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}