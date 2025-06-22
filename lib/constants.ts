export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dogecoinev.com"

// Helper function to safely create URL for metadata
export function getSiteUrl(): string {
  if (typeof window !== "undefined") {
    // Client side - use current origin
    return window.location.origin
  }

  // Server side - use environment variable or fallback
  return process.env.NEXT_PUBLIC_SITE_URL || "https://dogecoinev.com"
}
