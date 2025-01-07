"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplet } from "lucide-react";
import { useState } from "react";
import { StakeModal } from "@/components/market/stake-modal";
import { useAccount, useWriteContract } from "wagmi";
import { CONTRACT_ADDRESS, abi } from "@/components/constants";
import { parseEther } from "viem";
import { useToast } from "@/hooks/use-toast";

export interface MarketCardProps {
  marketId: number;
  category: string;
  question: string;
  volume: number;
  apy: number;
  liquidity: string;
  yesPrice: number;
  noPrice: number;
}

export function MarketCard({
  marketId,
  category,
  question,
  volume,
  apy,
  liquidity,
  yesPrice,
  noPrice,
}: MarketCardProps) {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();
  const { toast } = useToast();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number>(1);

  const handleButtonClick = (option: number) => {
    setSelectedOption(option);
    setIsModalOpen(true);
  };

  const handleConfirmStake = (amount: number) => {
    console.log(amount);
    if (!address) {
      toast({
        title: "Please connect your wallet",
        description: "You need to connect your wallet to create a market",
        variant: "destructive",
      });
      return;
    }

    writeContract({
      address: CONTRACT_ADDRESS,
      abi: abi,
      functionName: "placeStake",
      args: [marketId, selectedOption],
      value: parseEther(amount.toString()),
    });
  };

  const categoryColors = {
    ai: "bg-orange-100 text-orange-700",
    medical: "bg-blue-100 text-blue-700",
    crypto: "bg-purple-100 text-purple-700",
    sports: "bg-emerald-100 text-emerald-700",
    politics: "bg-red-100 text-red-700",
  };

  const categoryColor =
    categoryColors[category as keyof typeof categoryColors] ||
    "bg-gray-100 text-gray-700";

  return (
    <Card className="p-6 bg-white">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColor}`}
            >
              {category}
            </span>
          </div>
        </div>

        {/* Question */}
        <h3 className="text-xl font-medium text-gray-900 leading-tight">
          {question}
        </h3>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          <div>
            <div className="text-sm text-gray-500">Total Stakes</div>
            <div className="font-medium text-gray-900">{volume}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">APY</div>
            <div className="font-medium text-gray-900">{apy}%</div>
          </div>
        </div>

        {/* Yes/No Buttons */}
        <div className="space-y-2">
          <Button
            variant="outline"
            className="w-full h-12 bg-emerald-50 hover:bg-emerald-100 border-emerald-200 text-emerald-700"
            onClick={() => handleButtonClick(1)}
          >
            Yes {yesPrice?.toFixed(2)} GRASS
          </Button>
          <Button
            variant="outline"
            className="w-full h-12 bg-red-50 hover:bg-red-100 border-red-200 text-red-700"
            onClick={() => handleButtonClick(2)}
          >
            No {noPrice?.toFixed(2)} GRASS
          </Button>
        </div>

        {/* Modal for entering stake amount */}
        {isModalOpen && (
          <StakeModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={handleConfirmStake}
          />
        )}
      </div>

      {/* Footer Stats */}
      <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Droplet className="h-4 w-4" />
          {liquidity} GRASS
        </div>
      </div>
    </Card>
  );
}
