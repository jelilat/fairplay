"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Brain, Stethoscope, Bitcoin } from "lucide-react";
import { useState } from "react";

interface MarketCardProps {
  category: "ai" | "medical" | "crypto";
  title: string;
  volume: number;
  apy: number;
  views: string;
  liquidity: string;
  yesPrice: number;
  noPrice: number;
}

export function MarketCard({
  category,
  title,
  volume,
  apy,
  views,
  liquidity,
  yesPrice,
  noPrice,
}: MarketCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const CategoryIcon = {
    ai: Brain,
    medical: Stethoscope,
    crypto: Bitcoin,
  }[category];

  return (
    <Card className="p-6">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-green/10 flex items-center justify-center">
            <CategoryIcon className="h-5 w-5 text-green" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-lg font-medium text-green leading-tight mb-4">
              {title}
            </h3>
            <button
              type="button"
              onClick={() => setIsFavorited(!isFavorited)}
              className="flex-shrink-0"
            >
              <Star
                className={`h-5 w-5 ${
                  isFavorited
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-green/20"
                }`}
              />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            <div>
              <div className="text-sm text-green/60">Total Volume</div>
              <div className="font-medium text-green">
                ${volume.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-green/60">APY</div>
              <div className="font-medium text-green">{apy}%</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-green/60">{views}</div>
              <div className="text-sm text-green/60">{liquidity}</div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 bg-emerald-50 hover:bg-emerald-100 border-emerald-200 text-emerald-700"
            >
              Yes ${yesPrice.toFixed(2)}
            </Button>
            <Button
              variant="outline"
              className="flex-1 bg-red-50 hover:bg-red-100 border-red-200 text-red-700"
            >
              No ${noPrice.toFixed(2)}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
