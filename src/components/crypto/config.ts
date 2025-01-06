"use client";

import { getDefaultConfig } from "connectkit";
import { chains } from "@lens-network/sdk/viem";
import { http } from "wagmi";

export const config = getDefaultConfig({
  appName: "Fairplay",
  appDescription: "Create and participate in risk-free prediction markets",
  chains: [chains.testnet],
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  transports: {
    [chains.testnet.id]: http(),
  },
});
