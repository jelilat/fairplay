import { FairplaySDK } from './fairplay-sdk';

// Example usage of the SDK
async function example() {
  const sdk = new FairplaySDK('your-api-key', true); // Use testnet

  // Create a new market
  const market = await sdk.createMarket({
    question: "Will ETH reach $3000 by Q1 2024?",
    description: "Predict if Ethereum will reach or exceed $3000 by March 31st, 2024",
    endDate: "2024-03-31"
  });

  // Stake on a market
  const stake = await sdk.stakeOnMarket(market.marketId, 'yes', 1.0);

  // Get market details
  const marketDetails = await sdk.getMarket(market.marketId);

  console.log({ market, stake, marketDetails });
}

