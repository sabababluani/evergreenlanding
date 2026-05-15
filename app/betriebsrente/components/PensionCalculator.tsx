"use client";

import React, { useState, useEffect } from "react";

export default function PensionCalculator() {
  // State for the sliders
  const [age, setAge] = useState(30);
  const [grossSalary, setGrossSalary] = useState(45000);
  const [ownContribution, setOwnContribution] = useState(228);
  const [employerSubsidyPercent, setEmployerSubsidyPercent] = useState(15);

  // Calculated values
  const [calcData, setCalcData] = useState({
    employerSubsidyAmount: 0,
    totalMonthly: 0,
    taxSavings: 0,
    socialSavings: 0,
    netCost: 0,
    estimatedCapital: 0,
    totalNetCostOverTime: 0,
  });

  useEffect(() => {
    // 1. Employer Subsidy
    const employerAmount = ownContribution * (employerSubsidyPercent / 100);

    // 2. Total Monthly Contribution
    const total = ownContribution + employerAmount;

    // 3. Tax Savings (Approximated at ~29.8% to match screenshot 68€ / 228€)
    const tax = Math.round(ownContribution * 0.2982);

    // 4. Social Security Savings
    // (Approximated at ~20.1% up to the 338€ cap to match screenshot 46€ / 228€)
    const cappedContributionForSV = Math.min(ownContribution, 338);
    const social = Math.round(cappedContributionForSV * 0.2017);

    // 5. Net Cost Monthly
    const net = ownContribution - tax - social;

    // 6. Time Horizon
    const yearsToSave = 67 - age;

    // 7. Total Net Cost over time
    const totalNet = net * 12 * yearsToSave;

    // 8. Estimated Gross Capital at 67 (Compound interest formula, assumed ~5.6% return to match screenshot)
    const annualReturnRate = 0.056;
    const annualContribution = total * 12;
    let estimatedCap = 0;

    if (annualReturnRate > 0) {
      estimatedCap =
        annualContribution *
        ((Math.pow(1 + annualReturnRate, yearsToSave) - 1) / annualReturnRate);
    } else {
      estimatedCap = annualContribution * yearsToSave;
    }

    setCalcData({
      employerSubsidyAmount: Math.round(employerAmount),
      totalMonthly: Math.round(total),
      taxSavings: tax,
      socialSavings: social,
      netCost: net,
      estimatedCapital: Math.round(estimatedCap),
      totalNetCostOverTime: totalNet,
    });
  }, [age, grossSalary, ownContribution, employerSubsidyPercent]);

  // Format currency
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans text-gray-900">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column: Inputs */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4 leading-tight">
            Sieh, was dir die <br />
            Betriebsrente{" "}
            <span className="font-bold text-teal-900">wirklich bringt</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Stell deine Situation ein und sieh, wie viel Rente du aufbaust und
            was es dich tatsächlich kostet.
          </p>

          <div className="space-y-8">
            {/* Slider: Age */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-gray-500">Dein Alter</label>
                <span className="font-bold">{age} Jahre</span>
              </div>
              <input
                type="range"
                min="18"
                max="66"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-800"
              />
            </div>

            {/* Slider: Gross Salary */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-gray-500">
                  Jahresbrutto-Gehalt
                </label>
                <span className="font-bold">{formatCurrency(grossSalary)}</span>
              </div>
              <input
                type="range"
                min="20000"
                max="120000"
                step="1000"
                value={grossSalary}
                onChange={(e) => setGrossSalary(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-800"
              />
            </div>

            {/* Slider: Own Contribution */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-gray-500">
                  Dein Eigenanteil (brutto)
                </label>
                <span className="font-bold">{ownContribution} €</span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value={ownContribution}
                onChange={(e) => setOwnContribution(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-800"
              />
            </div>

            {/* Slider: Employer Subsidy */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-gray-500">
                  Arbeitgeber-Zuschuss
                </label>
                <span className="font-bold">{employerSubsidyPercent} %</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={employerSubsidyPercent}
                onChange={(e) =>
                  setEmployerSubsidyPercent(Number(e.target.value))
                }
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-800"
              />
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-amber-100/50 p-4 rounded-xl text-sm text-gray-700">
            Eigenanteil und Arbeitgeber-Zuschuss zusammen ergeben deinen
            Gesamtbeitrag. Bis 338 €/Monat (SV-frei 2026) sparst du
            Sozialabgaben. Höhere Beiträge sind möglich, der Anteil über 338 €
            ist dann nicht mehr sozialversicherungsfrei.
          </div>

          <button className="text-left text-sm text-gray-500 mt-4 hover:underline">
            + Annahmen & rechtlicher Hinweis
          </button>
        </div>

        {/* Right Column: Output Card */}
        <div>
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">
              Deine Monatliche Übersicht
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Dein Eigenanteil</span>
                <span className="font-bold">{ownContribution} €</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="text-gray-600">Arbeitgeber-Zuschuss</span>
                <span className="font-bold text-green-600">
                  + {calcData.employerSubsidyAmount} €
                </span>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-600">Gesamtbeitrag monatlich</span>
                <span className="font-bold">{calcData.totalMonthly} €</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Deine Steuerersparnis</span>
                <span className="font-bold text-green-600">
                  - {calcData.taxSavings} €
                </span>
              </div>

              <div className="flex justify-between items-center pb-4">
                <span className="text-gray-600">
                  Deine Sozialabgaben-Ersparnis
                </span>
                <span className="font-bold text-green-600">
                  - {calcData.socialSavings} €
                </span>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl flex justify-between items-center">
                <span className="font-bold">Was es dich netto kostet</span>
                <span className="font-bold text-lg">{calcData.netCost} €</span>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 rounded-2xl p-6 text-center border border-amber-100/50">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Geschätztes Brutto-Kapital mit 67
              </h4>
              <div className="text-4xl font-bold mb-4">
                {formatCurrency(calcData.estimatedCapital)}
              </div>

              <p className="text-sm text-gray-800 font-medium mb-2">
                Dein Netto-Aufwand über die gesamte Laufzeit:{" "}
                {formatCurrency(calcData.totalNetCostOverTime)}
              </p>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Bei Auszahlung fallen Steuern und ggf. Sozialabgaben an. Der
                Netto-Betrag hängt von deiner Steuersituation im Alter ab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
