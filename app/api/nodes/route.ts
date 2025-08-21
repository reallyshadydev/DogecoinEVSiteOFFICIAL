import { NextResponse } from "next/server"

interface Node {
  createdAt: string
  address: string
  port: string
  protocol: string
  version: string
  country: string
  country_code: string
  lat?: number
  lon?: number
}

interface CachedLocation {
  lat: number
  lon: number
}

// Country centroids for fallback geolocation
const countryCentroids: Record<string, [number, number]> = {
  DE: [51.1657, 10.4515],
  CN: [35.8617, 104.1954],
  US: [37.0902, -95.7129],
  CA: [56.1304, -106.3468],
  KH: [12.5657, 104.991],
  RU: [61.524, 105.3188],
  HK: [22.3193, 114.1694],
  FR: [46.2276, 2.2137],
  PL: [51.9194, 19.1451],
  FI: [61.9241, 25.7482],
  AU: [-25.2744, 133.7751],
  IT: [41.8719, 12.5674],
  GB: [55.3781, -3.436],
  JP: [36.2048, 138.2529],
  BR: [-14.235, -51.9253],
  IN: [20.5937, 78.9629],
  ZA: [-30.5595, 22.9375],
}

const memoryCache: Record<string, CachedLocation> = {}

// Validate IP address
function isValidIP(ip: string): boolean {
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  return ipv4Regex.test(ip)
}

// Get coordinates for an IP with multiple service fallbacks
async function getCoordinates(ip: string, countryCode: string): Promise<[number, number] | null> {
  if (!isValidIP(ip)) {
    return null
  }

  // Check memory cache first
  if (memoryCache[ip]) {
    return [memoryCache[ip].lat, memoryCache[ip].lon]
  }

  // Try multiple geolocation services for better accuracy
  const services = [`https://ip-api.com/json/${ip}`, `https://ipinfo.io/${ip}/json`, `https://ipapi.co/${ip}/json/`]

  for (const url of services) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000)

      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          "User-Agent": "DogecoinEV-Website/1.0",
        },
      })

      clearTimeout(timeoutId)

      if (response.ok) {
        const data = await response.json()

        let coords: [number, number] | null = null

        // Handle different API response formats
        if (url.startsWith("https://ip-api.com")) {
          if (data.status === "success") {
            coords = [data.lat, data.lon]
          }
        } else if (url.startsWith("https://ipinfo.io")) {
          if (data.loc) {
            const [lat, lon] = data.loc.split(",").map(Number)
            coords = [lat, lon]
          }
        } else if (url.startsWith("https://ipapi.co")) {
          if (data.latitude && data.longitude) {
            coords = [data.latitude, data.longitude]
          }
        }

        if (coords) {
          // Cache the result in memory
          memoryCache[ip] = { lat: coords[0], lon: coords[1] }
          return coords
        }
      }
    } catch (error) {
      console.error(`[v0] Error fetching coordinates from ${url}:`, error)
    }
  }

  // Fallback to country centroid if all services fail
  if (countryCode && countryCentroids[countryCode.toUpperCase()]) {
    const coords = countryCentroids[countryCode.toUpperCase()]
    memoryCache[ip] = { lat: coords[0], lon: coords[1] }
    return coords
  }

  // If country code not found in centroids, use default location
  console.log(`[v0] No coordinates found for IP ${ip} with country code ${countryCode}`)
  return [0, 0] // Default to center of map if all else fails
}

// Add randomization to avoid overlapping markers
function addRandomOffset(lat: number, lon: number, maxOffset = 1.5): [number, number] {
  const latOffset = (Math.random() - 0.5) * maxOffset
  const lonOffset = (Math.random() - 0.5) * maxOffset
  return [lat + latOffset, lon + lonOffset]
}

export async function GET() {
  try {
    console.log("[v0] Starting nodes API request...")
    console.log("[v0] Fetching nodes from DogecoinEV explorer...")

    const fetchUrl = "https://explorer.dogecoinev.com/ext/getnetworkpeers"
    console.log("[v0] Fetching from URL:", fetchUrl)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)

    const response = await fetch(fetchUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent": "DogecoinEV-Website/1.0",
        Accept: "application/json",
      },
    })

    clearTimeout(timeoutId)

    console.log("[v0] Fetch response status:", response.status)
    console.log("[v0] Fetch response ok:", response.ok)

    if (!response.ok) {
      const errorText = await response.text()
      console.log("[v0] Error response body:", errorText)
      throw new Error(`Failed to fetch nodes: ${response.status} ${response.statusText} - ${errorText}`)
    }

    const responseText = await response.text()
    console.log("[v0] Raw response length:", responseText.length)
    console.log("[v0] Raw response preview:", responseText.substring(0, 200))

    let nodes: Node[]
    try {
      nodes = JSON.parse(responseText)
      console.log("[v0] JSON parsed successfully")
    } catch (parseError) {
      console.log("[v0] JSON parse error:", parseError)
      throw new Error(`Failed to parse JSON response: ${parseError}`)
    }

    console.log("[v0] Parsed nodes count:", nodes.length)
    if (nodes.length > 0) {
      console.log("[v0] First node sample:", nodes[0])
    }

    if (!Array.isArray(nodes)) {
      console.log("[v0] Response is not an array, type:", typeof nodes)
      throw new Error("Expected array of nodes")
    }

    // Count IP occurrences to track duplicates
    const ipCounter = new Map<string, number>()
    nodes.forEach((node) => {
      const ip = node.address
      if (ip) {
        ipCounter.set(ip, (ipCounter.get(ip) || 0) + 1)
      }
    })

    const processedNodes: (Node & { lat: number; lon: number; id: string; nodeCount?: number })[] = []
    const processedKeys = new Set<string>()
    let totalNodeCount = 0

    console.log(`[v0] Processing ${nodes.length} nodes for map...`)

    for (const node of nodes) {
      const ip = node.address
      const port = node.port
      if (!ip || !port) {
        console.log("[v0] Skipping node with no IP or port:", node)
        continue
      }

      const nodeKey = `${ip}:${port}`
      if (processedKeys.has(nodeKey)) {
        console.log(`[v0] Skipping duplicate node: ${nodeKey}`)
        continue
      }

      processedKeys.add(nodeKey)
      const coords = await getCoordinates(ip, node.country_code)

      if (coords) {
        const [baseLat, baseLon] = coords
        const [lat, lon] = addRandomOffset(baseLat, baseLon, 1.5)

        processedNodes.push({
          ...node,
          lat,
          lon,
          id: nodeKey,
        })

        totalNodeCount++
      } else {
        console.log(`[v0] Could not get coordinates for IP: ${ip}`)
      }
    }

    console.log(`[v0] Successfully processed ${processedNodes.length} unique nodes`)

    // Group nodes by country for statistics
    const countryStats = processedNodes.reduce(
      (acc, node) => {
        const country = node.country || "Unknown"
        acc[country] = (acc[country] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    // Get top countries
    const topCountries = Object.entries(countryStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([country, count]) => ({ country, count }))

    const result = {
      nodes: processedNodes,
      total: nodes.length,
      totalNodeCount,
      mapped: processedNodes.length,
      countries: Object.keys(countryStats).length,
      topCountries,
      countryStats,
      lastUpdate: new Date().toISOString(),
      dataSource: "explorer.dogecoinev.com",
    }

    console.log("[v0] Final result summary:", {
      total: result.total,
      totalNodeCount: result.totalNodeCount,
      mapped: result.mapped,
      countries: result.countries,
      topCountries: result.topCountries,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("[v0] Nodes API error details:", error)
    console.error("[v0] Error stack:", error instanceof Error ? error.stack : "No stack trace")

    // Return proper JSON error response
    return NextResponse.json(
      {
        nodes: [],
        total: 0,
        totalNodeCount: 0,
        mapped: 0,
        countries: 0,
        topCountries: [],
        countryStats: {},
        lastUpdate: new Date().toISOString(),
        error: error instanceof Error ? error.message : "Failed to fetch node data",
        dataSource: "fallback",
      },
      { status: 500 },
    )
  }
}
