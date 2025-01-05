import Image from "next/image";

export function Coins() {
  const coins = [
    { symbol: "USDT", amount: "1,800", value: "$1,800", icon: "/usdt.svg" },
    { symbol: "BNB", amount: "190", value: "$46,170", icon: "/bnb.svg" },
    { symbol: "USDC", amount: "1,800", value: "$1,800", icon: "/usdc.svg" },
  ];

  return (
    <>
      {coins.map((coin) => (
        <div key={coin.symbol} className="items-center gap-2">
          <div className="w-6 h-6 relative">
            <Image
              src={coin.icon}
              alt={coin.symbol}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <div className="text-sm font-medium text-green flex text-center">
              {coin.amount} {coin.symbol}
            </div>
            <div className="text-xs text-green/60 text-center">
              {coin.value}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
