// utils/whaleTracker.ts
import { Connection } from "@solana/web3.js";

const HELIUS_API_KEY = "YOUR_API_KEY"; // Get from helius.dev

export async function getWhaleTransactions() {
  const connection = new Connection(`https://rpc.helius.xyz/?api-key=${HELIUS_API_KEY}`);
  
  // Fetch recent big SOL transfers (example)
  const transactions = await connection.getConfirmedSignaturesForAddress2(
    new PublicKey("SOME_WHALE_WALLET"), // Replace with a real whale address
    { limit: 5 }
  );

  return transactions.map(tx => ({
    address: tx.signature.slice(0, 4) + "..." + tx.signature.slice(-4),
    amount: (tx.amount || 0) / 1e9, // Convert lamports to SOL
  }));
}
