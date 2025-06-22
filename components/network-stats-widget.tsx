"use client"

import { useState, useEffect } from "react"
import { Activity, RefreshCw, Zap, Clock, Database, Target } from "lucide-react"

interface NetworkData {
  blockHeight: number
  difficulty: string
  currentReward: number
  lastUpdate: string
  source: string
}

export function NetworkStatsWidget() {
  const [networkData, setNetworkData] = useState<NetworkData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchNetworkData = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/blockchain")
      if (!response.ok) {
        throw new Error("Failed to fetch network data")
      }

      const data = await response.json()
      setNetworkData(data)
    } catch (err) {
      console.error("Error fetching network data:", err)
      setError("Failed to load network data")
      // Fallback data
      setNetworkData({
        blockHeight: 0,
        difficulty: "0",
        currentReward: 500000,
        lastUpdate: new Date().toISOString(),
        source: "fallback",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNetworkData()
    // Update every 3 minutes
    const interval = setInterval(fetchNetworkData, 3 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
            <RefreshCw className="w-6 h-6 text-white animate-spin" />
          </div>
          <h3 className="text-xl font-bold text-white">Network Stats</h3>
        </div>
        <div className="text-center text-gray-400">Loading network data...</div>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 hover:border-green-500/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
          <Activity className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">Network Stats</h3>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-gray-400">Block Time:</span>
          </div>
          <span className="text-white font-mono">1 minute</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-purple-400" />
            <span className="text-gray-400">Block Size:</span>
          </div>
          <span className="text-white font-mono">10 MB</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-400">TPS Capacity:</span>
          </div>
          <span className="text-white font-mono">666</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-red-400" />
            <span className="text-gray-400">Difficulty:</span>
          </div>
          <span className="text-white font-mono text-sm">{networkData?.difficulty || "N/A"}</span>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-white/10">
        <div className="text-xs text-gray-400 text-center">
          Updated: {new Date(networkData?.lastUpdate || "").toLocaleTimeString()}
        </div>
        <div className="text-xs text-gray-500 text-center mt-1">Source: {networkData?.source}</div>
      </div>
    </div>
  )
}
