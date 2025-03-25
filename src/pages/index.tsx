import { useWallet } from '@solana/wallet-adapter-react'; 
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'; 

export default function Home() {
  const { publicKey } = useWallet(); 

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          Track Solana Whales. Trade Like Pelosi.
        </h1>
        <p className="text-xl mb-8">
          Get <span className="font-bold">real-time alerts</span> on new Solana tokens before they pump.
        </p>

        {/* ADD WALLET CONNECTION BUTTON (required for Solana dApps) */}
        <div className="mb-8">
          <WalletMultiButton className="bg-purple-600 hover:bg-purple-700 mx-auto" />
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-center space-x-4 mb-12">
          <a
            href="https://jup.ag/swap/SOL-2FSJN56yXv2zaG15yjVYhcjwYbnRuo4xBiWgLQCYH3S9"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
          >
            Buy $PT Now
          </a>
          <a
            href="https://t.me/Pelosi_Token"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
          >
            Join Telegram
          </a>
        </div>

        {/* WHALE TRADES SECTION - CONDITIONAL ON WALLET CONNECTION */}
        {publicKey && ( // ONLY SHOW IF WALLET IS CONNECTED
          <div className="mt-12 text-left bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">🔍 Recent Whale Moves</h2>
            <ul className="space-y-2">
              <li>🐳 Whale 5mx9Y6Mhm1GE5VEAahfnrrWxUAhgsSfXQotzFJ96eCXa bought $11.3k $ARC</li>
              <li>🦈 Whale 2gakfRH8YRdH8f848zZSGGHH4JehpoxNcBykZSsKUsGT bought $61.1k $PVS</li>
              {/* DYNAMIC DATA EXAMPLE (LATER) */}
              {/* {whaleTxs.map((tx) => <li key={tx.id}>...</li>)} */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
