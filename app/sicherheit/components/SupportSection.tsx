import Image from "next/image";
import { Mail, Phone, CircleHelp } from "lucide-react";
import Link from "next/link";

export default function SupportSection() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* LEFT */}
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-[42px] font-light leading-[0.95] tracking-[-0.05em] text-[#001f14] md:text-[64px]">
            Wir sind{" "}
            <span className="font-serif font-bold tracking-[-0.03em]">
              für dich da
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-[20px] leading-[1.45] text-[#6f756f] md:text-[20px]">
            Geldanlage kann manchmal wie ein Dschungel wirken – aber keine
            Sorge, wir lotsen dich durch! Melde dich einfach bei uns, wir
            stehen dir mit persönlicher und professioneller Unterstützung zur
            Seite.
          </p>

          <Link href={"/register"} className="mt-14 rounded-full border-2 border-[#001f14] px-12 py-4 text-[22px] font-semibold text-[#001f14] transition hover:bg-[#001f14] hover:text-white">
            Gespräch buchen
          </Link>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-[760px]">
          {/* GIRL IMAGE */}
          <div className="relative h-[660px] w-[420px] overflow-hidden rounded-[3rem]">
            <Image
              src="/supportgirl.png"
              alt="Support"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* CARD 1 */}
          <div className="absolute right-0 top-10 w-[420px] rounded-[2rem] bg-white px-7 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f8e8b6]">
                <Phone
                  size={28}
                  strokeWidth={2}
                  className="text-[#001f14]"
                />
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-[#001f14] md:text-[20px]">
                  +49 341 2425 0070
                </h3>

                <p className="mt-3 text-[16px] leading-relaxed text-[#6f756f] md:text-[20px]">
                  Montag bis Freitag
                  <br />
                  09:00 bis 17:00 Uhr
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="absolute right-0 top-[250px] w-[420px] rounded-[2rem] bg-white px-7 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f8e8b6]">
                <Mail
                  size={28}
                  strokeWidth={2}
                  className="text-[#001f14]"
                />
              </div>

              <a
                href="mailto:hello@evergreen.de"
                className="text-[20px] font-semibold text-[#9a5a18] underline underline-offset-4 md:text-[20px]"
              >
                hello@evergreen.de
              </a>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="absolute right-0 top-[450px] w-[420px] rounded-[2rem] bg-white px-7 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f8e8b6]">
                <CircleHelp
                  size={28}
                  strokeWidth={2}
                  className="text-[#001f14]"
                />
              </div>

              <a
                href="#"
                className="text-[20px] font-semibold text-[#9a5a18] underline underline-offset-4 md:text-[20px]"
              >
                Zu unserer Hilfe-Seite
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}