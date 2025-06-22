"use client"

import { useEffect, useRef, useState } from "react"
import { AlertCircle, RefreshCw, Search, Maximize, MapPin, Crosshair } from "lucide-react"

interface Node {
  createdAt: string
  address: string
  port: string
  protocol: string
  version: string
  country: string
  country_code: string
  lat: number
  lon: number
  id: string
  nodeCount?: number
}

interface MapData {
  nodes: Node[]
  total: number
  totalNodeCount: number
  mapped: number
  countries: number
  topCountries: { country: string; count: number }[]
  lastUpdate: string
  error?: string
}

export default function NodeMap() {
  const [mapData, setMapData] = useState<MapData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mapReady, setMapReady] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [mousePosition, setMousePosition] = useState<{ lat: number; lng: number } | null>(null)
  const mapInstanceRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mapContainerIdRef = useRef<string>("")

  // Country centroids for geolocation fallback
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
    TR: [38.9637, 35.2433],
    ID: [-0.7893, 113.9213],
    SG: [1.3521, 103.8198],
    SE: [60.1282, 18.6435],
  }

  // Get coordinates for an IP
  const getCoordinates = async (ip: string, countryCode: string): Promise<[number, number] | null> => {
    if (countryCode && countryCentroids[countryCode.toUpperCase()]) {
      const [baseLat, baseLon] = countryCentroids[countryCode.toUpperCase()]
      const latOffset = (Math.random() - 0.5) * 2
      const lonOffset = (Math.random() - 0.5) * 2
      return [baseLat + latOffset, baseLon + lonOffset]
    }
    return [0, 0]
  }

  // Fetch and process node data
  const fetchAndProcessNodes = async (): Promise<MapData> => {
    try {
      try {
        const response = await fetch("/api/nodes", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        })

        if (response.ok) {
          const data = await response.json()
          if (data.nodes && Array.isArray(data.nodes)) {
            return {
              nodes: data.nodes,
              total: data.total || data.nodes.length,
              totalNodeCount: data.totalNodeCount || data.nodes.length,
              mapped: data.mapped || data.nodes.length,
              countries: data.countries || 0,
              topCountries: data.topCountries || [],
              lastUpdate: data.lastUpdate || new Date().toISOString(),
            }
          }
        }
      } catch (apiError) {}

      try {
        const response = await fetch("https://explorer.dogecoinev.com/ext/getnetworkpeers", {
          method: "GET",
          headers: {
            "User-Agent": "DogecoinEV-Website/1.0",
            Accept: "application/json",
          },
          mode: "cors",
        })

        if (response.ok) {
          const rawNodes = await response.json()
          return await processRawNodes(rawNodes)
        }
      } catch (directError) {}

      return generateFallbackData()
    } catch (err) {
      return generateFallbackData()
    }
  }

  // Helper function to process raw nodes
  const processRawNodes = async (rawNodes: any[]): Promise<MapData> => {
    if (!Array.isArray(rawNodes)) {
      throw new Error("Invalid data format")
    }

    const ipCounter = new Map<string, number>()
    rawNodes.forEach((node: any) => {
      if (node.address) {
        ipCounter.set(node.address, (ipCounter.get(node.address) || 0) + 1)
      }
    })

    const processedIPs = new Set<string>()
    const processedNodes: Node[] = []
    let totalNodeCount = 0

    for (const node of rawNodes) {
      const ip = node.address
      if (!ip || processedIPs.has(ip)) continue

      processedIPs.add(ip)

      const coords = await getCoordinates(ip, node.country_code)
      if (coords) {
        const nodeCount = ipCounter.get(ip) || 1
        processedNodes.push({
          ...node,
          lat: coords[0],
          lon: coords[1],
          id: `${ip}:${node.port}`,
          nodeCount: nodeCount > 1 ? nodeCount : undefined,
        })
        totalNodeCount += nodeCount
      }
    }

    const countryStats = processedNodes.reduce(
      (acc, node) => {
        const country = node.country || "Unknown"
        const nodeCount = node.nodeCount || 1
        acc[country] = (acc[country] || 0) + nodeCount
        return acc
      },
      {} as Record<string, number>,
    )

    const topCountries = Object.entries(countryStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([country, count]) => ({ country, count }))

    return {
      nodes: processedNodes,
      total: rawNodes.length,
      totalNodeCount,
      mapped: processedNodes.length,
      countries: Object.keys(countryStats).length,
      topCountries,
      lastUpdate: new Date().toISOString(),
    }
  }

  // Generate fallback data for demo purposes
  const generateFallbackData = (): MapData => {
    const demoNodes: Node[] = [
      {
        createdAt: new Date().toISOString(),
        address: "192.168.1.1",
        port: "42069",
        protocol: "70015",
        version: "1.1.0",
        country: "United States",
        country_code: "US",
        lat: 39.8283,
        lon: -98.5795,
        id: "demo-1",
        nodeCount: 5,
      },
      {
        createdAt: new Date().toISOString(),
        address: "10.0.0.1",
        port: "42069",
        protocol: "70015",
        version: "1.1.0",
        country: "Germany",
        country_code: "DE",
        lat: 51.1657,
        lon: 10.4515,
        id: "demo-2",
        nodeCount: 3,
      },
      {
        createdAt: new Date().toISOString(),
        address: "172.16.0.1",
        port: "42069",
        protocol: "70015",
        version: "1.1.0",
        country: "Japan",
        country_code: "JP",
        lat: 36.2048,
        lon: 138.2529,
        id: "demo-3",
        nodeCount: 2,
      },
      {
        createdAt: new Date().toISOString(),
        address: "203.0.113.1",
        port: "42069",
        protocol: "70015",
        version: "1.1.0",
        country: "Australia",
        country_code: "AU",
        lat: -25.2744,
        lon: 133.7751,
        id: "demo-4",
        nodeCount: 1,
      },
      {
        createdAt: new Date().toISOString(),
        address: "198.51.100.1",
        port: "42069",
        protocol: "70015",
        version: "1.1.0",
        country: "Canada",
        country_code: "CA",
        lat: 56.1304,
        lon: -106.3468,
        id: "demo-5",
        nodeCount: 4,
      },
    ]

    return {
      nodes: demoNodes,
      total: 15,
      totalNodeCount: 15,
      mapped: 5,
      countries: 5,
      topCountries: [
        { country: "United States", count: 5 },
        { country: "Canada", count: 4 },
        { country: "Germany", count: 3 },
        { country: "Japan", count: 2 },
        { country: "Australia", count: 1 },
      ],
      lastUpdate: new Date().toISOString(),
    }
  }

  // Clean up existing map
  const cleanupMap = () => {
    if (mapInstanceRef.current) {
      try {
        if (typeof mapInstanceRef.current.remove === "function") {
          mapInstanceRef.current.remove()
        } else if (typeof mapInstanceRef.current.off === "function") {
          mapInstanceRef.current.off()
        }
      } catch (mapError) {
      } finally {
        mapInstanceRef.current = null
      }
    }

    const container = containerRef.current
    if (container) {
      try {
        const newDiv = document.createElement("div")
        newDiv.className = container.className
        newDiv.style.cssText = container.style.cssText
        const parent = container.parentNode
        if (parent) {
          parent.replaceChild(newDiv, container)
          ;(containerRef as any).current = newDiv
        } else {
          container.innerHTML = ""
        }
      } catch (containerError) {
        try {
          if (container) {
            container.innerHTML = ""
          }
        } catch (innerError) {}
      }
    }

    mapContainerIdRef.current = ""
  }

  // Load Leaflet via CDN
  const loadLeafletFromCDN = async (): Promise<{ L: any; MarkerClusterGroup: any }> => {
    return new Promise((resolve, reject) => {
      if (typeof window !== "undefined" && (window as any).L) {
        const L = (window as any).L
        const MarkerClusterGroup = (window as any).L?.markerClusterGroup || L.MarkerClusterGroup
        if (MarkerClusterGroup) {
          resolve({ L, MarkerClusterGroup })
          return
        }
      }

      const cssLinks = [
        "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
        "https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css",
        "https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css",
      ]

      let cssLoaded = 0
      cssLinks.forEach((href) => {
        if (document.querySelector(`link[href="${href}"]`)) {
          cssLoaded++
          if (cssLoaded === cssLinks.length) {
            loadScripts()
          }
          return
        }

        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = href
        link.onload = () => {
          cssLoaded++
          if (cssLoaded === cssLinks.length) {
            loadScripts()
          }
        }
        link.onerror = () => {
          cssLoaded++
          if (cssLoaded === cssLinks.length) {
            loadScripts()
          }
        }
        document.head.appendChild(link)
      })

      function loadScripts() {
        const leafletScript = document.createElement("script")
        leafletScript.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        leafletScript.onload = () => {
          const clusterScript = document.createElement("script")
          clusterScript.src = "https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"
          clusterScript.onload = () => {
            setTimeout(() => {
              const L = (window as any).L
              if (L) {
                try {
                  delete (L.Icon.Default.prototype as any)._getIconUrl
                  L.Icon.Default.mergeOptions({
                    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
                    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
                    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
                  })
                } catch (iconError) {}
                const MarkerClusterGroup = L.MarkerClusterGroup || L.markerClusterGroup
                if (MarkerClusterGroup) {
                  resolve({ L, MarkerClusterGroup })
                } else {
                  reject(new Error("MarkerClusterGroup not available"))
                }
              } else {
                reject(new Error("Leaflet not available"))
              }
            }, 500)
          }
          clusterScript.onerror = () => {
            reject(new Error("Failed to load MarkerCluster"))
          }
          document.head.appendChild(clusterScript)
        }
        leafletScript.onerror = () => {
          reject(new Error("Failed to load Leaflet"))
        }
        document.head.appendChild(leafletScript)
      }

      setTimeout(() => {
        reject(new Error("CDN loading timeout"))
      }, 15000)
    })
  }

  // Initialize map
  const initializeMap = async (nodeData: MapData) => {
    try {
      const container = containerRef.current
      if (!container) {
        throw new Error("Map container ref not found")
      }

      if (container.offsetWidth === 0 || container.offsetHeight === 0) {
        container.style.width = "100%"
        container.style.height = "600px"
        container.style.minHeight = "600px"
        await new Promise((resolve) => setTimeout(resolve, 100))
      }

      cleanupMap()

      const currentContainer = containerRef.current
      if (!currentContainer) {
        throw new Error("Container lost during cleanup")
      }

      let L: any, MarkerClusterGroup: any
      try {
        const modules = await loadLeafletFromCDN()
        L = modules.L
        MarkerClusterGroup = modules.MarkerClusterGroup
      } catch (moduleError) {
        throw new Error(`Failed to load Leaflet modules: ${moduleError}`)
      }

      const containerId = `map-container-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      mapContainerIdRef.current = containerId
      currentContainer.id = containerId
      currentContainer.innerHTML = ""
      currentContainer.style.position = "relative"
      currentContainer.style.zIndex = "1"
      currentContainer.style.background = "#1a1a1a"
      currentContainer.style.width = "100%"
      currentContainer.style.height = "100%"
      currentContainer.style.minHeight = "600px"

      await new Promise((resolve) => setTimeout(resolve, 300))

      let map: any
      try {
        map = L.map(mapContainerIdRef.current, {
          center: [20, 0],
          zoom: 2,
          minZoom: 1,
          maxZoom: 18,
          zoomControl: true,
          scrollWheelZoom: true,
          doubleClickZoom: true,
          dragging: true,
          touchZoom: true,
          preferCanvas: true,
          renderer: L.canvas(),
        })

        mapInstanceRef.current = map
        if (!map.getContainer()) {
          throw new Error("Map container not properly initialized")
        }
      } catch (mapError) {
        throw new Error(`Failed to create map: ${mapError}`)
      }

      try {
        const tileLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          subdomains: "abcd",
          maxZoom: 18,
          errorTileUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
        })
        tileLayer.addTo(map)
      } catch (tileError) {}

      try {
        L.control.scale({ position: "bottomleft" }).addTo(map)
      } catch (scaleError) {}

      try {
        map.on("mousemove", (e: any) => {
          try {
            setMousePosition({ lat: e.latlng.lat, lng: e.latlng.lng })
          } catch (mouseError) {}
        })
      } catch (mouseError) {}

      let markerCluster: any
      try {
        markerCluster = new MarkerClusterGroup({
          showCoverageOnHover: false,
          spiderfyOnMaxZoom: true,
          maxClusterRadius: 50,
          disableClusteringAtZoom: 10,
          animate: true,
          animateAddingMarkers: false,
          iconCreateFunction: (cluster: any) => {
            const count = cluster.getChildCount()
            const size = count > 50 ? "large" : count > 10 ? "medium" : "small"

            return L.divIcon({
              html: `<div style="
                background: linear-gradient(135deg, #f97316, #ea580c);
                color: white;
                border-radius: 50%;
                text-align: center;
                font-weight: bold;
                border: 2px solid white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.4);
                width: ${size === "small" ? "30px" : size === "medium" ? "40px" : "50px"};
                height: ${size === "small" ? "30px" : size === "medium" ? "40px" : "50px"};
                line-height: ${size === "small" ? "26px" : size === "medium" ? "36px" : "46px"};
                font-size: ${size === "small" ? "12px" : size === "medium" ? "14px" : "16px"};
              ">${count}</div>`,
              className: "custom-cluster-icon",
              iconSize: L.point(
                size === "small" ? 30 : size === "medium" ? 40 : 50,
                size === "small" ? 30 : size === "medium" ? 40 : 50,
              ),
            })
          },
        })
      } catch (clusterError) {
        throw new Error(`Failed to create marker cluster: ${clusterError}`)
      }

      const countryMarkers: { [key: string]: any[] } = {}
      try {
        for (let i = 0; i < nodeData.nodes.length; i++) {
          const node = nodeData.nodes[i]
          if (!node.lat || !node.lon || isNaN(node.lat) || isNaN(node.lon)) {
            continue
          }

          const customIcon = L.divIcon({
            className: "custom-node-icon",
            html: `
              <div style="
                background: linear-gradient(135deg, #f97316, #ea580c);
                width: 24px;
                height: 24px;
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 12px;
                font-weight: bold;
              ">
                🚀
              </div>
            `,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15],
          })

          const nodeCountText =
            node.nodeCount && node.nodeCount > 1 ? `<div><strong>Nodes:</strong> ${node.nodeCount}</div>` : ""

          const popupContent = `
            <div style="font-family: system-ui; font-size: 14px;">
              <div style="font-weight: bold; margin-bottom: 8px; color: #f97316;">${node.country || "Unknown"}</div>
              <div><strong>IP:</strong> ${node.address}</div>
              ${nodeCountText}
              <div><strong>Version:</strong> ${node.version || "N/A"}</div>
              <div><strong>Protocol:</strong> ${node.protocol || "N/A"}</div>
            </div>
          `

          const marker = L.marker([node.lat, node.lon], { icon: customIcon }).bindPopup(popupContent, {
            maxWidth: 300,
            closeButton: true,
            autoClose: true,
          })

          const country = node.country || "Unknown"
          if (!countryMarkers[country]) {
            countryMarkers[country] = []
          }
          countryMarkers[country].push(marker)

          markerCluster.addLayer(marker)
        }
      } catch (markersError) {}

      try {
        map.addLayer(markerCluster)
        ;(map as any).countryMarkers = countryMarkers
      } catch (addLayerError) {}

      const resizeAttempts = [100, 300, 500, 1000]
      resizeAttempts.forEach((delay, index) => {
        setTimeout(() => {
          try {
            if (map && mapInstanceRef.current === map && map.invalidateSize) {
              map.invalidateSize(true)
            }
          } catch (resizeError) {}
        }, delay)
      })

      setTimeout(() => {
        setMapReady(true)
      }, 600)
    } catch (err) {
      throw err
    }
  }

  // Handle search
  const handleSearch = (country: string) => {
    if (!mapInstanceRef.current || !country) return

    const map = mapInstanceRef.current
    const countryMarkers = (map as any).countryMarkers

    if (countryMarkers && countryMarkers[country]) {
      const markers = countryMarkers[country]
      if (markers.length > 0) {
        const marker = markers[0]
        const latLng = marker.getLatLng()
        map.setView([latLng.lat, latLng.lng], 6)
        marker.openPopup()
      }
    }
  }

  // Toggle fullscreen
  const toggleFullscreen = () => {
    const container = containerRef.current
    if (!container) return

    if (!document.fullscreenElement) {
      container.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // Locate user
  const locateUser = () => {
    if (navigator.geolocation && mapInstanceRef.current) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          mapInstanceRef.current.setView([latitude, longitude], 10)
        },
        (error) => {
          alert("Could not get your location")
        },
      )
    }
  }

  // Main effect
  useEffect(() => {
    let mounted = true
    let timeoutId: NodeJS.Timeout

    const loadEverything = async () => {
      try {
        setLoading(true)
        setError(null)

        timeoutId = setTimeout(() => {
          if (mounted) {
            setError("Map loading timed out. Please refresh the page.")
            setLoading(false)
          }
        }, 45000)

        const nodeData = await fetchAndProcessNodes()
        if (!mounted) {
          return
        }

        setMapData(nodeData)

        let containerReady = false
        let attempts = 0
        const maxAttempts = 20

        while (!containerReady && attempts < maxAttempts && mounted) {
          await new Promise((resolve) => setTimeout(resolve, 250))
          if (containerRef.current && containerRef.current.offsetWidth > 0) {
            containerReady = true
          } else {
            attempts++
          }
        }

        if (!containerReady) {
          throw new Error("Container failed to initialize after maximum attempts")
        }

        if (!mounted) {
          return
        }

        await initializeMap(nodeData)

        if (mounted) {
          clearTimeout(timeoutId)
          setLoading(false)
        }
      } catch (err) {
        if (mounted) {
          clearTimeout(timeoutId)
          setError(err instanceof Error ? err.message : "Failed to load map")
          setLoading(false)
        }
      }
    }

    loadEverything()

    return () => {
      mounted = false
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      cleanupMap()
    }
  }, [])

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize()
        }
      }, 100)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const countries = mapData ? [...new Set(mapData.nodes.map((node) => node.country).filter(Boolean))].sort() : []

  return (
    <div className="relative w-full h-[600px]">
      <div
        ref={containerRef}
        className="w-full h-full rounded-xl overflow-hidden border border-orange-500/30"
        style={{
          background: "#1a1a1a",
          minHeight: "600px",
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/95">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-orange-400 text-xl font-bold">Loading DogecoinEV Network</p>
              <p className="text-gray-400 text-sm mt-2">Fetching live node data from explorer...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/20">
            <div className="text-center text-red-400 max-w-2xl p-4">
              <AlertCircle className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Network Map Unavailable</h3>
              <p className="text-sm mb-6">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors duration-200 font-medium flex items-center gap-2 mx-auto"
              >
                <RefreshCw className="w-4 h-4" />
                Retry Connection
              </button>
            </div>
          </div>
        )}
      </div>

      {mapReady && !loading && !error && (
        <>
          <div className="absolute top-5 right-5 z-10">
            <div className="bg-black/90 backdrop-blur-sm rounded-lg border border-orange-500/50 p-2">
              <div className="flex items-center gap-2 mb-2">
                <Search className="w-4 h-4 text-orange-400" />
                <select
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    if (e.target.value) {
                      handleSearch(e.target.value)
                    }
                  }}
                  className="bg-transparent text-white text-sm border-none outline-none"
                >
                  <option value="">Search by country</option>
                  {countries.map((country) => (
                    <option key={country} value={country} className="bg-gray-800">
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={toggleFullscreen}
                className="w-full flex items-center gap-2 px-2 py-1 text-orange-400 hover:text-orange-300 transition-colors text-sm"
              >
                <Maximize className="w-4 h-4" />
                {isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
              </button>

              <button
                onClick={locateUser}
                className="w-full flex items-center gap-2 px-2 py-1 text-orange-400 hover:text-orange-300 transition-colors text-sm mt-1"
              >
                <Crosshair className="w-4 h-4" />
                Locate Me
              </button>
            </div>
          </div>

          {mousePosition && (
            <div className="absolute bottom-5 right-5 bg-black/90 backdrop-blur-sm rounded-lg p-2 border border-orange-500/50 text-xs text-orange-400">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Lat/Lon: {mousePosition.lat.toFixed(4)}, {mousePosition.lng.toFixed(4)}
              </div>
            </div>
          )}

          {mapData && (
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm rounded-lg p-4 border border-orange-500/50 text-center">
              <div className="text-orange-400 font-bold text-lg">
                <span>TOTAL NODES:</span>
                <span className="text-white ml-2">{mapData.totalNodeCount}</span>
                <span className="mx-3 text-orange-300">|</span>
                <span>UNIQUE IPs:</span>
                <span className="text-white ml-2">{mapData.mapped}</span>
                <span className="mx-3 text-orange-300">|</span>
                <span>COUNTRIES:</span>
                <span className="text-white ml-2">{mapData.countries}</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Updated: {new Date(mapData.lastUpdate).toLocaleTimeString()}
              </div>
            </div>
          )}

          <div className="absolute bottom-5 left-5 bg-black/90 backdrop-blur-sm rounded-lg p-3 border border-orange-500/50">
            <div className="text-orange-400 font-bold text-sm font-mono">DEV NETWORK</div>
          </div>

          {mapData && mapData.topCountries.length > 0 && !mousePosition && (
            <div className="absolute bottom-20 left-5 bg-black/90 backdrop-blur-sm rounded-lg p-3 border border-orange-500/50 max-w-xs">
              <div className="text-orange-400 font-bold text-sm mb-2">🌍 Top Countries</div>
              <div className="space-y-1">
                {mapData.topCountries.slice(0, 3).map((country, index) => (
                  <div key={index} className="flex justify-between text-xs">
                    <span className="text-gray-300">{country.country}</span>
                    <span className="text-orange-300 font-bold">{country.count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
