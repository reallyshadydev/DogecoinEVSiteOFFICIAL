"use client"

import { useState, useEffect } from "react"
import { Download, X, Smartphone, Zap, Wifi, Bell } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed"
    platform: string
  }>
  prompt(): Promise<void>
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [showBenefits, setShowBenefits] = useState(false)

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
      return
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)

      // Show prompt after a delay to not be intrusive
      setTimeout(() => {
        const hasSeenPrompt = sessionStorage.getItem("pwa-prompt-dismissed")
        if (!hasSeenPrompt) {
          setShowPrompt(true)
        }
      }, 8000) // Show after 8 seconds
    }

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowPrompt(false)
      setDeferredPrompt(null)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Show manual installation instructions
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
      const isAndroid = /Android/.test(navigator.userAgent)

      let instructions = "To install this app:\n\n"

      if (isIOS) {
        instructions +=
          "📱 iOS Safari:\n1. Tap the Share button (square with arrow)\n2. Scroll down and tap 'Add to Home Screen'\n3. Tap 'Add' to confirm"
      } else if (isAndroid) {
        instructions +=
          "🤖 Android Chrome:\n1. Tap the menu (three dots)\n2. Tap 'Add to Home Screen'\n3. Tap 'Add' to confirm"
      } else {
        instructions +=
          "💻 Desktop:\n1. Add to Home Screen or look for install option in your browser's address bar\n2. Or use your browser's menu to 'Install App'"
      }

      alert(instructions)
      return
    }

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setShowPrompt(false)
    }

    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    sessionStorage.setItem("pwa-prompt-dismissed", "true")
  }

  const toggleBenefits = () => {
    setShowBenefits(!showBenefits)
  }

  // Don't show if already installed or dismissed this session
  if (isInstalled || !showPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 shadow-2xl border border-white/20 backdrop-blur-md">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Smartphone className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-lg mb-2">Add DogecoinEV to Home Screen</h3>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              Get the full app experience with add to home screen for offline access, faster loading, and push
              notifications.
            </p>

            {/* Benefits Toggle */}
            <button
              onClick={toggleBenefits}
              className="text-white/80 text-xs underline mb-4 hover:text-white transition-colors"
            >
              {showBenefits ? "Hide benefits" : "See all benefits →"}
            </button>

            {/* Benefits List */}
            {showBenefits && (
              <div className="mb-4 space-y-2">
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span>Lightning fast loading</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <Wifi className="w-4 h-4 text-blue-300" />
                  <span>Works offline</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <Bell className="w-4 h-4 text-green-300" />
                  <span>Push notifications</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <Smartphone className="w-4 h-4 text-purple-300" />
                  <span>Native app experience</span>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={handleInstallClick}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 text-sm flex-1 justify-center"
              >
                <Download className="w-4 h-4" />
                Add to Home Screen
              </button>

              <button
                onClick={handleDismiss}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg text-white/80 font-medium transition-all duration-300 text-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-white/60 text-xs mt-3 text-center">
              Free • No registration required • Works on all devices
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
