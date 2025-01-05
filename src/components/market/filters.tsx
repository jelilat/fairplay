"use client";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function MarketFilters() {
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
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green/40" />
        <input
          type="search"
          placeholder="Search markets"
          className="pl-10 pr-4 py-2 rounded-md border border-green/10 bg-white w-[200px] focus:outline-none focus:ring-2 focus:ring-green/20"
        />
      </div>
    </div>
  );
}
