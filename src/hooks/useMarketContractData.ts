import { useReadContract } from "wagmi";
import { CONTRACT_ADDRESS, abi } from "@/components/constants";

export function useMarketContractData(index: number) {
  const marketCore = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: abi,
    functionName: "marketCores",
    args: [index],
  });

  const marketState = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: abi,
    functionName: "marketStates",
    args: [index],
  });

  const yesStakes = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: abi,
    functionName: "stakes",
    args: [index, 1], // Assuming 1 represents YES
  });

  const noStakes = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: abi,
    functionName: "stakes",
    args: [index, 2], // Assuming 2 represents NO
  });

  return { marketCore, marketState, yesStakes, noStakes };
}
