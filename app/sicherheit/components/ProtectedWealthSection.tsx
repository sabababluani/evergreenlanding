import Image from "next/image";
import { Check, LockKeyhole } from "lucide-react";

export default function ProtectedWealthSection() {
    return (
        <section className="bg-white px-4 py-10">
            <div className="mx-auto grid min-h-[620px] max-w-7xl grid-cols-1 items-center gap-12 rounded-[3rem] bg-[#fbf6e8] px-8 py-16 md:px-14 lg:grid-cols-2 lg:px-20">
                {/* LEFT */}
                <div>
                    <h1 className="max-w-2xl text-[56px] font-light leading-[0.95] tracking-[-0.06em] text-[#002b18] md:text-[82px]">
                        Dein Vermögen <br />
                        rundum{" "}
                        <span className="font-serif font-bold tracking-[-0.04em]">
                            geschützt
                        </span>
                    </h1>

                    <p className="mt-10 max-w-xl text-xl leading-relaxed text-[#68746d] md:text-2xl">
                        Deine Geldanlage ist sicher verwahrt im Depot der DAB BNP Paribas.
                    </p>

                    <div className="mt-20 max-w-lg">
                        <div className="flex items-center gap-4">
                            <div className="grid h-12 w-12 place-items-center rounded-md bg-emerald-600 text-white">
                                <span className="text-xl">✦</span>
                            </div>

                            <div className="leading-tight">
                                <p className="text-2xl font-black text-[#111]">DAB</p>
                                <p className="-mt-1 text-lg font-black text-[#111]">
                                    BNP PARIBAS
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 text-base leading-relaxed text-[#68746d]">
                            Als Teil einer großen europäischen Bankengruppe ist die DAB BNP
                            Paribas an das europäische Einlagensicherungssystem angeschlossen.
                        </p>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-[620px]">
                    <div className="relative h-[620px] w-full overflow-hidden rounded-[3rem]">
                        <Image
                            src="/deinVermogen.png"
                            alt="Protected wealth visual"
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