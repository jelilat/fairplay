"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { CreateMarketModal } from "./create-market-modal";
import { useAccount, useWriteContract } from "wagmi";
import { parseEther } from "viem";
import { CONTRACT_ADDRESS, abi } from "@/components/constants";

export function MarketFilters() {
  const { address } = useAccount();
  const { toast } = useToast();
  const { data: hash, writeContract } = useWriteContract();

  const [isModalOpen, setModalOpen] = useState(false);

  const handleCreateMarket = (
    question: string,
    category: string,
    endTime: number,
    liquidity: string
  ) => {
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
      functionName: "createMarket",
      args: [question, category, endTime],
      value: parseEther(liquidity),
    });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-8 items-center">
      <Select defaultValue="all">
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="All Markets" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Markets</SelectItem>
          <SelectItem value="crypto">Cryptocurrency</SelectItem>
          <SelectItem value="ai">Artificial Intelligence</SelectItem>
          <SelectItem value="medical">Medical</SelectItem>
          <SelectItem value="finance">Gaming</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all">
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Liquidity" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Liquidity</SelectItem>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all">
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="open">Open</SelectItem>
          <SelectItem value="closed">Closed</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex-1" />

      <div className="relative">
        <button
          type="button"
          className="px-3 py-2 border-[#2d4d31] border text-[#2d4d31] rounded-lg hover:bg-[#2d4d31] hover:text-white text-sm"
          onClick={() => setModalOpen(true)}
        >
          Create Market
        </button>
      </div>
      <CreateMarketModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onCreateMarket={handleCreateMarket}
      />
      <div>
        <p>Hash: {hash}</p>
      </div>
    </div>
  );
}
