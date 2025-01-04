"use client";
import { Navbar } from "@/components/navbar";
import { MarketCard } from "@/components/market-card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [isCreating, setIsCreating] = useState(false);

  const markets = [
    {
      title: "Will ETH reach $3000 by Q1 2024?",
      description:
        "Predict if Ethereum will reach or exceed $3000 by March 31st, 2024",
      endDate: "Mar 31, 2024",
      totalStaked: 5.5,
      yesPercentage: 65,
    },
    {
      title: "Will Bitcoin halving happen before April 2024?",
      description:
        "Predict if the next Bitcoin halving will occur before April 2024",
      endDate: "Apr 1, 2024",
      totalStaked: 3.2,
      yesPercentage: 78,
    },
  ];

  const handleCreateMarket = async () => {
    setIsCreating(true);
    // Simulate creation delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsCreating(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Prediction Markets</h1>
          <Button
            className="bg-orange-500 hover:bg-orange-600"
            onClick={handleCreateMarket}
            disabled={isCreating}
          >
            {isCreating ? "Creating..." : "Create Market"}
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <MarketCard key={index} {...market} />
          ))}
        </div>
      </main>
    </div>
  );
}
