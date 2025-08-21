import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("https://explorer.dogecoinev.com/ext/getnetworkpeers", {
      headers: {
        "User-Agent": "DogecoinEV-Website/1.0",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching network peers:", error)
    return NextResponse.json({ error: "Failed to fetch network peers" }, { status: 500 })
  }
}
