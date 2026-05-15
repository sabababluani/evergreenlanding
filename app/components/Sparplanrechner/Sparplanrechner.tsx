"use client";

import { useState, useEffect, useCallback } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Strategy {
  name: string;
  returnRate: number;
  volatility: number;
  equityRatio: number;
  sustainability: number; // 1-5
  riskLevel: number; // 0-100
}

interface ChartDataPoint {
  year: number;
  value: number;
  pessimistic: number;
  optimistic: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const STRATEGIES: Strategy[] = [
  {
    name: "Evergreen Konservativ 30",
    returnRate: 0.039,
    volatility: 0.05,
    equityRatio: 30,
    sustainability: 3,
    riskLevel: 20,
  },
  {
    name: "Evergreen Ausgewogen 50",
    returnRate: 0.055,
    volatility: 0.08,
    equityRatio: 50,
    sustainability: 4,
    riskLevel: 50,
  },
  {
    name: "Evergreen Wachstum 80",
    returnRate: 0.072,
    volatility: 0.12,
    equityRatio: 80,
    sustainability: 5,
    riskLevel: 80,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatEuro(value: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatEuroShort(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)} Mio. €`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}.000 €`;
  return `${value.toFixed(0)} €`;
}

function computeProjection(
  initialDeposit: number,
  monthlyRate: number,
  years: number,
  annualReturn: number,
  volatility: number,
): ChartDataPoint[] {
  const data: ChartDataPoint[] = [];
  const monthlyReturn = annualReturn / 12;
  const monthlyReturnPessimistic = (annualReturn - volatility) / 12;
  const monthlyReturnOptimistic = (annualReturn + volatility) / 12;

  for (let y = 0; y <= years; y++) {
    const n = y * 12;

    const fv = (r: number) => {
      if (r === 0) return initialDeposit + monthlyRate * n;
      return (
        initialDeposit * Math.pow(1 + r, n) +
        monthlyRate * ((Math.pow(1 + r, n) - 1) / r)
      );
    };

    data.push({
      year: y,
      value: Math.round(fv(monthlyReturn)),
      pessimistic: Math.round(fv(monthlyReturnPessimistic)),
      optimistic: Math.round(fv(monthlyReturnOptimistic)),
    });
  }

  return data;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepBadge({ number }: { number: number }) {
  return (
    <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-sm font-bold text-amber-900 shrink-0">
      {number}
    </div>
  );
}

function NumberInput({
  value,
  onChange,
  min = 0,
  step = 100,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  step?: number;
}) {
  return (
    <div className="flex items-center border border-stone-200 rounded-xl bg-white overflow-hidden">
      <button
        onClick={() => onChange(Math.max(min, value - step))}
        className="px-4 py-3 text-stone-400 hover:text-stone-700 hover:bg-stone-50 transition-colors text-lg font-light select-none"
      >
        −
      </button>
      <div className="flex-1 flex items-center justify-center gap-1.5 border-x border-stone-100">
        <span className="text-sm font-semibold text-stone-800 tabular-nums">
          {value.toLocaleString("de-DE")}
        </span>
        <span className="text-xs text-stone-400">€</span>
      </div>
      <button
        onClick={() => onChange(value + step)}
        className="px-4 py-3 text-stone-400 hover:text-stone-700 hover:bg-stone-50 transition-colors text-lg font-light select-none"
      >
        +
      </button>
    </div>
  );
}

function SustainabilityDots({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-3.5 h-3.5 rounded-full border-2 transition-colors ${
            i < count
              ? "bg-emerald-500 border-emerald-500"
              : "bg-transparent border-stone-300"
          }`}
        />
      ))}
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-stone-900/95 backdrop-blur-sm text-white rounded-xl px-4 py-3 shadow-xl text-xs space-y-1">
        <p className="font-semibold text-stone-300 mb-2">Jahr {label}</p>
        {payload[2] && (
          <p className="text-emerald-300">
            Optimistisch: {formatEuro(payload[2].value)}
          </p>
        )}
        {payload[1] && (
          <p className="text-emerald-400 font-bold">
            Erwartet: {formatEuro(payload[1].value)}
          </p>
        )}
        {payload[0] && (
          <p className="text-stone-400">
            Pessimistisch: {formatEuro(payload[0].value)}
          </p>
        )}
      </div>
    );
  }
  return null;
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SparplanRechner() {
  const [initialDeposit, setInitialDeposit] = useState(10000);
  const [monthlyRate, setMonthlyRate] = useState(200);
  const [years, setYears] = useState(41);
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy>(
    STRATEGIES[2],
  );
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);

  const totalDeposited = initialDeposit + monthlyRate * years * 12;
  const finalValue = chartData[chartData.length - 1]?.value ?? 0;
  const expectedReturn = finalValue - totalDeposited;

  const recompute = useCallback(() => {
    const data = computeProjection(
      initialDeposit,
      monthlyRate,
      years,
      selectedStrategy.returnRate,
      selectedStrategy.volatility,
    );
    setChartData(data);
  }, [initialDeposit, monthlyRate, years, selectedStrategy]);

  useEffect(() => {
    recompute();
  }, [recompute]);

  // Y-axis ticks
  const maxValue = chartData[chartData.length - 1]?.optimistic ?? 0;
  const yTicks = [0, 1, 2, 3, 4].map((i) => Math.round((maxValue / 4) * i));

  // Thin out x-axis labels
  const xTicks = Array.from({ length: Math.ceil(years / 4) + 1 }, (_, i) =>
    Math.min(i * 4, years),
  );

  return (
    <div className="min-h-screen bg-[#fafaf7] flex flex-col items-center justify-center p-4 font-sans gap-10">
      {/* ── HEADING ── */}
      <div className="text-center space-y-4 max-w-xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase">
          Sparplanrechner
        </p>
        <h1 className="text-4xl md:text-5xl text-stone-800 leading-tight">
          So können sich <br />
          <span className="font-bold">deine Ersparnisse entwickeln</span>
        </h1>
        <p className="text-sm text-stone-500 leading-relaxed">
          Berechne die mögliche Wertentwicklung deines Sparplans. Wähle deine
          <br className="hidden md:block" /> Einzahlungen, Laufzeit sowie Risiko
          &amp; Ertrag.
        </p>
      </div>

      <div className="w-full max-w-6xl bg-[#fdf9f0] rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* ── LEFT PANEL ── */}
          <div className="p-6 md:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-stone-100">
            {/* Step 1 */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <StepBadge number={1} />
                <h2 className="text-base font-semibold text-stone-800">
                  Sparplan einrichten
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <p className="text-xs text-stone-500 font-medium">
                    Einmalige Einzahlung
                  </p>
                  <NumberInput
                    value={initialDeposit}
                    onChange={setInitialDeposit}
                    min={0}
                    step={500}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-stone-500 font-medium">
                    Monatlicher Sparplan
                  </p>
                  <NumberInput
                    value={monthlyRate}
                    onChange={setMonthlyRate}
                    min={0}
                    step={50}
                  />
                </div>
              </div>

              {/* Duration Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-xs text-stone-500 font-medium">Laufzeit</p>
                  <p className="text-sm font-bold text-stone-800">
                    {years} Jahre
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #1c2b1e ${((years - 1) / 49) * 100}%, #e7e5e4 ${((years - 1) / 49) * 100}%)`,
                    }}
                  />
                  <style>{`
                    input[type='range']::-webkit-slider-thumb {
                      appearance: none;
                      width: 20px;
                      height: 20px;
                      border-radius: 50%;
                      background: #1c2b1e;
                      cursor: pointer;
                      border: 3px solid white;
                      box-shadow: 0 1px 6px rgba(0,0,0,0.25);
                    }
                    input[type='range']::-moz-range-thumb {
                      width: 20px;
                      height: 20px;
                      border-radius: 50%;
                      background: #1c2b1e;
                      cursor: pointer;
                      border: 3px solid white;
                      box-shadow: 0 1px 6px rgba(0,0,0,0.25);
                    }
                    input[type='range']:focus { outline: none; }
                  `}</style>
                </div>
                <div className="flex justify-between text-xs text-stone-400">
                  <span>1 Jahr</span>
                  <span>50 Jahre</span>
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <StepBadge number={2} />
                <h2 className="text-base font-semibold text-stone-800">
                  Risiko &amp; Ertrag wählen
                </h2>
              </div>

              {/* Strategy Card */}
              <div className="border border-stone-200 rounded-2xl p-5 bg-white space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-stone-800">
                    {selectedStrategy.name}
                  </h3>
                  <div className="w-4 h-4 rounded-full border border-stone-300 flex items-center justify-center cursor-help text-[9px] text-stone-400">
                    i
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  <div>
                    <p className="text-[11px] text-stone-400 mb-1">
                      Ertragsziel p.a.
                    </p>
                    <p className="text-sm font-bold text-stone-800">
                      {(selectedStrategy.returnRate * 100)
                        .toFixed(1)
                        .replace(".", ",")}{" "}
                      %
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-stone-400 mb-1">
                      Schwankung
                    </p>
                    <p className="text-sm font-bold text-stone-800">
                      ±{(selectedStrategy.volatility * 100).toFixed(0)} %
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-stone-400 mb-1">
                      Aktienquote
                    </p>
                    <p className="text-sm font-bold text-stone-800">
                      {selectedStrategy.equityRatio} %
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-stone-400 mb-1">
                      Nachhaltigkeit
                    </p>
                    <SustainabilityDots
                      count={selectedStrategy.sustainability}
                    />
                  </div>
                </div>
              </div>

              {/* Risk Slider */}
              <div className="space-y-3">
                <p className="text-xs text-stone-500 font-medium">
                  Risiko &amp; Ertrag
                </p>
                <div className="relative">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={selectedStrategy.riskLevel}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      if (v < 33) setSelectedStrategy(STRATEGIES[0]);
                      else if (v < 66) setSelectedStrategy(STRATEGIES[1]);
                      else setSelectedStrategy(STRATEGIES[2]);
                    }}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #1c2b1e ${selectedStrategy.riskLevel}%, #e7e5e4 ${selectedStrategy.riskLevel}%)`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-stone-400">
                  <span>Niedrig</span>
                  <span>Ausgewogen</span>
                  <span className="font-semibold text-stone-700">Hoch</span>
                </div>
              </div>

              <p className="text-[11px] text-stone-400 leading-relaxed">
                Die angezeigten Strategien sind Beispiele und keine
                Anlageempfehlung.
              </p>
            </section>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="p-6 md:p-10 space-y-6">
            {/* Header Value */}
            <div className="space-y-1">
              <p className="text-xs text-stone-500 flex items-center gap-1.5">
                Wert nach {years} Jahren
                <span className="w-4 h-4 rounded-full border border-stone-300 inline-flex items-center justify-center text-[9px] text-stone-400 cursor-help">
                  i
                </span>
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight tabular-nums">
                  {formatEuro(finalValue)}
                </span>
                <span className="text-sm font-semibold text-emerald-600 flex items-center gap-0.5">
                  ▲{" "}
                  {(selectedStrategy.returnRate * 100)
                    .toFixed(2)
                    .replace(".", ",")}{" "}
                  % p.a.
                </span>
              </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white rounded-2xl border border-stone-100 p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-stone-900 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-stone-800">
                  Wertentwicklung
                </h3>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-3 pb-3 border-b border-stone-100">
                <div>
                  <p className="text-[11px] text-stone-400 mb-1">
                    Du hast eingezahlt:
                  </p>
                  <p className="text-sm font-bold text-stone-800">
                    {formatEuro(totalDeposited)}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-stone-400 mb-1">
                    Erwarteter Ertrag:
                  </p>
                  <p className="text-sm font-bold text-emerald-600">
                    +{formatEuro(Math.max(0, expectedReturn))}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-stone-400 mb-1 flex items-center gap-1">
                    Wertschwankung:
                    <span className="w-3 h-3 rounded-full border border-stone-300 inline-flex items-center justify-center text-[8px] text-stone-400 cursor-help">
                      i
                    </span>
                  </p>
                  <p className="text-sm font-bold text-stone-800">
                    ±{(selectedStrategy.volatility * 100).toFixed(0)} %
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-stone-400 mb-1 flex items-center gap-1">
                    Konfidenz:
                    <span className="w-3 h-3 rounded-full border border-stone-300 inline-flex items-center justify-center text-[8px] text-stone-400 cursor-help">
                      i
                    </span>
                  </p>
                  <p className="text-sm font-bold text-stone-800">95 %</p>
                </div>
              </div>

              {/* Recharts Area Chart */}
              <div className="h-52 md:h-64 -mx-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="gradOptimistic"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#86efac"
                          stopOpacity={0.25}
                        />
                        <stop
                          offset="95%"
                          stopColor="#86efac"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient id="gradMain" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#4ade80"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#4ade80"
                          stopOpacity={0.02}
                        />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#f0ede8"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="year"
                      ticks={xTicks}
                      tick={{ fontSize: 11, fill: "#a8a29e" }}
                      axisLine={false}
                      tickLine={false}
                      label={{
                        value: "Jahre",
                        position: "insideBottomRight",
                        offset: -4,
                        fontSize: 11,
                        fill: "#a8a29e",
                      }}
                    />

                    <YAxis
                      ticks={yTicks}
                      tickFormatter={formatEuroShort}
                      tick={{ fontSize: 10, fill: "#a8a29e" }}
                      axisLine={false}
                      tickLine={false}
                      width={72}
                    />

                    <Tooltip content={<CustomTooltip />} />

                    {/* Pessimistic band (bottom) */}
                    <Area
                      type="monotone"
                      dataKey="pessimistic"
                      stroke="none"
                      fill="url(#gradOptimistic)"
                      fillOpacity={1}
                      dot={false}
                      activeDot={false}
                      isAnimationActive={true}
                      animationDuration={600}
                    />

                    {/* Main expected value */}
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#22c55e"
                      strokeWidth={2.5}
                      fill="url(#gradMain)"
                      dot={false}
                      activeDot={{
                        r: 5,
                        fill: "#22c55e",
                        stroke: "white",
                        strokeWidth: 2,
                      }}
                      isAnimationActive={true}
                      animationDuration={600}
                    />

                    {/* Optimistic band (top) */}
                    <Area
                      type="monotone"
                      dataKey="optimistic"
                      stroke="#86efac"
                      strokeWidth={1}
                      strokeDasharray="4 3"
                      fill="none"
                      dot={false}
                      activeDot={false}
                      isAnimationActive={true}
                      animationDuration={600}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="space-y-2">
              <p className="text-[11px] font-semibold text-stone-600">
                Risikohinweis Sparplanrechner
              </p>
              <p className="text-[11px] text-stone-400 leading-relaxed">
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
