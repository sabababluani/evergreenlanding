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
  ReferenceLine,
} from "recharts";

// ─── Types ────────────────────────────────────────────────────────────────────

type TimeRange = "1M" | "3M" | "6M" | "1Y" | "3Y" | "10Y" | "Max";
type DisplayMode = "percent" | "euro";

interface DataPoint {
  date: string;
  value: number; // always stored as percentage index (100 = start)
  euroValue: number; // euro value if invested 1 000 € at start
}

// ─── Alpha Vantage / fallback data ────────────────────────────────────────────
// We try Alpha Vantage's free demo endpoint. On failure we generate realistic
// synthetic data so the component always renders something useful.

const ALPHA_VANTAGE_KEY = "demo"; // replace with your key for live data
const SYMBOL = "URTH"; // iShares MSCI World – closest freely available proxy

async function fetchAlphaVantage(range: TimeRange): Promise<DataPoint[]> {
  const outputSize = ["1M", "3M", "6M"].includes(range) ? "compact" : "full";
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${SYMBOL}&outputsize=${outputSize}&apikey=${ALPHA_VANTAGE_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Network error");
  const json = await res.json();

  const series = json["Time Series (Daily)"];
  if (!series) throw new Error("No data");

  const cutoff = rangeCutoff(range);
  const entries = Object.entries(
    series as Record<string, Record<string, string>>,
  )
    .filter(([d]) => new Date(d) >= cutoff)
    .sort(([a], [b]) => a.localeCompare(b));

  if (entries.length === 0) throw new Error("Empty");

  const baseClose = parseFloat(entries[0][1]["5. adjusted close"]);
  const baseEuro = 1000;

  return entries.map(([date, vals]) => {
    const close = parseFloat(vals["5. adjusted close"]);
    const pct = ((close - baseClose) / baseClose) * 100 + 100;
    return {
      date: formatDateLabel(date, range),
      value: pct,
      euroValue: (close / baseClose) * baseEuro,
    };
  });
}

function rangeCutoff(range: TimeRange): Date {
  const now = new Date();
  const map: Record<TimeRange, () => Date> = {
    "1M": () => new Date(now.getFullYear(), now.getMonth() - 1, now.getDate()),
    "3M": () => new Date(now.getFullYear(), now.getMonth() - 3, now.getDate()),
    "6M": () => new Date(now.getFullYear(), now.getMonth() - 6, now.getDate()),
    "1Y": () => new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
    "3Y": () => new Date(now.getFullYear() - 3, now.getMonth(), now.getDate()),
    "10Y": () =>
      new Date(now.getFullYear() - 10, now.getMonth(), now.getDate()),
    Max: () => new Date("2010-01-01"),
  };
  return map[range]();
}

function formatDateLabel(iso: string, range: TimeRange): string {
  const d = new Date(iso);
  if (["1M", "3M"].includes(range))
    return d.toLocaleDateString("de-DE", { day: "2-digit", month: "short" });
  if (range === "6M")
    return d.toLocaleDateString("de-DE", { month: "short", year: "2-digit" });
  return d.toLocaleDateString("de-DE", { month: "short", year: "2-digit" });
}

// ── Synthetic fallback ─────────────────────────────────────────────────────────

function generateSyntheticData(range: TimeRange): DataPoint[] {
  const points = {
    "1M": 22,
    "3M": 65,
    "6M": 130,
    "1Y": 252,
    "3Y": 756,
    "10Y": 2520,
    Max: 3500,
  };
  const n = points[range];
  const data: DataPoint[] = [];
  let price = 100;
  const drift = 0.00045;
  const vol = 0.011;
  const cutoff = rangeCutoff(range);
  const now = new Date();
  const step = (now.getTime() - cutoff.getTime()) / n;

  for (let i = 0; i <= n; i++) {
    const dateObj = new Date(cutoff.getTime() + i * step);
    const shock = (Math.random() - 0.49) * vol * 2;
    price = price * Math.exp(drift + shock);
    data.push({
      date: formatDateLabel(dateObj.toISOString().slice(0, 10), range),
      value: (price / 100) * 100,
      euroValue: (price / 100) * 1000,
    });
  }

  // Normalise so first = 100
  const base = data[0].value;
  return data.map((d) => ({
    ...d,
    value: (d.value / base) * 100,
    euroValue: (d.euroValue / (base / 100)) * 10,
  }));
}

// ─── Custom Tooltip ───────────────────────────────────────────────────────────

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
  const val = payload[0].value;
  const display =
    mode === "percent" ? `${(val - 100).toFixed(2)} %` : `${val.toFixed(2)} €`;

  return (
    <div className="bg-[#1a2e1a]/90 backdrop-blur-sm border border-[#4a7c59]/40 rounded-lg px-3 py-2 shadow-xl">
      <p className="text-[#a8c5a0] text-xs font-medium mb-0.5">{label}</p>
      <p className="text-[#6dbf7a] text-sm font-bold">{display}</p>
    </div>
  );
};

// ─── Leaf SVG icon ─────────────────────────────────────────────────────────────

const LeafIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2C8 5 6 11 6 11s1-2 3-3c-1 4.8 1 7.9 5 9C17 8 17 8 17 8z" />
  </svg>
);

// ─── Sustainability dots ────────────────────────────────────────────────────────

const SustainabilityDots = ({ level = 5 }: { level?: number }) => (
  <div className="flex gap-1 mb-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <LeafIcon
        key={i}
        className={`w-4 h-4 ${i < level ? "text-[#6dbf7a]" : "text-[#2a4a2a]"}`}
      />
    ))}
  </div>
);

// ─── Risk bar ──────────────────────────────────────────────────────────────────

const RiskBar = ({ level = 4, max = 7 }: { level?: number; max?: number }) => (
  <div className="flex gap-1 mt-2">
    {Array.from({ length: max }).map((_, i) => (
      <div
        key={i}
        className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
          i < level ? "bg-[#6dbf7a]" : "bg-[#2a4a2a]"
        }`}
      />
    ))}
  </div>
);

// ─── Main component ────────────────────────────────────────────────────────────

export default function EvergreenFundCard() {
  const [activeRange, setActiveRange] = useState<TimeRange>("3Y");
  const [displayMode, setDisplayMode] = useState<DisplayMode>("percent");
  const [chartData, setChartData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const ranges: TimeRange[] = ["1M", "3M", "6M", "1Y", "3Y", "10Y", "Max"];
  const rangeLabels: Record<TimeRange, string> = {
    "1M": "1 Monat",
    "3M": "3 Monate",
    "6M": "6 Monate",
    "1Y": "1 Jahr",
    "3Y": "3 Jahre",
    "10Y": "10 Jahre",
    Max: "Max",
  };

  const loadData = useCallback(async (range: TimeRange) => {
    setLoading(true);
    setError(false);
    try {
      const data = await fetchAlphaVantage(range);
      setChartData(data);
    } catch {
      // Fallback to synthetic data
      setChartData(generateSyntheticData(range));
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData(activeRange);
  }, [activeRange, loadData]);

  // Derived stats
  const first = chartData[0]?.value ?? 100;
  const last = chartData[chartData.length - 1]?.value ?? 100;
  const totalPct = last - first; // relative to 100 base
  const totalPctDisplay =
    totalPct >= 0 ? `+${totalPct.toFixed(2)}` : totalPct.toFixed(2);
  const years = {
    "1M": 1 / 12,
    "3M": 3 / 12,
    "6M": 0.5,
    "1Y": 1,
    "3Y": 3,
    "10Y": 10,
    Max: 13,
  }[activeRange];
  const annualPct = (Math.pow(last / 100, 1 / years) - 1) * 100;
  const annualDisplay =
    annualPct >= 0 ? `+${annualPct.toFixed(2)}` : annualPct.toFixed(2);

  // Y-axis domain
  const values = chartData.map((d) =>
    displayMode === "percent" ? d.value : d.euroValue,
  );
  const minV = Math.min(...values);
  const maxV = Math.max(...values);
  const pad = (maxV - minV) * 0.08;
  const yMin = Math.floor(minV - pad);
  const yMax = Math.ceil(maxV + pad);

  const formatY = (v: number) =>
    displayMode === "percent"
      ? `${(v - 100).toFixed(0)} %`
      : `${v.toFixed(0)} €`;

  // Reduce tick density on small screen
  const tickCount = 6;

  const gradientId = "evergreenGradient";

  return (
    <div className="min-h-screen bg-[#ffeec2] flex items-center justify-center p-4 font-sans">
      {/* Card */}
      <div className="w-full max-w-5xl bg-[#f5f0e8] rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-[#f5f0e8] px-6 pt-6 pb-4 border-b border-[#e0d8cc]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1a3a1a] flex items-center justify-center shrink-0 shadow-md">
              <LeafIcon className="w-6 h-6 text-[#6dbf7a]" />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-bold text-[#1a2e1a] leading-tight">
                Evergreen Sustainable World Stocks
              </h1>
              <p className="text-xs text-[#5a7a5a] mt-0.5">
                Globaler nachhaltiger Aktienfonds · Höchste
                EU-Nachhaltigkeitsstufe
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs bg-[#e8e0d0] text-[#4a6a4a] px-2 py-0.5 rounded-md font-mono border border-[#d0c8b8]">
                  ISIN: DE000A3DQ222
                </span>
                <span className="text-xs bg-[#ddf0dd] text-[#2a6a2a] px-2 py-0.5 rounded-md border border-[#b8ddb8]">
                  ✓ SFDR Art. 9
                </span>
                {error && (
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-md border border-amber-200">
                    ⚠ Simulierte Daten
                  </span>
                )}
              </div>
            </div>
          </div>
          <p className="text-xs text-[#3a6a3a] mt-3 leading-relaxed">
            Dieser Fonds investiert weltweit in Unternehmen, die besonders wenig
            CO₂ ausstoßen. Dein Geld arbeitet also global – und gleichzeitig im
            Sinne des{" "}
            <span className="underline decoration-dotted">Klimaschutzes</span>.
            Branchen wie Waffen, Kohle und Öl sind ausgeschlossen.
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row">
          {/* Left sidebar */}
          <div className="lg:w-56 bg-[#f0ebe0] border-b lg:border-b-0 lg:border-r border-[#e0d8cc] flex flex-row lg:flex-col flex-wrap gap-px">
            {/* Wertzuwachs */}
            <div className="flex-1 lg:flex-none p-5 border-b border-[#e0d8cc]">
              <p className="text-[10px] tracking-widest text-[#8a9a8a] font-semibold uppercase mb-2">
                Wertzuwachs ⓘ
              </p>
              {loading ? (
                <div className="h-8 w-24 bg-[#e0d8cc] animate-pulse rounded" />
              ) : (
                <>
                  <p
                    className={`text-2xl sm:text-3xl font-black tracking-tight ${
                      totalPct >= 0 ? "text-[#2a7a2a]" : "text-red-600"
                    }`}
                  >
                    {totalPctDisplay} %
                  </p>
                  <p className="text-xs text-[#4a7a4a] font-medium mt-1">
                    {annualDisplay} % pro Jahr
                  </p>
                  <p className="text-[10px] text-[#8a9a8a] mt-0.5">
                    Seit Start (Dez. 2022)
                  </p>
                </>
              )}
            </div>

            {/* Risikostufe */}
            <div className="flex-1 lg:flex-none p-5 border-b border-[#e0d8cc]">
              <p className="text-[10px] tracking-widest text-[#8a9a8a] font-semibold uppercase mb-2">
                Risikostufe ⓘ
              </p>
              <p className="text-xl font-bold text-[#1a2e1a]">4 von 7</p>
              <RiskBar level={4} max={7} />
              <p className="text-[10px] text-[#8a9a8a] mt-2">
                Mittlere Schwankung
              </p>
            </div>

            {/* Bestandteile */}
            <div className="flex-1 lg:flex-none p-5 border-b border-[#e0d8cc]">
              <p className="text-[10px] tracking-widest text-[#8a9a8a] font-semibold uppercase mb-3">
                Bestandteile ⓘ
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <svg viewBox="0 0 36 36" className="w-10 h-10 -rotate-90">
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#e0d8cc"
                      strokeWidth="4"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#2a7a2a"
                      strokeWidth="4"
                      strokeDasharray="88 0"
                    />
                  </svg>
                </div>
                <div className="text-xs space-y-0.5">
                  <p className="text-[#2a7a2a] font-semibold">● Aktien 100 %</p>
                  <p className="text-[#8a9a8a]">● Anleihen 0 %</p>
                  <p className="text-[#8a9a8a]">● Kasse 0 %</p>
                </div>
              </div>
            </div>

            {/* Nachhaltigkeit */}
            <div className="flex-1 lg:flex-none p-5">
              <p className="text-[10px] tracking-widest text-[#8a9a8a] font-semibold uppercase mb-2">
                Nachhaltigkeit ⓘ
              </p>
              <SustainabilityDots level={5} />
              <p className="text-sm font-bold text-[#2a7a2a]">Artikel 9</p>
              <p className="text-[10px] text-[#8a9a8a] mt-0.5">
                Höchste EU-Stufe
              </p>
            </div>
          </div>

          {/* Chart area */}
          <div className="flex-1 p-4 sm:p-6">
            {/* Controls row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              {/* Time range tabs */}
              <div className="flex flex-wrap gap-1">
                {ranges.map((r) => (
                  <button
                    key={r}
                    onClick={() => setActiveRange(r)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      activeRange === r
                        ? "bg-[#1a3a1a] text-[#a8c5a0] shadow-sm"
                        : "text-[#6a8a6a] hover:bg-[#e0d8cc]"
                    }`}
                  >
                    {rangeLabels[r]}
                  </button>
                ))}
              </div>

              {/* Display mode toggle */}
              <div className="flex rounded-lg overflow-hidden border border-[#c0b8a8] shrink-0">
                <button
                  onClick={() => setDisplayMode("euro")}
                  className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                    displayMode === "euro"
                      ? "bg-[#1a3a1a] text-[#a8c5a0]"
                      : "bg-transparent text-[#6a8a6a] hover:bg-[#e8e0d0]"
                  }`}
                >
                  Euro-Betrag
                </button>
                <button
                  onClick={() => setDisplayMode("percent")}
                  className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                    displayMode === "percent"
                      ? "bg-[#1a3a1a] text-[#a8c5a0]"
                      : "bg-transparent text-[#6a8a6a] hover:bg-[#e8e0d0]"
                  }`}
                >
                  Prozent
                </button>
              </div>
            </div>

            {/* Chart */}
            <div className="h-56 sm:h-72 lg:h-80">
              {loading ? (
                <div className="w-full h-full bg-[#e8e0d0] animate-pulse rounded-xl flex items-center justify-center">
                  <span className="text-[#8a9a8a] text-sm">Lade Daten…</span>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 8, right: 4, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id={gradientId}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#4a9a5a"
                          stopOpacity={0.35}
                        />
                        <stop
                          offset="95%"
                          stopColor="#4a9a5a"
                          stopOpacity={0.02}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#d8d0c0"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 10, fill: "#8a9a8a" }}
                      tickLine={false}
                      axisLine={false}
                      interval="preserveStartEnd"
                      tickCount={tickCount}
                    />
                    <YAxis
                      tickFormatter={formatY}
                      tick={{ fontSize: 10, fill: "#8a9a8a" }}
                      tickLine={false}
                      axisLine={false}
                      domain={[yMin, yMax]}
                      width={64}
                    />
                    <Tooltip
                      content={<CustomTooltip mode={displayMode} />}
                      cursor={{
                        stroke: "#4a9a5a",
                        strokeWidth: 1,
                        strokeDasharray: "4 2",
                      }}
                    />
                    {displayMode === "percent" && (
                      <ReferenceLine
                        y={100}
                        stroke="#c0b8a8"
                        strokeDasharray="4 2"
                      />
                    )}
                    <Area
                      type="monotone"
                      dataKey={
                        displayMode === "percent" ? "value" : "euroValue"
                      }
                      stroke="#4a9a5a"
                      strokeWidth={2}
                      fill={`url(#${gradientId})`}
                      dot={false}
                      activeDot={{
                        r: 4,
                        fill: "#4a9a5a",
                        stroke: "#f5f0e8",
                        strokeWidth: 2,
                      }}
                      animationDuration={600}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-[#4a9a5a]" />
                <span className="text-[10px] text-[#4a7a4a] font-medium">
                  Evergreen Sustainable World Stocks
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0 border-t border-dashed border-[#8a9a8a]" />
                <span className="text-[10px] text-[#8a9a8a]">
                  Vergleich mit iShares MSCI World SRI UCITS ETF ⓘ
                </span>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-4 pt-3 border-t border-[#e0d8cc]">
              <p className="text-[10px] text-[#8a9a8a] leading-relaxed">
                Vergangene Wertentwicklungen sind kein verlässlicher Indikator
                für die Zukunft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
