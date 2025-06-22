import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PWAInstallPrompt from "@/components/pwa-install-prompt"
import MobileNavigation from "@/components/mobile-navigation"
import { ThemeProvider } from "@/components/theme-provider" // Assumed from shadcn/ui setup
import { Toaster } from "@/components/ui/toaster" // For copy-to-clipboard feedback, etc.

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DogecoinEV - Next-Generation Blockchain",
  description:
    "DogecoinEV is a community-driven, scalable, efficient, and future-ready blockchain inspired by Elon's vision for high-throughput cryptocurrency.",
  keywords:
    "DogecoinEV, DEV, blockchain, cryptocurrency, Elon Musk, scalable blockchain, efficient blockchain, community-driven blockchain, future-ready blockchain",
  authors: [{ name: "DogecoinEV Foundation" }],
  openGraph: {
    title: "DogecoinEV - Next-Generation Blockchain",
    description: "Community-driven, scalable, efficient, and future-ready blockchain inspired by Elon's vision.",
    images: ["https://dogecoinev.com/static/img/xcard.png"],
    url: "/",
    siteName: "DogecoinEV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DogecoinEV_",
    title: "DogecoinEV - Next-Generation Blockchain",
    description: "Community-driven, scalable, efficient, and future-ready blockchain inspired by Elon's vision.",
    images: ["https://dogecoinev.com/static/img/xcard.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/icon-192x192.png",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DogecoinEV",
  },
  generator: "v0.dev",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="DogecoinEV" />
        <meta name="application-name" content="DogecoinEV" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="theme-color" content="#8b5cf6" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="mask-icon" href="/icon-192x192.png" color="#8b5cf6" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen">{children}</div>
          <PWAInstallPrompt />
          <MobileNavigation />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
