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
        const yesStakesNum = BigInt(yesStakes);
        const noStakesNum = BigInt(noStakes);
        const volume = Number(yesStakesNum + noStakesNum) || 0;

        const liquidity = BigInt(marketState[0]);
        const currentTime = BigInt(Math.floor(Date.now() / 1000));
        const timeToEnd = BigInt(marketCore[2]) - currentTime;
        const apy = Number(
          (BigInt(marketState[3]) * BigInt(365 * 24 * 60 * 60 * 100)) /
            (liquidity * timeToEnd)
        );

        let yesPrice;
        if (marketState[1] === 0 && marketState[2] === 0) {
          yesPrice = 0.5;
        } else {
          const totalStake =
            BigInt(marketState[1] || 0) + BigInt(marketState[2] || 0);
          const probability =
            (BigInt(marketState[1] || 0) * BigInt(1e18)) / totalStake;
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
          category: marketCore[1] as string,
          question: marketCore[0] as string,
          volume: Number(volume),
          liquidity: Number(liquidity) / 1e18,
          apy: Number(apy),
          yesPrice: Number(yesPrice),
          noPrice: Number(noPrice),
        });
      };

      fetchMarketData();
    }
  }, [marketCore, marketState, yesStakes, noStakes]);

  return <MarketCard {...marketData} />;
}
