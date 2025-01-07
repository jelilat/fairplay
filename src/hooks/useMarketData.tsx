import { useEffect, useState } from "react";
import { useMarketCore } from "./useMarketCore";
import { useMarketState } from "./useMarketState";
import { useYesStakes, useNoStakes } from "./useStakes";
import { MarketCard, type MarketCardProps } from "@/components/market/card";

export function MarketData({ marketIndex }: { marketIndex: number }) {
  const [marketData, setMarketData] = useState<MarketCardProps | null>(null);
  console.log(marketIndex);
  const { data: marketCore } = useMarketCore(marketIndex);
  const { data: marketState } = useMarketState(marketIndex);
  const { data: yesStakes } = useYesStakes(marketIndex);
  const { data: noStakes } = useNoStakes(marketIndex);

  console.log(marketIndex, marketCore, marketState, yesStakes, noStakes);

  useEffect(() => {
    if (marketCore && marketState && yesStakes && noStakes) {
      const fetchMarketData = async () => {
        const yesStakesNum = BigInt(yesStakes as number);
        const noStakesNum = BigInt(noStakes as number);
        const volume = Number(yesStakesNum + noStakesNum) || 0;

        const _marketState = marketState as number[];
        const _marketCore = marketCore as string[];
        const liquidity = BigInt(_marketState[0]);
        const currentTime = BigInt(Math.floor(Date.now() / 1000));
        const timeToEnd = BigInt(_marketCore[2]) - currentTime;
        const apy = Number(
          (BigInt(_marketState[3]) * BigInt(365 * 24 * 60 * 60 * 100)) /
            (liquidity * timeToEnd)
        );

        let yesPrice: number;
        if (_marketState[1] === 0 && _marketState[2] === 0) {
          yesPrice = 0.5;
        } else {
          const totalStake =
            BigInt(_marketState[1] || 0) + BigInt(_marketState[2] || 0);
          const probability =
            (BigInt(_marketState[1] || 0) * BigInt(1e18)) / totalStake;
          yesPrice = Number(probability) / 1e18;
        }
        const noPrice = 1 - yesPrice;

        console.log(
          volume,
          Number(liquidity) / 1e18,
          apy,
          yesPrice,
          noPrice,
          timeToEnd
        );
        setMarketData({
          marketId: marketIndex,
          category: _marketCore[1] as string,
          question: _marketCore[0] as string,
          volume: Number(volume),
          liquidity: (Number(liquidity) / 1e18).toString(),
          apy: Number(apy),
          yesPrice: Number(yesPrice),
          noPrice: Number(noPrice),
        });
      };

      fetchMarketData();
    }
  }, [marketIndex, marketCore, marketState, yesStakes, noStakes]);

  if (!marketData) {
    return null; // or a loading spinner
  }

  return <MarketCard {...marketData} />;
}
