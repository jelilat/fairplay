import { useReadContract } from "wagmi";
import { CONTRACT_ADDRESS, abi } from "@/components/constants";

export function useMarketCore(index: number) {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: abi,
    functionName: "marketCores",
    args: [index],
  });
}
