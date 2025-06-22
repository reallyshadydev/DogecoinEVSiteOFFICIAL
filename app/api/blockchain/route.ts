import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Try to fetch from DogecoinEV explorer with timeout
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 8000) // 8 second timeout

      const [blockCountResponse, difficultyResponse] = await Promise.all([
        fetch("https://explorer.dogecoinev.com/api/getblockcount", {
          headers: {
            "User-Agent": "DogecoinEV-Website/1.0",
          },
          signal: controller.signal,
        }),
        fetch("https://explorer.dogecoinev.com/api/getdifficulty", {
          headers: {
            "User-Agent": "DogecoinEV-Website/1.0",
          },
          signal: controller.signal,
        }),
      ])

      clearTimeout(timeoutId)

      if (blockCountResponse.ok && difficultyResponse.ok) {
        const blockHeight = await blockCountResponse.json()
        const difficulty = await difficultyResponse.json()

        const currentHeight = Number.parseInt(blockHeight)
        if (!isNaN(currentHeight) && currentHeight > 0) {
          // Calculate halvening info
          // Calculate reward based on current height - fix the logic
          let currentReward = 500000
          let nextHalveningBlock = 100000

          if (currentHeight >= 500000) {
            currentReward = 10000
            nextHalveningBlock = null
          } else if (currentHeight >= 400000) {
            currentReward = 15625
            nextHalveningBlock = 500000
          } else if (currentHeight >= 300000) {
            currentReward = 31250
            nextHalveningBlock = 400000
          } else if (currentHeight >= 200000) {
            currentReward = 62500
            nextHalveningBlock = 300000
          } else if (currentHeight >= 145000) {
            currentReward = 125000
            nextHalveningBlock = 200000
          } else if (currentHeight >= 100000) {
            currentReward = 250000 // Fixed: blocks 100,000-144,999 should have 250,000 DEV reward
            nextHalveningBlock = 145000
          } else {
            currentReward = 500000
            nextHalveningBlock = 100000
          }

          const blocksUntilHalvening = nextHalveningBlock ? nextHalveningBlock - currentHeight : null
          const estimatedDays = blocksUntilHalvening ? Math.floor(blocksUntilHalvening / 1440) : null

          const formattedDifficulty = Number.parseFloat(difficulty).toFixed(2)

          return NextResponse.json({
            blockHeight: currentHeight,
            difficulty: formattedDifficulty,
            currentReward,
            nextHalveningBlock,
            blocksUntilHalvening,
            estimatedDaysUntilHalvening: estimatedDays,
            lastUpdate: new Date().toISOString(),
            source: "explorer",
          })
        }
      }
    } catch (error) {
      console.log("Explorer API error:", error)
    }

    // Generate realistic simulated data based on time
    const now = new Date()
    const daysSinceLaunch = Math.floor((now.getTime() - new Date("2025-01-26").getTime()) / (1000 * 60 * 60 * 24))
    const estimatedHeight = Math.max(85000 + daysSinceLaunch * 1440, 85000) // ~1440 blocks per day

    // Simulate difficulty growth
    const baseDifficulty = 2094902.38
    const difficultyGrowth = Math.pow(1.001, daysSinceLaunch) // Small daily growth
    const simulatedDifficulty = (baseDifficulty * difficultyGrowth).toFixed(2)

    // Calculate reward based on simulated height - fix this too
    let currentReward = 500000
    let nextHalveningBlock = 100000

    if (estimatedHeight >= 500000) {
      currentReward = 10000
      nextHalveningBlock = null
    } else if (estimatedHeight >= 400000) {
      currentReward = 15625
      nextHalveningBlock = 500000
    } else if (estimatedHeight >= 300000) {
      currentReward = 31250
      nextHalveningBlock = 400000
    } else if (estimatedHeight >= 200000) {
      currentReward = 62500
      nextHalveningBlock = 300000
    } else if (estimatedHeight >= 145000) {
      currentReward = 125000
      nextHalveningBlock = 200000
    } else if (estimatedHeight >= 100000) {
      currentReward = 250000 // Fixed: should be 250,000 DEV for this range
      nextHalveningBlock = 145000
    } else {
      currentReward = 500000
      nextHalveningBlock = 100000
    }

    const blocksUntilHalvening = nextHalveningBlock - estimatedHeight
    const estimatedDays = Math.max(Math.floor(blocksUntilHalvening / 1440), 0)

    return NextResponse.json({
      blockHeight: estimatedHeight,
      difficulty: simulatedDifficulty,
      currentReward,
      nextHalveningBlock,
      blocksUntilHalvening,
      estimatedDaysUntilHalvening: estimatedDays,
      lastUpdate: new Date().toISOString(),
      source: "simulation",
    })
  } catch (error) {
    console.error("Blockchain API critical error:", error)

    // Final fallback with static data
    return NextResponse.json(
      {
        blockHeight: 95000,
        difficulty: "2500000.00",
        currentReward: 500000,
        nextHalveningBlock: 100000,
        blocksUntilHalvening: 5000,
        estimatedDaysUntilHalvening: 3,
        lastUpdate: new Date().toISOString(),
        source: "static_fallback",
        error: "Unable to fetch live blockchain data",
      },
      { status: 200 }, // Return 200 to prevent fetch errors
    )
  }
}
