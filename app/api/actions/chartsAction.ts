"use server";

interface CryptoPrice {
  symbol: string;
  name: string;
  price: number;
  change: number;
  isPositive: boolean;
}

interface ChartDataPoint {
  time: string;
  value: number;
}

interface ComparisonDataPoint {
  time: string;
  btc: number;
  eth: number;
}

interface MarketStats {
  totalVolume: number;
  totalMarketCap: number;
  marketCapChange: number;
}

const COINGECKO_API = "https://api.coingecko.com/api/v3";

const MOCK_BTC_CHART: ChartDataPoint[] = Array.from({ length: 12 }, (_, i) => ({
  time: new Date(Date.now() - (11 - i) * 2 * 60 * 60 * 1000).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
    },
  ),
  value: 95000 + Math.random() * 5000,
}));

const MOCK_COMPARISON: ComparisonDataPoint[] = Array.from(
  { length: 7 },
  (_, i) => ({
    time: new Date(
      Date.now() - (6 - i) * 24 * 60 * 60 * 1000,
    ).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    btc: 95000 + Math.random() * 5000,
    eth: 3500 + Math.random() * 500,
  }),
);

const MOCK_MARKET_STATS: MarketStats = {
  totalVolume: 125000000000,
  totalMarketCap: 3500000000000,
  marketCapChange: 2.5,
};

const MOCK_PRICES: CryptoPrice[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 97234.56,
    change: 2.34,
    isPositive: true,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 3567.89,
    change: -1.23,
    isPositive: false,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 145.67,
    change: 5.67,
    isPositive: true,
  },
];

export async function getCryptoPrices(): Promise<CryptoPrice[]> {
  try {
    const response = await fetch(
      `${COINGECKO_API}/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true`,
      { next: { revalidate: 30 } },
    );

    if (!response.ok) {
      return MOCK_PRICES;
    }

    const data = await response.json();

    return [
      {
        symbol: "BTC",
        name: "Bitcoin",
        price: data.bitcoin?.usd || 0,
        change: data.bitcoin?.usd_24h_change || 0,
        isPositive: (data.bitcoin?.usd_24h_change || 0) >= 0,
      },
      {
        symbol: "ETH",
        name: "Ethereum",
        price: data.ethereum?.usd || 0,
        change: data.ethereum?.usd_24h_change || 0,
        isPositive: (data.ethereum?.usd_24h_change || 0) >= 0,
      },
      {
        symbol: "SOL",
        name: "Solana",
        price: data.solana?.usd || 0,
        change: data.solana?.usd_24h_change || 0,
        isPositive: (data.solana?.usd_24h_change || 0) >= 0,
      },
    ];
  } catch (error) {
    return MOCK_PRICES;
  }
}

export async function getBitcoin24hChart(): Promise<ChartDataPoint[]> {
  try {
    const response = await fetch(
      `${COINGECKO_API}/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!response.ok) {
      return MOCK_BTC_CHART;
    }

    const data = await response.json();

    const prices = data.prices || [];
    if (prices.length === 0) {
      return MOCK_BTC_CHART;
    }

    const filtered = prices.filter(
      (_: unknown, index: number) => index % 2 === 0,
    );

    return filtered.map((point: [number, number]) => ({
      time: new Date(point[0]).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      value: Math.round(point[1]),
    }));
  } catch (error) {
    return MOCK_BTC_CHART;
  }
}

export async function getCryptoComparison(): Promise<ComparisonDataPoint[]> {
  try {
    const [btcResponse, ethResponse] = await Promise.all([
      fetch(
        `${COINGECKO_API}/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily`,
        {
          next: { revalidate: 300 },
        },
      ),
      fetch(
        `${COINGECKO_API}/coins/ethereum/market_chart?vs_currency=usd&days=7&interval=daily`,
        {
          next: { revalidate: 300 },
        },
      ),
    ]);

    if (!btcResponse.ok || !ethResponse.ok) {
      return MOCK_COMPARISON;
    }

    const [btcData, ethData] = await Promise.all([
      btcResponse.json(),
      ethResponse.json(),
    ]);

    const btcPrices = btcData.prices || [];
    const ethPrices = ethData.prices || [];

    if (btcPrices.length === 0 || ethPrices.length === 0) {
      return MOCK_COMPARISON;
    }

    return btcPrices.map((point: [number, number], index: number) => ({
      time: new Date(point[0]).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      btc: Math.round(point[1]),
      eth: Math.round(ethPrices[index]?.[1] || 0),
    }));
  } catch (error) {
    return MOCK_COMPARISON;
  }
}

export async function getMarketStats(): Promise<MarketStats> {
  try {
    const response = await fetch(`${COINGECKO_API}/global`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return MOCK_MARKET_STATS;
    }

    const data = await response.json();

    return {
      totalVolume: data.data?.total_volume?.usd || 0,
      totalMarketCap: data.data?.total_market_cap?.usd || 0,
      marketCapChange: data.data?.market_cap_change_percentage_24h_usd || 0,
    };
  } catch (error) {
    return MOCK_MARKET_STATS;
  }
}
