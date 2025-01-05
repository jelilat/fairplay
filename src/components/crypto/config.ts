import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { chains } from "@lens-network/sdk/viem";
import { http } from "wagmi";

export const config = getDefaultConfig({
  appName: "Fairplay",
  chains: [chains.testnet],
  projectId: "1c5182acf6b00e1115ab2dfc97660b81",
  transports: {
    [chains.testnet.id]: http(),
  },
});
