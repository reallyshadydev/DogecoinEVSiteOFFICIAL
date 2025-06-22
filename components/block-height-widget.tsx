"use client"

import { useState, useEffect } from "react"
import { RefreshCw, Blocks, Zap, AlertCircle } from "lucide-react"

interface BlockchainData {
  blockHeight: number
  difficulty: string
  currentReward: number
  lastUpdate: string
  source: string
  error?: string
}

// 🔧 Reward calculator: halves every 100,000 blocks
const getRewardForBlock = (height: number): number => {
  const initialReward = 500_000
  const halvingInterval = 100_000
  const halvings = Math.floor(height / halvingInterval)
  return Math.max(Math.floor(initialReward / Math.pow(2, halvings)), 1)
}

export function BlockHeightWidget() {
  const [blockData, setBlockData] = useState<BlockchainData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  const fetchBlockData = async (attempt = 1) => {
    try {
      setLoading(true)
      setError(null)

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000)

      const response = await fetch("/api/blockchain", {
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
      setBlockData({
        ...data,
        currentReward: getRewardForBlock(data.blockHeight),
        source: data.source || "api",
      })
      setRetryCount(0)

      if (data.error) {
        setError(`Data source issue: ${data.error}`)
      }
    } catch (err) {
      console.error("Error fetching block data:", err)
      const errorMessage = err instanceof Error ? err.message : "Network error"

      if (attempt < 3) {
        const delay = Math.pow(2, attempt) * 1000
        setTimeout(() => {
          setRetryCount(attempt)
          fetchBlockData(attempt + 1)
        }, delay)
        return
      }

      setError(errorMessage)
      // Fallback data using estimated block height
      const fallbackHeight = 95_000
      setBlockData({
        blockHeight: fallbackHeight,
        difficulty: "2500000",
        currentReward: getRewardForBlock(fallbackHeight),
        lastUpdate: new Date().toISOString(),
        source: "fallback",
        error: errorMessage,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBlockData()
    const interval = setInterval(() => fetchBlockData(), 2 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const handleRetry = () => {
    fetchBlockData()
  }

  if (loading && !blockData) {
    return (
      <div className="bg-black/85 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30 min-w-[250px]">
        <div className="flex items-center gap-2 justify-center">
          <RefreshCw className="w-4 h-4 animate-spin text-blue-400" />
          <span className="text-blue-400 font-bold">
            {retryCount > 0 ? `Retrying... (${retryCount}/3)` : "Loading Block Data..."}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black/85 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30 min-w-[250px] text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Blocks className="w-5 h-5 text-blue-400" />
        <span className="text-blue-400 font-bold text-lg">Block Height</span>
        {error && <AlertCircle className="w-4 h-4 text-red-400" title={error} />}
      </div>

      <div className="text-white font-mono text-xl font-bold mb-3">
        {blockData?.blockHeight?.toLocaleString() || "N/A"}
      </div>

      <div className="space-y-2 mb-3">
        <div className="flex items-center justify-center gap-1 text-sm text-gray-300">
          <Zap className="w-3 h-3 text-yellow-400" />
          <span>Difficulty: {blockData?.difficulty || "N/A"}</span>
        </div>

        <div className="text-sm text-gray-300">Reward: {blockData?.currentReward?.toLocaleString() || "N/A"} DEV</div>
      </div>

      <div className="text-xs text-gray-400">Updated: {new Date(blockData?.lastUpdate || "").toLocaleTimeString()}</div>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-1">
        <span>Source: {blockData?.source}</span>
        {error && (
          <button
            onClick={handleRetry}
            className="text-blue-400 hover:text-blue-300 underline"
            title="Retry fetching data"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  )
}
