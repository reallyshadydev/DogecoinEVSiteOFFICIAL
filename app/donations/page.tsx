"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DonationsPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the external donations URL
    window.location.href = "https://donations.dogecoinev.com/"
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
        <p className="text-lg text-gray-300">Redirecting to donations page...</p>
        <p className="text-sm text-gray-500 mt-2">
          If you are not redirected automatically,{" "}
          <a
            href="https://donations.dogecoinev.com/"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  )
}
