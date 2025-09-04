import { NextResponse } from "next/server"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

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

// Country centroids for fallback geolocation (matching your Python logic)
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

// Cache file path
const cacheDir = path.join(process.cwd(), "cache")
const cacheFile = path.join(cacheDir, "node_location_cache.json")

// Load geolocation cache
async function loadCache(): Promise<Record<string, CachedLocation>> {
  try {
    if (existsSync(cacheFile)) {
      const data = await readFile(cacheFile, "utf-8")
      return JSON.parse(data)
    }
  } catch (error) {
    console.error("Error loading cache:", error)
  }
  return {}
}

// Save geolocation cache
async function saveCache(cache: Record<string, CachedLocation>): Promise<void> {
  try {
    // Ensure cache directory exists
    if (!existsSync(cacheDir)) {
      await mkdir(cacheDir, { recursive: true })
    }
    await writeFile(cacheFile, JSON.stringify(cache, null, 2))
  } catch (error) {
    console.error("Error saving cache:", error)
  }
}

// Validate IP address (matching your Python logic)
function isValidIP(ip: string): boolean {
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  return ipv4Regex.test(ip)
}

// Get coordinates for an IP with multiple service fallbacks (matching your Python logic)
async function getCoordinates(
  ip: string,
  countryCode: string,
  cache: Record<string, CachedLocation>,
): Promise<[number, number] | null> {
  if (!isValidIP(ip)) {
    return null
  }

  // Check cache first
  if (cache[ip]) {
    return [cache[ip].lat, cache[ip].lon]
  }

  // Try multiple geolocation services for better accuracy (matching your Python services)
  const services = [`https://ip-api.com/json/${ip}`, `https://ipinfo.io/${ip}/json`, `https://ipapi.co/${ip}/json/`]

  for (const url of services) {
    try {
      const response = await fetch(url, {
        timeout: 5000,
        headers: {
          "User-Agent": "DogecoinEV-Website/1.0",
        },
      })

      if (response.ok) {
        const data = await response.json()

        let coords: [number, number] | null = null

        // Handle different API response formats (matching your Python logic)
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
          // Cache the result
          cache[ip] = { lat: coords[0], lon: coords[1] }
          return coords
        }
      }
    } catch (error) {
      console.error(`Error fetching coordinates from ${url}:`, error)
    }
  }

  // Fallback to country centroid if all services fail (matching your Python logic)
  if (countryCode && countryCentroids[countryCode.toUpperCase()]) {
    const coords = countryCentroids[countryCode.toUpperCase()]
    cache[ip] = { lat: coords[0], lon: coords[1] }
    return coords
  }

  // If country code not found in centroids, use default location
  console.log(`No coordinates found for IP ${ip} with country code ${countryCode}`)
  return [0, 0] // Default to center of map if all else fails
}

// Add randomization to avoid overlapping markers (enhanced from original)
function addRandomOffset(lat: number, lon: number, maxOffset = 1.5): [number, number] {
  const latOffset = (Math.random() - 0.5) * maxOffset
  const lonOffset = (Math.random() - 0.5) * maxOffset
  return [lat + latOffset, lon + lonOffset]
}

export async function GET() {
  try {
    console.log("Fetching nodes from DogecoinEV explorer...")

    // Load cache
    const cache = await loadCache()

    // Fetch nodes from DogecoinEV explorer
    const response = await fetch("https://explorer.dogecoinev.com/ext/getnetworkpeers", {
      headers: {
        "User-Agent": "DogecoinEV-Website/1.0",
        Accept: "application/json",
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    console.log("Response status:", response.status)

    if (!response.ok) {
      throw new Error(`Failed to fetch nodes: ${response.status} ${response.statusText}`)
    }

    const nodes: Node[] = await response.json()
    console.log("Parsed nodes count:", nodes.length)

    if (!Array.isArray(nodes)) {
      throw new Error("Expected array of nodes")
    }

    // Count IP occurrences to track duplicates (matching your Python logic)
    const ipCounter = new Map<string, number>()
    nodes.forEach((node) => {
      const ip = node.address
      if (ip) {
        ipCounter.set(ip, (ipCounter.get(ip) || 0) + 1)
      }
    })

    // Process nodes and add coordinates (matching your Python logic)
    const processedIPs = new Set<string>()
    const processedNodes: (Node & { lat: number; lon: number; id: string; nodeCount?: number })[] = []
    let totalNodeCount = 0

    console.log(`Processing ${nodes.length} nodes for map...`)

    for (const node of nodes) {
      const ip = node.address
      if (!ip) {
        console.log("Skipping node with no IP address:", node)
        continue
      }

      if (processedIPs.has(ip)) {
        console.log(`Skipping duplicate IP: ${ip}`)
        continue
      }

      processedIPs.add(ip)
      const coords = await getCoordinates(ip, node.country_code, cache)

      if (coords) {
        const [baseLat, baseLon] = coords
        const [lat, lon] = addRandomOffset(baseLat, baseLon, 1.5)

        const nodeCount = ipCounter.get(ip) || 1
        processedNodes.push({
          ...node,
          lat,
          lon,
          id: `${ip}:${node.port}`,
          nodeCount: nodeCount > 1 ? nodeCount : undefined,
        })

        // Count all nodes, including duplicates on the same IP (matching your Python logic)
        totalNodeCount += nodeCount
      } else {
        console.log(`Could not get coordinates for IP: ${ip}`)
      }
    }

    // Save updated cache
    await saveCache(cache)

    console.log(`Successfully processed ${processedNodes.length} unique IPs with ${totalNodeCount} total nodes`)

    // Group nodes by country for statistics
    const countryStats = processedNodes.reduce(
      (acc, node) => {
        const country = node.country || "Unknown"
        const nodeCount = node.nodeCount || 1
        acc[country] = (acc[country] || 0) + nodeCount
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

    console.log("Final result summary:", {
      total: result.total,
      totalNodeCount: result.totalNodeCount,
      mapped: result.mapped,
      countries: result.countries,
      topCountries: result.topCountries,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("Nodes API error:", error)

    // Return fallback data in case of error
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
