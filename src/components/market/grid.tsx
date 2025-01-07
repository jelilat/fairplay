"use client";
import { useReadContract } from "wagmi";
import { CONTRACT_ADDRESS, abi } from "../constants";
import { MarketData } from "@/hooks/useMarketData";

export function MarketGrid() {
  const { data: marketCount } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: abi,
    functionName: "marketCount",
  });

  const count = Number(marketCount) || 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }, (_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <div key={i}>
          <MarketData marketIndex={i} />
        </div>
      ))}
    </div>
  );
}
