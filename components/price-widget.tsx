"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown, RefreshCw, DollarSign, AlertCircle } from "lucide-react"

interface Exchange {
  name: string
  price: number
  change24h?: number
  volume24h?: number
  marketCap?: number
  rank?: number
  url?: string
  depositEnabled?: boolean
  withdrawalEnabled?: boolean
  depositFee?: number
  withdrawFee?: number
  minDeposit?: number
  minWithdraw?: number
  precision?: number
  iconUrl?: string
}

interface Arbitrage {
  opportunity: boolean
  percentage: number
  priceDifference: number
  cheapest: Exchange
  expensive: Exchange
  profitPer1000: string
}

interface PriceData {
  price: string
  change24h?: number
  volume24h?: number
  marketCap?: number
  rank?: number
  lastUpdate: string
  source: string
  error?: string
  ath?: number
  athDate?: string
  athChange?: number
  exchanges?: Exchange[]
  arbitrage?: Arbitrage
  errors?: string[]
}

export function PriceWidget() {
  const [priceData, setPriceData] = useState<PriceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  const fetchPrice = async (attempt = 1) => {
    try {
      setLoading(true)
      setError(null)

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

      const response = await fetch("/api/price", {
        signal: controller.signal,
        headers: {
          "Cache-Control": "no-cache",
        },
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      setPriceData(data)
      setRetryCount(0) // Reset retry count on success

      if (data.error) {
        setError(`Data source issue: ${data.error}`)
      }
    } catch (err) {
      console.error("Error fetching price:", err)
      const errorMessage = err instanceof Error ? err.message : "Network error"

      if (attempt < 3) {
        // Retry up to 3 times with exponential backoff
        const delay = Math.pow(2, attempt) * 1000 // 2s, 4s, 8s
        setTimeout(() => {
          setRetryCount(attempt)
          fetchPrice(attempt + 1)
        }, delay)
        return
      }

      setError(errorMessage)
      // Set fallback data even on error
      setPriceData({
        price: "0.00001234",
        change24h: 0,
        volume24h: 0,
        lastUpdate: new Date().toISOString(),
        source: "fallback",
        error: errorMessage,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPrice()
    // Update price every 5 minutes
    const interval = setInterval(() => fetchPrice(), 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const handleRetry = () => {
    fetchPrice()
  }

  if (loading && !priceData) {
    return (
      <div className="bg-black/85 backdrop-blur-sm rounded-lg p-4 border border-orange-500/30 min-w-[250px]">
        <div className="flex items-center gap-2 justify-center">
          <RefreshCw className="w-4 h-4 animate-spin text-orange-400" />
          <span className="text-orange-400 font-bold">
            {retryCount > 0 ? `Retrying... (${retryCount}/3)` : "Loading Price..."}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black/85 backdrop-blur-sm rounded-lg p-4 border border-orange-500/30 min-w-[250px] text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-center gap-2 mb-2">
        <DollarSign className="w-5 h-5 text-orange-400" />
        <span className="text-orange-400 font-bold text-lg">DEV Price</span>
        {error && <AlertCircle className="w-4 h-4 text-red-400" />}
      </div>

      <div className="text-white font-mono text-xl font-bold mb-2">${priceData?.price || "N/A"}</div>

      {/* Combined 24h Change - Show best available */}
      {priceData?.change24h !== undefined && (
        <div
          className={`flex items-center justify-center gap-1 text-sm mb-2 ${
            priceData.change24h >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {priceData.change24h >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {Math.abs(priceData.change24h).toFixed(2)}% (24h)
        </div>
      )}

      {/* Combined Market Data */}
      <div className="space-y-1 mb-2">
        {priceData?.marketCap && (
          <div className="text-xs text-gray-400">Market Cap: ${priceData.marketCap.toLocaleString()}</div>
        )}

        {priceData?.rank && (
          <div className="text-xs text-gray-400">Rank: #{priceData.rank.toLocaleString()}</div>
        )}

        {/* Show volume from multiple sources if available */}
        {priceData?.exchanges && priceData.exchanges.length > 0 && (
          <div className="text-xs text-gray-400">
            Volume: {priceData.exchanges
              .filter(ex => ex.volume24h && ex.volume24h > 0)
              .map(ex => `${ex.name}: $${ex.volume24h!.toLocaleString()}`)
              .join(" | ") || "N/A"}
          </div>
        )}

        {/* Fallback to single volume if no exchanges data */}
        {(!priceData?.exchanges || priceData.exchanges.length === 0) && priceData?.volume24h && (
          <div className="text-xs text-gray-400">Volume: ${priceData.volume24h.toLocaleString()}</div>
        )}

        {priceData?.athChange && (
          <div className="text-xs text-gray-500">
            ATH: ${priceData.ath?.toFixed(10)} ({priceData.athChange.toFixed(1)}% from ATH)
          </div>
        )}
      </div>

      {/* Exchange Comparison */}
      {priceData?.exchanges && priceData.exchanges.length > 1 && (
        <div className="bg-gray-800/50 rounded-lg p-2 mb-2">
          <div className="text-xs text-gray-300 font-semibold mb-1">Prices:</div>
          {priceData.exchanges.slice(0, 3).map((exchange, index) => (
            <div key={index} className="flex justify-between items-center text-xs">
              <span className="text-gray-400">{exchange.name}</span>
              <span className="text-white font-mono">${exchange.price.toFixed(10)}</span>
            </div>
          ))}
        </div>
      )}

      <div className="text-xs text-gray-400">Updated: {new Date(priceData?.lastUpdate || "").toLocaleTimeString()}</div>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-1">
        <span>Sources: {priceData?.exchanges && priceData.exchanges.length > 0 
          ? priceData.exchanges.map(ex => ex.name).join(", ")
          : priceData?.source || "N/A"
        }</span>
        {error && (
          <button
            onClick={handleRetry}
            className="text-orange-400 hover:text-orange-300 underline"
            title="Retry fetching data"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  )
}
