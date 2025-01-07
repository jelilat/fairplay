import { useReadContract } from "wagmi";
import { CONTRACT_ADDRESS, abi } from "@/components/constants";

export function useMarketState(index: number) {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: abi,
    functionName: "marketStates",
    args: [index],
  });
}
