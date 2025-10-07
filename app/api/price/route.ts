import { NextResponse } from "next/server"

export async function GET() {
  try {
    const exchanges = []
    const errors = []

    // Fetch from CoinPaprika API
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000)

      const coinPaprikaResponse = await fetch("https://api.coinpaprika.com/v1/tickers/dev-dogecoinev", {
        headers: {
          "User-Agent": "DogecoinEV-Site/1.0",
        },
        signal: controller.signal,
        next: { revalidate: 60 },
      })

      clearTimeout(timeoutId)

      if (coinPaprikaResponse.ok) {
        const data = await coinPaprikaResponse.json()
        
        if (data.quotes?.USD) {
          const usdData = data.quotes.USD
          
          exchanges.push({
            name: "CoinPaprika",
            price: parseFloat(usdData.price.toFixed(10)),
            change24h: Number(usdData.percent_change_24h.toFixed(2)),
            volume24h: Math.round(usdData.volume_24h * 100) / 100, // Keep decimal precision
            marketCap: Math.round(usdData.market_cap * 100) / 100, // Keep decimal precision
            rank: data.rank,
            ath: usdData.ath_price,
            athDate: usdData.ath_date,
            athChange: Number(usdData.percent_from_price_ath.toFixed(2)),
            url: "https://coinpaprika.com/coin/dev-dogecoinev/",
          })
        }
      }
    } catch (error) {
      console.log("CoinPaprika API error:", error)
      errors.push("CoinPaprika: " + error.message)
    }


    // Fetch from LiveCoinWatch API
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000)

      const liveCoinWatchResponse = await fetch("https://api.livecoinwatch.com/coins/single", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": "1af68037-18ea-4d5d-8950-75539b96ddba",
        },
        body: JSON.stringify({
          currency: "USD",
          code: "________DEV",
          meta: true,
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (liveCoinWatchResponse.ok) {
        const data = await liveCoinWatchResponse.json()
        const rate = data.rate
        if (rate !== null && rate !== undefined && !isNaN(rate)) {
          exchanges.push({
            name: "LiveCoinWatch",
            price: parseFloat(rate < 1 ? rate.toFixed(10) : rate.toFixed(2)),
            change24h: data.delta?.day || 0,
            volume24h: Math.round((data.volume || 0) * 100) / 100, // Keep decimal precision
            marketCap: Math.round((data.cap || 0) * 100) / 100, // Keep decimal precision
            rank: data.rank || 0,
            url: "https://www.livecoinwatch.com/price/DogecoinEV-________DEV",
          })
        }
      }
    } catch (error) {
      console.log("LiveCoinWatch API error:", error)
      errors.push("LiveCoinWatch: " + error.message)
    }

    // Calculate arbitrage opportunities
    let arbitrage = null
    if (exchanges.length >= 2) {
      const prices = exchanges.map(ex => ex.price).filter(p => p > 0)
      if (prices.length >= 2) {
        const minPrice = Math.min(...prices)
        const maxPrice = Math.max(...prices)
        const priceDifference = maxPrice - minPrice
        const arbitragePercentage = (priceDifference / minPrice) * 100
        
        const cheapestExchange = exchanges.find(ex => ex.price === minPrice)
        const expensiveExchange = exchanges.find(ex => ex.price === maxPrice)
        
        arbitrage = {
          opportunity: arbitragePercentage > 1, // Only show if >1% difference
          percentage: arbitragePercentage,
          priceDifference: priceDifference,
          cheapest: cheapestExchange,
          expensive: expensiveExchange,
          profitPer1000: (priceDifference * 1000).toFixed(8),
        }
      }
    }

    // Return aggregated data
    if (exchanges.length > 0) {
      const primaryExchange = exchanges[0] // Use first successful exchange as primary
      
      return NextResponse.json({
        price: primaryExchange.price.toFixed(10),
        change24h: primaryExchange.change24h || 0,
        volume24h: primaryExchange.volume24h || 0,
        marketCap: primaryExchange.marketCap || 0,
        rank: primaryExchange.rank || 0,
        lastUpdate: new Date().toISOString(),
        source: primaryExchange.name,
        ath: primaryExchange.ath,
        athDate: primaryExchange.athDate,
        athChange: primaryExchange.athChange,
        exchanges: exchanges,
        arbitrage: arbitrage,
        errors: errors,
      })
    }

    // Fallback with mock exchanges for demonstration
    const mockExchanges = [
      {
        name: "CoinPaprika",
        price: 0.0000002164,
        change24h: 96.34,
        volume24h: 19.68,
        marketCap: 6735.00,
        rank: 4446,
        url: "https://coinpaprika.com/coin/dev-dogecoinev/",
      },
    ]

    // Calculate arbitrage for mock data
    const prices = mockExchanges.map(ex => ex.price)
    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)
    const priceDifference = maxPrice - minPrice
    const arbitragePercentage = (priceDifference / minPrice) * 100
    
    const mockArbitrage = {
      opportunity: arbitragePercentage > 1,
      percentage: arbitragePercentage,
      priceDifference: priceDifference,
      cheapest: mockExchanges.find(ex => ex.price === minPrice),
      expensive: mockExchanges.find(ex => ex.price === maxPrice),
      profitPer1000: (priceDifference * 1000).toFixed(8),
    }

    return NextResponse.json({
      price: mockExchanges[0].price.toFixed(10),
      change24h: mockExchanges[0].change24h,
      volume24h: mockExchanges[0].volume24h,
      marketCap: mockExchanges[0].marketCap,
      rank: mockExchanges[0].rank,
      lastUpdate: new Date().toISOString(),
      source: "static_fallback",
      exchanges: mockExchanges,
      arbitrage: mockArbitrage,
      errors: errors,
    })
  } catch (error) {
    console.error("Price API critical error:", error)
    return NextResponse.json(
      {
        price: "0.0000003787",
        change24h: 199.60,
        volume24h: 958.14,
        marketCap: 11750.00,
        rank: 4446,
        lastUpdate: new Date().toISOString(),
        source: "error_fallback",
        exchanges: [],
        arbitrage: null,
        errors: ["All APIs failed"],
      },
      { status: 200 }, // Return 200 to prevent fetch errors in frontend
    )
  }
}
