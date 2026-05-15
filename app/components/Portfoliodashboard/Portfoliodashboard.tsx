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

// ─── Types ──────────────────────────────────────────────────────────────────

type Strategy = "Komfort" | "Balance" | "Wachstum";
type TimeRange = "1Jahr" | "3Jahre" | "5Jahre" | "Max";
type DisplayMode = "euro" | "prozent";

interface DataPoint {
  date: string;
  value: number;
  percent: number;
}

// ─── Mock API ────────────────────────────────────────────────────────────────

const EQUITY_RATIOS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const AMOUNT_OPTIONS = [100, 500, 1000, 5000, 10000, 25000, 50000, 100000];

function generateChartData(
  months: number,
  startValue: number,
  volatility: number,
  trend: number,
): DataPoint[] {
  const data: DataPoint[] = [];
  let val = startValue;
  const now = new Date(2026, 4, 1); // May 2026

  for (let i = months; i >= 0; i--) {
    const d = new Date(now);
    d.setMonth(d.getMonth() - i);
    const label = d.toLocaleDateString("de-DE", {
      month: "short",
      year: "2-digit",
    });
    const noise = (Math.random() - 0.48) * volatility;
    val = Math.max(startValue * 0.8, val * (1 + trend + noise));
    data.push({
      date: label,
      value: Math.round(val),
      percent: Math.round(((val - startValue) / startValue) * 10000) / 100,
    });
  }
  return data;
}

async function fetchPortfolioData(
  strategy: Strategy,
  equityRatio: number,
  amount: number,
  range: TimeRange,
): Promise<{ data: DataPoint[]; stats: ReturnType<typeof computeStats> }> {
  await new Promise((r) => setTimeout(r, 300));

  const monthsMap: Record<TimeRange, number> = {
    "1Jahr": 12,
    "3Jahre": 36,
    "5Jahre": 60,
    Max: 40,
  };
  const months = monthsMap[range];

  const trendMap: Record<Strategy, number> = {
    Komfort: 0.0018,
    Balance: 0.0028,
    Wachstum: 0.004,
  };
  const volMap: Record<Strategy, number> = {
    Komfort: 0.008,
    Balance: 0.014,
    Wachstum: 0.022,
  };

  const equityBoost = (equityRatio - 50) * 0.00003;
  const data = generateChartData(
    months,
    amount,
    volMap[strategy],
    trendMap[strategy] + equityBoost,
  );

  return { data, stats: computeStats(data, amount, strategy, equityRatio) };
}

function computeStats(
  data: DataPoint[],
  amount: number,
  strategy: Strategy,
  equityRatio: number,
) {
  const last = data[data.length - 1];
  const gain = last.value - amount;
  const gainPct = last.percent;

  const riskMap: Record<Strategy, string> = {
    Komfort: "2 von 7",
    Balance: "3 von 7",
    Wachstum: "5 von 7",
  };
  const riskLabelMap: Record<Strategy, string> = {
    Komfort: "Niedrig",
    Balance: "Niedrig bis mittlere Schwankung",
    Wachstum: "Mittlere bis hohe Schwankung",
  };
  const riskLevel = parseInt(riskMap[strategy].split(" ")[0]);

  const bonds = Math.max(5, 100 - equityRatio - 15);
  const cash = 100 - equityRatio - bonds;

  const sustainMap: Record<Strategy, number> = {
    Komfort: 3,
    Balance: 4,
    Wachstum: 4,
  };

  return {
    gain,
    gainPct,
    annualReturn: (gainPct / (data.length / 12)).toFixed(2),
    riskLevel,
    riskLabel: riskLabelMap[strategy],
    equityPct: equityRatio,
    bondsPct: bonds,
    cashPct: cash,
    sustainScore: sustainMap[strategy],
    articleClass: "Artikel 8 + 9",
  };
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function StrategyButton({
  label,
  sub,
  active,
  onClick,
}: {
  label: Strategy;
  sub: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
        active
          ? "border-amber-500 bg-white shadow-md"
          : "border-transparent bg-white/60 hover:bg-white/80"
      }`}
    >
      <p
        className={`text-sm font-semibold ${active ? "text-amber-600" : "text-stone-700"}`}
      >
        {label}
      </p>
      <p className="text-xs text-stone-400 mt-0.5">{sub}</p>
    </button>
  );
}

function RiskBar({ level }: { level: number }) {
  return (
    <div className="flex gap-1 mt-1">
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
            i < level ? "bg-amber-500" : "bg-stone-200"
          }`}
        />
      ))}
    </div>
  );
}

function DonutChart({
  equity,
  bonds,
  cash,
}: {
  equity: number;
  bonds: number;
  cash: number;
}) {
  const r = 28;
  const cx = 36;
  const cy = 36;
  const circ = 2 * Math.PI * r;
  const slices = [
    { pct: equity, color: "#1c1917" },
    { pct: bonds, color: "#d97706" },
    { pct: cash, color: "#e5e7eb" },
  ];
  let offset = 0;
  return (
    <svg width="72" height="72" viewBox="0 0 72 72">
      {slices.map((s, i) => {
        const dash = (s.pct / 100) * circ;
        const el = (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth="10"
            strokeDasharray={`${dash} ${circ - dash}`}
            strokeDashoffset={-offset + circ * 0.25}
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "36px 36px",
            }}
          />
        );
        offset += dash;
        return el;
      })}
    </svg>
  );
}

function SustainDots({ score }: { score: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-4 h-4 rounded-full border-2 ${
            i < score
              ? "bg-amber-500 border-amber-500"
              : "bg-transparent border-stone-300"
          }`}
        />
      ))}
    </div>
  );
}

const CustomTooltip = ({
  active,
  payload,
  label,
  mode,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
  mode: DisplayMode;
}) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-stone-200 rounded-lg px-3 py-2 shadow-lg text-sm">
      <p className="text-stone-500 text-xs">{label}</p>
      <p className="font-bold text-stone-800">
        {mode === "euro"
          ? `${payload[0].value.toLocaleString("de-DE")} €`
          : `${payload[0].value > 0 ? "+" : ""}${payload[0].value}%`}
      </p>
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────

export default function PortfolioDashboard() {
  const [strategy, setStrategy] = useState<Strategy>("Balance");
  const [equityRatio, setEquityRatio] = useState(50);
  const [amount, setAmount] = useState(10000);
  const [timeRange, setTimeRange] = useState<TimeRange>("Max");
  const [displayMode, setDisplayMode] = useState<DisplayMode>("euro");
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState<DataPoint[]>([]);
  const [stats, setStats] = useState<ReturnType<typeof computeStats> | null>(
    null,
  );

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetchPortfolioData(
        strategy,
        equityRatio,
        amount,
        timeRange,
      );
      setChartData(res.data);
      setStats(res.stats);
    } finally {
      setLoading(false);
    }
  }, [strategy, equityRatio, amount, timeRange]);

  useEffect(() => {
    load();
  }, [load]);

  const chartValues = chartData.map((d) => ({
    ...d,
    display: displayMode === "euro" ? d.value : d.percent,
  }));

  const yDomain =
    displayMode === "euro"
      ? ["auto" as const, "auto" as const]
      : ["auto" as const, "auto" as const];

  const formatY = (v: number) =>
    displayMode === "euro"
      ? `${(v / 1000).toFixed(0)}k €`
      : `${v > 0 ? "+" : ""}${v}%`;

  const gainPositive = (stats?.gain ?? 0) >= 0;

  return (
    <div className="min-h-screen bg-[#faf8f4] font-sans">
      {/* ── Hero Heading ── */}
      <div className="bg-[#fdf8ee] border-b border-amber-100/60 px-4 py-12 md:py-16 text-center">
        <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-4">
          Wertentwicklung unserer Strategien
        </p>
        <h1 className="text-3xl md:text-5xl font-serif text-stone-800 leading-tight max-w-xl mx-auto">
          Wähle deine Strategie,{" "}
          <em className="font-bold not-italic text-stone-900">
            verfolge
            <br />
            dein Wachstum
          </em>
        </h1>
        <p className="mt-4 text-sm md:text-base text-stone-400 max-w-md mx-auto leading-relaxed">
          Hier siehst du, wie sich die Strategien seit Start entwickelt haben.
        </p>
      </div>

      <div className="p-4 md:p-8">
        <div className="max-w-5xl mx-auto space-y-5">
          {/* Strategy Selector */}
          <div className="flex gap-2 bg-stone-100 p-1.5 rounded-2xl">
            {(
              [
                { label: "Komfort" as Strategy, sub: "Stabil & defensiv" },
                { label: "Balance" as Strategy, sub: "Ausgewogen" },
                { label: "Wachstum" as Strategy, sub: "Renditesstark" },
              ] as const
            ).map((s) => (
              <StrategyButton
                key={s.label}
                label={s.label}
                sub={s.sub}
                active={strategy === s.label}
                onClick={() => setStrategy(s.label)}
              />
            ))}
          </div>

          {/* Equity Slider */}
          <div className="bg-white rounded-2xl px-5 py-4 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                Aktienquote wählen
              </span>
              <span className="text-xs font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded-full">
                Aktienquote = {equityRatio}%
              </span>
            </div>
            <div className="relative">
              {/* Dots row */}
              <div className="flex justify-between mb-2">
                {EQUITY_RATIOS.map((r) => (
                  <button
                    key={r}
                    onClick={() => setEquityRatio(r)}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div
                      className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                        equityRatio === r
                          ? "bg-amber-500 border-amber-500 scale-125"
                          : "bg-white border-stone-300 group-hover:border-amber-400"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {/* Track line */}
              <div className="relative h-1 bg-stone-200 rounded-full mx-1.5 mb-2">
                <div
                  className="absolute h-full bg-amber-500 rounded-full transition-all duration-300"
                  style={{
                    width: `${(EQUITY_RATIOS.indexOf(equityRatio) / (EQUITY_RATIOS.length - 1)) * 100}%`,
                  }}
                />
              </div>
              <div className="flex justify-between">
                {EQUITY_RATIOS.map((r) => (
                  <span
                    key={r}
                    className="text-[10px] text-stone-400 w-7 text-center"
                  >
                    {r}%
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Amount Selector */}
          <div className="bg-white rounded-2xl px-5 py-4 shadow-sm">
            <p className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-3">
              Betrag wählen
            </p>
            <div className="flex flex-wrap gap-2">
              {AMOUNT_OPTIONS.map((a) => (
                <button
                  key={a}
                  onClick={() => setAmount(a)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-150 ${
                    amount === a
                      ? "bg-stone-900 text-white border-stone-900"
                      : "bg-white text-stone-600 border-stone-200 hover:border-amber-400"
                  }`}
                >
                  {a.toLocaleString("de-DE")} €
                </button>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Wertzuwachs */}
            <div className="bg-white rounded-2xl p-4 shadow-sm col-span-2 md:col-span-1">
              <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest mb-2">
                Wertzuwachs
              </p>
              {loading || !stats ? (
                <div className="h-8 bg-stone-100 rounded animate-pulse" />
              ) : (
                <>
                  <p
                    className={`text-2xl font-bold tracking-tight ${gainPositive ? "text-emerald-600" : "text-red-500"}`}
                  >
                    {gainPositive ? "+" : ""}
                    {stats.gain.toLocaleString("de-DE")} €
                  </p>
                  <p className="text-xs text-stone-400 mt-1">
                    +{stats.annualReturn}% pro Jahr
                  </p>
                  <p className="text-[10px] text-stone-300 mt-0.5">
                    Seit Start (Dez. 2022)
                  </p>
                </>
              )}
            </div>

            {/* Risikostufe */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest mb-2">
                Risikostufe
              </p>
              {loading || !stats ? (
                <div className="h-8 bg-stone-100 rounded animate-pulse" />
              ) : (
                <>
                  <p className="text-lg font-bold text-stone-800">
                    {stats.riskLevel} von 7
                  </p>
                  <RiskBar level={stats.riskLevel} />
                  <p className="text-[10px] text-stone-400 mt-1.5">
                    {stats.riskLabel}
                  </p>
                </>
              )}
            </div>

            {/* Bestandteile */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest mb-2">
                Bestandteile
              </p>
              {loading || !stats ? (
                <div className="h-16 bg-stone-100 rounded animate-pulse" />
              ) : (
                <div className="flex items-center gap-3">
                  <DonutChart
                    equity={stats.equityPct}
                    bonds={stats.bondsPct}
                    cash={stats.cashPct}
                  />
                  <div className="text-xs space-y-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-stone-800" />
                      <span className="text-stone-600">
                        Aktien {stats.equityPct}%
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="text-stone-600">
                        Anleihen {stats.bondsPct}%
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-stone-200" />
                      <span className="text-stone-600">
                        Kasse {stats.cashPct}%
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Nachhaltigkeit */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-100">
              <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest mb-2">
                Nachhaltigkeit
              </p>
              {loading || !stats ? (
                <div className="h-8 bg-stone-100 rounded animate-pulse" />
              ) : (
                <>
                  <SustainDots score={stats.sustainScore} />
                  <p className="text-xs font-semibold text-stone-700 mt-2">
                    {stats.articleClass}
                  </p>
                  <p className="text-[10px] text-stone-400">
                    Über EU-Durchschnitt
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            {/* Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              {/* Time range */}
              <div className="flex gap-1 bg-stone-100 p-1 rounded-xl">
                {(["1Jahr", "3Jahre", "5Jahre", "Max"] as TimeRange[]).map(
                  (t) => (
                    <button
                      key={t}
                      onClick={() => setTimeRange(t)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-150 ${
                        timeRange === t
                          ? "bg-stone-900 text-white shadow"
                          : "text-stone-500 hover:text-stone-800"
                      }`}
                    >
                      {t === "1Jahr"
                        ? "1 Jahr"
                        : t === "3Jahre"
                          ? "3 Jahre"
                          : t === "5Jahre"
                            ? "5 Jahre"
                            : "Max"}
                    </button>
                  ),
                )}
              </div>

              {/* Display mode */}
              <div className="flex gap-1 bg-stone-100 p-1 rounded-xl">
                <button
                  onClick={() => setDisplayMode("euro")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    displayMode === "euro"
                      ? "bg-stone-900 text-white shadow"
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  Euro-Betrag
                </button>
                <button
                  onClick={() => setDisplayMode("prozent")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    displayMode === "prozent"
                      ? "bg-stone-900 text-white shadow"
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  Prozent
                </button>
              </div>
            </div>

            {/* Recharts */}
            {loading ? (
              <div className="h-64 bg-stone-50 rounded-xl animate-pulse flex items-center justify-center">
                <p className="text-stone-300 text-sm">Lade Daten…</p>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart
                  data={chartValues}
                  margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="portfolioGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#84cc16"
                        stopOpacity={0.25}
                      />
                      <stop
                        offset="95%"
                        stopColor="#84cc16"
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
                    dataKey="date"
                    tick={{ fontSize: 10, fill: "#a8a29e" }}
                    axisLine={false}
                    tickLine={false}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    tickFormatter={formatY}
                    tick={{ fontSize: 10, fill: "#a8a29e" }}
                    axisLine={false}
                    tickLine={false}
                    width={52}
                    domain={yDomain}
                  />
                  <Tooltip
                    content={<CustomTooltip mode={displayMode} />}
                    cursor={{
                      stroke: "#d97706",
                      strokeWidth: 1,
                      strokeDasharray: "4 4",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="display"
                    stroke="#65a30d"
                    strokeWidth={2}
                    fill="url(#portfolioGrad)"
                    dot={false}
                    activeDot={{
                      r: 4,
                      fill: "#65a30d",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}

            {/* Legend */}
            <div className="flex items-center gap-2 mt-3">
              <div className="w-6 h-0.5 bg-lime-600 rounded" />
              <span className="text-xs text-stone-500">
                Evergreen {strategy} {equityRatio}
              </span>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-[10px] text-stone-400 text-center pb-4">
            Vergangene Wertentwicklungen sind kein verlässlicher Indikator für
            die Zukunft.
          </p>
        </div>
      </div>
    </div>
  );
}
