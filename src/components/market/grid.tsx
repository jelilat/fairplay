import { MarketCard } from "./card";

const MARKETS = [
  {
    id: 1,
    category: "ai",
    title:
      "Will AI-powered robots become widely adopted in industries such as manufacturing, healthcare, or agriculture by the end of 2023?",
    volume: 350019,
    apy: 36,
    views: "16.6K",
    liquidity: "$1.87M",
    yesPrice: 2.0,
    noPrice: 3.8,
  },
  {
    id: 2,
    category: "medical",
    title:
      "Will a breakthrough treatment for Alzheimer's disease be approved by a major regulatory agency by the end of 2023?",
    volume: 350019,
    apy: 36,
    views: "16.6K",
    liquidity: "$1.87M",
    yesPrice: 2.0,
    noPrice: 3.8,
  },
  {
    id: 3,
    category: "crypto",
    title:
      "Will the decentralized finance (DeFi) sector experience a significant market crash in the summer of 2023?",
    volume: 350019,
    apy: 36,
    views: "16.6K",
    liquidity: "$1.87M",
    yesPrice: 2.0,
    noPrice: 3.8,
  },
] as const;

export function MarketGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {MARKETS.map((market) => (
        <MarketCard key={market.id} {...market} />
      ))}
    </div>
  );
}
