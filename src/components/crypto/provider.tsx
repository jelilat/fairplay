"use client";

import { ConnectKitProvider } from "connectkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig } from "wagmi";
import { config } from "@/components/crypto/config";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={createConfig(config)}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider theme="rounded">{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
