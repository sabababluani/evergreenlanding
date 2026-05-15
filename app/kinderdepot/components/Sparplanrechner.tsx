"use client";

import { useState, useRef } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ANNUAL_RATE = 0.072;
const PRESETS = [
  { label: "Führerschein", amount: 4000, icon: "🚗" },
  { label: "Einrichtung Wohnung", amount: 7000, icon: "🏠" },
  { label: "Weltreise", amount: 15000, icon: "🌍" },
  { label: "Ausbildung", amount: 25000, icon: "🎓" },
];

function formatEur(val: number) {
  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(val));
}

function calcSavings(
  goalAmount: number,
  durationYears: number,
  overrideMonthly: number | null = null,
) {
  const n = durationYears * 12;
  const r = ANNUAL_RATE / 12;
  let pmt: number;
  if (overrideMonthly !== null) {
    pmt = overrideMonthly;
  } else {
    pmt = (goalAmount * r) / (Math.pow(1 + r, n) - 1);
  }
  const fv = (pmt * (Math.pow(1 + r, n) - 1)) / r;
  const totalPaid = pmt * n;
  const expectedReturn = fv - totalPaid;

  const chartData = [];
  for (let y = 0; y <= durationYears; y++) {
    const months = y * 12;
    const value = months === 0 ? 0 : (pmt * (Math.pow(1 + r, months) - 1)) / r;
    const invested = pmt * months;
    const returnPct = invested > 0 ? ((value - invested) / invested) * 100 : 0;
    chartData.push({
      year: y,
      value: Math.round(value),
      invested: Math.round(invested),
      returnPct: Math.round(returnPct * 10) / 10,
    });
  }

  return {
    pmt: Math.round(pmt),
    fv: Math.round(fv),
    totalPaid: Math.round(totalPaid),
    expectedReturn: Math.round(expectedReturn),
    chartData,
  };
}

// Dual-handle range slider
function DualRangeSlider({
  min,
  max,
  valueMin,
  valueMax,
  onChange,
}: {
  min: number;
  max: number;
  valueMin: number;
  valueMax: number;
  onChange: (lo: number, hi: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const pctMin = ((valueMin - min) / (max - min)) * 100;
  const pctMax = ((valueMax - min) / (max - min)) * 100;

  return (
    <div className="relative h-10 flex items-center" ref={trackRef}>
      {/* Track background */}
      <div className="absolute w-full h-1.5 bg-gray-200 rounded-full" />
      {/* Active track */}
      <div
        className="absolute h-1.5 rounded-full"
        style={{
          left: `${pctMin}%`,
          right: `${100 - pctMax}%`,
          background: "#2D3A2E",
        }}
      />
      {/* Min thumb */}
      <input
        type="range"
        min={min}
        max={max}
        step={1}
        value={valueMin}
        onChange={(e) => {
          const v = Math.min(Number(e.target.value), valueMax - 1);
          onChange(v, valueMax);
        }}
        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
        style={{ pointerEvents: "all" }}
      />
      {/* Max thumb */}
      <input
        type="range"
        min={min}
        max={max}
        step={1}
        value={valueMax}
        onChange={(e) => {
          const v = Math.max(Number(e.target.value), valueMin + 1);
          onChange(valueMin, v);
        }}
        className="absolute w-full h-full opacity-0 cursor-pointer z-20"
        style={{ pointerEvents: "all" }}
      />
      {/* Visual thumbs */}
      <div
        className="absolute w-5 h-5 rounded-full border-2 border-white shadow-md z-30 pointer-events-none"
        style={{ left: `calc(${pctMin}% - 10px)`, background: "#2D3A2E" }}
      />
      <div
        className="absolute w-5 h-5 rounded-full border-2 border-white shadow-md z-30 pointer-events-none"
        style={{ left: `calc(${pctMax}% - 10px)`, background: "#2D3A2E" }}
      />
    </div>
  );
}

// Custom tooltip for chart
interface CustomTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: readonly any[];
  label?: string | number;
  chartMode: string;
}

function CustomTooltip({
  active,
  payload,
  label,
  chartMode,
}: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  const d = payload[0]?.payload;
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg px-4 py-3 text-sm">
      <p className="text-gray-500 mb-1 font-medium">Jahr {label}</p>
      {chartMode === "eur" ? (
        <>
          <p className="text-[#2D3A2E] font-semibold">
            Wert: {formatEur(d.value)} €
          </p>
          <p className="text-gray-500">Eingezahlt: {formatEur(d.invested)} €</p>
          <p className="text-emerald-600">
            Ertrag: +{formatEur(d.value - d.invested)} €
          </p>
        </>
      ) : (
        <p className="text-[#2D3A2E] font-semibold">
          Rendite: {d.returnPct.toFixed(1)} %
        </p>
      )}
    </div>
  );
}

export default function SparplanRechner() {
  const [goal, setGoal] = useState(6000);
  const [goalInput, setGoalInput] = useState("6.000");
  const [ageMin, setAgeMin] = useState(6);
  const [ageMax, setAgeMax] = useState(17);
  const [monthlyOverride, setMonthlyOverride] = useState<number | null>(null);
  const [chartMode, setChartMode] = useState<"eur" | "pct">("eur");

  const duration = ageMax - ageMin;
  const stats = calcSavings(goal, Math.max(duration, 1), monthlyOverride);

  const handleGoalChange = (val: number) => {
    setGoal(val);
    setGoalInput(formatEur(val));
    setMonthlyOverride(null);
  };

  const handleGoalInput = (raw: string) => {
    const cleaned = raw.replace(/\./g, "").replace(/[^0-9]/g, "");
    const num = parseInt(cleaned, 10);
    setGoalInput(raw);
    if (!isNaN(num) && num > 0) {
      setGoal(num);
      setMonthlyOverride(null);
    }
  };

  const handleGoalBlur = () => {
    setGoalInput(formatEur(goal));
  };

  const handleMonthly = (delta: number) => {
    const current = monthlyOverride ?? stats.pmt;
    const next = Math.max(1, current + delta);
    setMonthlyOverride(next);
  };

  const finalStats = monthlyOverride
    ? calcSavings(goal, Math.max(duration, 1), monthlyOverride)
    : stats;

  const chartColor = chartMode === "eur" ? "#5A7A3A" : "#3A6B7A";
  const chartFill = chartMode === "eur" ? "#C8E6A0" : "#A0D6E6";
  const chartKey = chartMode === "eur" ? "value" : "returnPct";

  const yTickFormatter = (v: number) =>
    chartMode === "eur" ? `${formatEur(v)} €` : `${v} %`;

  return (
    <div className="min-h-screen bg-[#FAF8F2] font-sans">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-2xl font-semibold text-gray-700 tracking-wide">
          Sparsumme optional anpassen
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-12 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-5">
          {/* Step 1 — Sparziel */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-full bg-amber-300 text-sm font-bold flex items-center justify-center text-amber-900">
                1
              </span>
              <h2 className="text-lg font-semibold text-gray-800">
                Sparziel wählen
              </h2>
              <span
                className="text-gray-400 text-sm ml-1 cursor-help"
                title="Gib deinen Sparbetrag ein"
              >
                ⓘ
              </span>
            </div>

            <label className="block text-xs font-medium text-[#4A7A9B] mb-1 uppercase tracking-wider">
              Mein Sparziel
            </label>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden mb-5 focus-within:ring-2 focus-within:ring-[#5A7A3A]/30">
              <button
                onClick={() => handleGoalChange(Math.max(100, goal - 100))}
                className="px-4 py-3 text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors text-lg"
              >
                −
              </button>
              <input
                type="text"
                value={goalInput}
                onChange={(e) => handleGoalInput(e.target.value)}
                onBlur={handleGoalBlur}
                className="flex-1 text-center text-lg font-medium text-gray-800 outline-none bg-transparent py-3"
              />
              <span className="text-gray-400 pr-2">€</span>
              <button
                onClick={() => handleGoalChange(goal + 100)}
                className="px-4 py-3 text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors text-lg"
              >
                +
              </button>
            </div>

            <p className="text-xs font-medium text-[#4A7A9B] uppercase tracking-wider mb-3">
              Beliebte Sparziele
            </p>
            <div className="grid grid-cols-2 gap-3">
              {PRESETS.map((p) => (
                <button
                  key={p.label}
                  onClick={() => handleGoalChange(p.amount)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-150
                    ${
                      goal === p.amount
                        ? "border-[#5A7A3A] bg-[#F0F7E8] ring-1 ring-[#5A7A3A]/20"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                >
                  <span className="text-xl">{p.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 leading-tight">
                      {p.label}
                    </p>
                    <p className="text-xs text-gray-400">
                      {formatEur(p.amount)} €
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 — Laufzeit */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-full bg-amber-300 text-sm font-bold flex items-center justify-center text-amber-900">
                2
              </span>
              <h2 className="text-lg font-semibold text-gray-800">
                Laufzeit ermitteln
              </h2>
              <span
                className="text-gray-400 text-sm ml-1 cursor-help"
                title="Schiebe die Regler um Alter und Zielalter zu wählen"
              >
                ⓘ
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Wie alt ist dein Kind{" "}
              <span className="text-gray-400">(linker Punkt)</span> und bis zu
              welchem Zielalter{" "}
              <span className="text-gray-400">(rechter Punkt)</span> möchtest du
              sparen?
            </p>

            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">
                Alter: <strong className="text-gray-900">{ageMin} Jahre</strong>
              </span>
              <span className="text-gray-500">
                Zielalter:{" "}
                <strong className="text-gray-900">{ageMax} Jahre</strong>
              </span>
            </div>

            <DualRangeSlider
              min={0}
              max={30}
              valueMin={ageMin}
              valueMax={ageMax}
              onChange={(lo, hi) => {
                setAgeMin(lo);
                setAgeMax(hi);
                setMonthlyOverride(null);
              }}
            />

            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0</span>
              <span>15</span>
              <span>30 Jahre</span>
            </div>

            {duration > 0 && (
              <p className="mt-4 text-sm text-[#4A7A9B]">
                Dein Kind ist <strong>{ageMin} Jahre</strong>. Du möchtest bis
                zu seinem <strong>{ageMax}. Lebensjahr</strong> sparen. Somit
                läuft der Sparplan <strong>{duration} Jahre</strong>.
              </p>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-5">
          {/* Summary card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  Mein Sparziel:
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {formatEur(monthlyOverride ? finalStats.fv : goal)} €
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  Monatliche Sparsumme:
                </p>
                <div className="flex items-center gap-2 justify-end">
                  <button
                    onClick={() => handleMonthly(-1)}
                    className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-sm"
                  >
                    −
                  </button>
                  <span className="text-2xl font-bold text-gray-900 min-w-[2.5rem] text-center">
                    {finalStats.pmt}
                  </span>
                  <span className="text-gray-400">€</span>
                  <button
                    onClick={() => handleMonthly(1)}
                    className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            {duration > 0 && (
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                Wenn du monatlich{" "}
                <strong className="text-gray-700">
                  {finalStats.pmt.toLocaleString("de-DE")},00 €
                </strong>{" "}
                sparst, hast du nach{" "}
                <strong className="text-gray-700">{duration} Jahren</strong>{" "}
                voraussichtlich{" "}
                <strong className="text-gray-700">
                  {formatEur(finalStats.fv)} €
                </strong>
                .
              </p>
            )}
          </div>

          {/* Wertentwicklung card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#2D3A2E] flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A8D08A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <h2 className="text-base font-semibold text-gray-800">
                Wertentwicklung
              </h2>

              {/* Toggle button */}
              <div className="ml-auto flex items-center bg-gray-100 rounded-lg p-1 gap-1">
                <button
                  onClick={() => setChartMode("eur")}
                  className={`px-3 py-1 text-xs rounded-md font-medium transition-all ${
                    chartMode === "eur"
                      ? "bg-white shadow text-gray-800"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  € Betrag
                </button>
                <button
                  onClick={() => setChartMode("pct")}
                  className={`px-3 py-1 text-xs rounded-md font-medium transition-all ${
                    chartMode === "pct"
                      ? "bg-white shadow text-gray-800"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  % Rendite
                </button>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {[
                {
                  label: "Du hast eingezahlt:",
                  value: `${formatEur(finalStats.totalPaid)} €`,
                  color: "text-gray-800",
                },
                {
                  label: "Erwarteter Ertrag:",
                  value: `+${formatEur(finalStats.expectedReturn)} €`,
                  color: "text-emerald-600",
                },
                {
                  label: `Wert nach ${duration} Jahren:`,
                  value: `${formatEur(finalStats.fv)} €`,
                  color: "text-gray-800",
                },
                {
                  label: "Rendite p.a.",
                  value: `${(ANNUAL_RATE * 100).toFixed(2)} % p.a.`,
                  color: "text-gray-800",
                },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-[10px] text-gray-400 leading-tight mb-0.5">
                    {s.label}
                  </p>
                  <p className={`text-base font-bold leading-tight ${s.color}`}>
                    {s.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="w-full" style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={finalStats.chartData}
                  margin={{ top: 5, right: 8, left: -10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor={chartFill}
                        stopOpacity={0.7}
                      />
                      <stop
                        offset="95%"
                        stopColor={chartFill}
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F0EFE8" />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 11, fill: "#9CA3AF" }}
                    tickLine={false}
                    axisLine={false}
                    label={{
                      value: "Jahre",
                      position: "insideBottomRight",
                      offset: -4,
                      fontSize: 11,
                      fill: "#9CA3AF",
                    }}
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: "#9CA3AF" }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={yTickFormatter}
                    width={chartMode === "eur" ? 70 : 50}
                  />
                  <Tooltip
                    content={(props) => (
                      <CustomTooltip {...props} chartMode={chartMode} />
                    )}
                  />
                  {chartMode === "eur" && (
                    <Area
                      type="monotone"
                      dataKey="invested"
                      stroke="#D1C97E"
                      strokeWidth={1.5}
                      strokeDasharray="4 3"
                      fill="none"
                      dot={false}
                      name="Eingezahlt"
                    />
                  )}
                  <Area
                    type="monotone"
                    dataKey={chartKey}
                    stroke={chartColor}
                    strokeWidth={2}
                    fill="url(#chartGrad)"
                    dot={false}
                    activeDot={{ r: 4, fill: chartColor, strokeWidth: 0 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            {chartMode === "eur" && (
              <div className="flex gap-4 mt-2 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-6 border-t-2 border-dashed border-[#D1C97E]" />
                  Eingezahlt
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-6 border-t-2 border-[#5A7A3A]" />
                  Gesamtwert
                </span>
              </div>
            )}

            {/* Disclaimer */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-[10px] font-semibold text-gray-600 mb-1">
                Risikohinweis Sparplanrechner
              </p>
              <p className="text-[10px] text-gray-400 leading-relaxed">
                Der Sparplan investiert in Wertpapiere. Diese bergen Risiken.
                Der Wert deiner Anlage kann schwanken. Vergangene
                Wertentwicklungen sind kein verlässlicher Hinweis auf zukünftige
                Ergebnisse. Die Berechnungen beruhen auf Annahmen. Dies ist
                keine Anlageberatung. Informiere dich gerne bei uns über die
                Details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
