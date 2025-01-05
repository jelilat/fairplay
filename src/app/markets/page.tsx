import { MarketHeader } from "@/components/market/header";
import { MarketFilters } from "@/components/market/filters";
import { MarketGrid } from "@/components/market/grid";

export default function MarketsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <MarketHeader />
        <MarketFilters />
        <MarketGrid />
      </div>
    </div>
  );
}
