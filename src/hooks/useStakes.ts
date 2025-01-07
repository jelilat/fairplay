import { useReadContract } from "wagmi";
import { CONTRACT_ADDRESS, abi } from "@/components/constants";

export function useYesStakes(index: number) {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: abi,
    functionName: "getTotalYesStakes",
    args: [index],
  });
}

export function useNoStakes(index: number) {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: abi,
    functionName: "getTotalNoStakes",
    args: [index],
  });
}
