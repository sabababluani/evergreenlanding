"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

const BenefitPanel = () => {
  const t = useTranslations();

  return (
    <div className="flex-1 p-8 flex items-center justify-center bg-white text-slate-900">
      <div className="max-w-lg space-y-8 z-10 text-center lg:text-left">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
          {t("register.benefitsTitle")}
        </h2>

        <div className="space-y-6">
          {(t.raw("register.benefits") as string[])?.map(
            (benefit: string, idx: number) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-0.5 shadow-md">
                  <Check className="w-4 h-4 text-white" />
                </div>

                <p className="text-slate-700 leading-relaxed text-lg">
                  {benefit}
                </p>
              </div>
            ),
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200 mt-8">
          {[
            { label: t("register.volume"), value: "$5.2B+" },
            { label: t("register.traders"), value: "750K+" },
            { label: t("register.countries"), value: "195+" },
          ].map((item, idx) => (
            <div key={idx} className="text-center space-y-1">
              <p className="text-slate-500 text-sm">{item.label}</p>

              <p className="text-2xl font-bold text-black">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitPanel;
