import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DogecoinEV - Next-Generation Blockchain",
    short_name: "DogecoinEV",
    description:
      "A scalable and efficient blockchain solution driven by a passionate community and inspired by Elon's vision for a high-throughput, future-proof cryptocurrency.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#8b5cf6",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
    categories: ["finance", "business", "productivity"],
    icons: [
      {
        src: "/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable any",
      },
    ],
    screenshots: [
      {
        src: "/screenshot-wide.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "DogecoinEV Desktop Experience",
      },
      {
        src: "/screenshot-narrow.png",
        sizes: "750x1334",
        type: "image/png",
        form_factor: "narrow",
        label: "DogecoinEV Mobile Experience",
      },
    ],
    shortcuts: [
      {
        name: "About DogecoinEV",
        short_name: "About",
        description: "Learn about DogecoinEV technology and features",
        url: "/about",
        icons: [{ src: "/icon-192x192.png", sizes: "192x192" }],
      },
      {
        name: "Contact Team",
        short_name: "Contact",
        description: "Get in touch with the DogecoinEV team",
        url: "/contact",
        icons: [{ src: "/icon-192x192.png", sizes: "192x192" }],
      },
      {
        name: "GitHub Repository",
        short_name: "GitHub",
        description: "View the DogecoinEV source code",
        url: "https://github.com/DogecoinEV-Foundation/DogecoinEV",
        icons: [{ src: "/icon-192x192.png", sizes: "192x192" }],
      },
    ],
  }
}
