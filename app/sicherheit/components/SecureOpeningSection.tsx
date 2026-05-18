import Image from "next/image";
import { Fingerprint, KeyRound, UserRoundCheck } from "lucide-react";
import Link from "next/link";

export default function SecureOpeningSection() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center">
          <h2 className="max-w-3xl text-[58px] font-light leading-[0.95] tracking-[-0.06em] text-[#001f14] md:text-[88px]">
            Sichere Depoteröffnung <br />
            ganz{" "}
            <span className="font-serif font-bold tracking-[-0.04em]">
              automatisch.
            </span>
          </h2>

          <p className="mt-10 max-w-2xl text-2xl leading-relaxed text-[#6f756f] md:text-[34px]">
            Ohne Papierkram: Online-Depoteröffnung in wenigen Minuten.
          </p>

          <Link href={"/register"} className="mt-16 rounded-full bg-[#ff9514] px-14 py-5 text-2xl font-bold text-[#001f14] transition hover:scale-[1.02]">
            Jetzt starten
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[760px]">
          <div className="relative h-[620px] w-[400px] overflow-hidden rounded-[3rem]">
            <Image
              src="/laughingGirl.png"
              alt="Girl sitting"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute right-0 top-24 w-[430px] rounded-[2rem] bg-white px-7 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f7e1a2]">
                <UserRoundCheck
                  size={34}
                  strokeWidth={2.2}
                  className="text-[#001f14]"
                />
              </div>

              <p className="max-w-[250px] text-[22px] font-bold leading-[1.05] tracking-[-0.05em] text-[#001f14]">
                Nur du hast Zugriff auf deine Geldanlage
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-[255px] w-[430px] rounded-[2rem] bg-white px-7 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ffd44d]">
                <KeyRound
                  size={34}
                  strokeWidth={2.2}
                  className="text-[#001f14]"
                />
              </div>

              <p className="max-w-[260px] text-[22px] font-bold leading-[1.05] tracking-[-0.05em] text-[#001f14]">
                Deine Daten werden verschlüsselt übertragen
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-[430px] w-[430px] rounded-[2rem] bg-white px-7 py-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ffcf1f]">
                <Fingerprint
                  size={34}
                  strokeWidth={2.2}
                  className="text-[#001f14]"
                />
              </div>

              <p className="max-w-[280px] text-[22px] font-bold leading-[1.05] tracking-[-0.05em] text-[#001f14]">
                Login mit Finger, Gesichtserkennung oder Passwort
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}