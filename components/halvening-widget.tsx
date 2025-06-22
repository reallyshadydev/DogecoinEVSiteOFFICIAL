"use client"

import { useState, useEffect } from "react"
import { Calendar, RefreshCw, Clock } from "lucide-react"

interface HalveningData {
  nextHalveningBlock: number | null
  blocksUntilHalvening: number | null
  estimatedDaysUntilHalvening: number | null
  nextReward: number
  lastUpdate: string
  source: string
  blockHeight?: number
}

export function HalveningWidget() {
  const [halveningData, setHalveningData] = useState<HalveningData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchHalveningData = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/blockchain")
      if (!response.ok) {
        throw new Error("Failed to fetch halvening data")
      }

      const data = await response.json()

      // Calculate halvening info based on current height
      let nextHalveningBlock = null
      let nextReward = 125000 // This should be the reward AFTER the next halvening

      // Determine next reward based on current height
      if (data.blockHeight < 100000) {
        nextHalveningBlock = 100000
        nextReward = 250000 // After first halvening
      } else if (data.blockHeight < 145000) {
        nextHalveningBlock = 145000
        nextReward = 125000 // After second halvening
      } else if (data.blockHeight < 200000) {
        nextHalveningBlock = 200000
        nextReward = 125000 // After third halvening - FIXED: should be 125,000 not 62,500
      } else if (data.blockHeight < 300000) {
        nextHalveningBlock = 300000
        nextReward = 62500 // After fourth halvening
      } else if (data.blockHeight < 400000) {
        nextHalveningBlock = 400000
        nextReward = 31250 // After fifth halvening
      } else if (data.blockHeight < 500000) {
        nextHalveningBlock = 500000
        nextReward = 15625 // After sixth halvening
      } else {
        nextHalveningBlock = null // No more halvenings
        nextReward = 10000 // Already at final reward
      }

      setHalveningData({ ...data, nextHalveningBlock, nextReward })
    } catch (err) {
      console.error("Error fetching halvening data:", err)
      setError("Failed to load halvening data")
      // Fallback data
      setHalveningData({
        nextHalveningBlock: 200000,
        blocksUntilHalvening: 33880,
        estimatedDaysUntilHalvening: 23,
        nextReward: 125000, // FIXED: Changed from 62500 to 125000
        lastUpdate: new Date().toISOString(),
        source: "fallback",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHalveningData()
    // Update every 5 minutes
    const interval = setInterval(fetchHalveningData, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="bg-black/85 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 min-w-[250px]">
        <div className="flex items-center gap-2 justify-center">
          <RefreshCw className="w-4 h-4 animate-spin text-purple-400" />
          <span className="text-purple-400 font-bold">Loading Halvening...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black/85 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 min-w-[250px] text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Calendar className="w-5 h-5 text-purple-400" />
        <span className="text-purple-400 font-bold text-lg">Next Halvening</span>
      </div>

      {halveningData?.nextHalveningBlock ? (
        <>
          <div className="text-white font-mono text-lg font-bold mb-1">
            Block {halveningData.nextHalveningBlock.toLocaleString()}
          </div>

          <div className="text-sm text-gray-300 mb-2">
            {halveningData.blocksUntilHalvening?.toLocaleString() || "N/A"} blocks remaining
          </div>

          {halveningData.estimatedDaysUntilHalvening && (
            <div className="flex items-center justify-center gap-1 text-sm text-yellow-400 mb-2">
              <Clock className="w-3 h-3" />~{halveningData.estimatedDaysUntilHalvening} days
            </div>
          )}
        </>
      ) : (
        <div className="text-white font-mono text-lg font-bold mb-2">No More Halvenings</div>
      )}

      <div className="text-xs text-gray-400 mb-1">
        Next reward: {halveningData?.nextReward?.toLocaleString() || "N/A"} DEV
      </div>

      <div className="text-xs text-gray-400">
        Updated: {new Date(halveningData?.lastUpdate || "").toLocaleTimeString()}
      </div>

      <div className="text-xs text-gray-500 mt-1">Source: {halveningData?.source}</div>
    </div>
  )
}
