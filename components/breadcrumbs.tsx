"use client"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href: string
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  if (!pathname) return null

  const pathSegments = pathname.split("/").filter(Boolean)

  const breadcrumbItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }]

  let currentPath = ""
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    breadcrumbItems.push({ label, href: currentPath })
  })

  if (breadcrumbItems.length <= 1) {
    return null // Don't show breadcrumbs on the homepage itself or if only one item
  }

  return null
}
