import Link from "next/link"
import { TrendingUp, ArrowRight } from "react-feather"

const Page = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Trading Platforms</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* BitGoGet Exchange */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-purple-500/50 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">BitGoGet Exchange</h3>
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-gray-300 mb-4 text-sm">
            Primary exchange platform offering reliable DEV/USDT trading with competitive fees and secure transactions.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Pair:</span>
              <span className="text-white font-medium">DEV/USDT</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Type:</span>
              <span className="text-white font-medium">Spot Trading</span>
            </div>
          </div>
          <Link
            href="https://bitgoget.com/spot/DEVUSDT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105 text-sm w-full justify-center"
          >
            Trade on BitGoGet
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Exbitron Exchange */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-purple-500/50 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Exbitron Exchange</h3>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-gray-300 mb-4 text-sm">
            Established exchange platform with a wide range of trading pairs and user-friendly interface.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Pair:</span>
              <span className="text-white font-medium">BTC/USDT</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Type:</span>
              <span className="text-white font-medium">Spot Trading</span>
            </div>
          </div>
          <Link
            href="https://exbitron.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105 text-sm w-full justify-center"
          >
            Trade on Exbitron
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Nestex Exchange */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-purple-500/50 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Nestex Exchange</h3>
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-gray-300 mb-4 text-sm">
            Innovative exchange platform focusing on decentralized trading with low fees and high security.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Pair:</span>
              <span className="text-white font-medium">ETH/USDT</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Type:</span>
              <span className="text-white font-medium">Spot Trading</span>
            </div>
          </div>
          <Link
            href="https://nestex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105 text-sm w-full justify-center"
          >
            Trade on Nestex
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
