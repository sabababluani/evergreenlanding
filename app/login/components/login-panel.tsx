"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

const LoginPanel = () => {
  const t = useTranslations();

  const benefits = [
    t("login.benefits.pairAccess"),
    t("login.benefits.advancedTools"),
    t("login.benefits.secureWallet"),
    t("login.benefits.customerSupport"),
  ];

  return (
    <div className="flex-1 p-8 lg:p-12 bg-white flex flex-col justify-center border-l border-slate-200 lg:border-t-0 border-t text-slate-900">
      <h2 className="text-3xl font-bold text-black mb-8">
        {t("login.startTrading")}
      </h2>

      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-0.5 shadow-md">
              <Check className="w-4 h-4 text-white" />
            </div>

            <p className="text-slate-700 leading-relaxed">{benefit}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-slate-200">
        {[
          { label: t("login.totalVolume"), value: "$4.2B+" },
          { label: t("login.activeTraders"), value: "650K+" },
          { label: t("login.countries"), value: "190+" },
        ].map((item, idx) => (
          <div key={idx} className="text-center space-y-1">
            <p className="text-slate-500 text-sm">{item.label}</p>
            <p className="text-2xl font-bold text-black">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginPanel;
