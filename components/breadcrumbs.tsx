"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

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

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
      <ol className="flex items-center space-x-1.5">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-1.5 text-gray-400 dark:text-gray-600" />}
            {index === breadcrumbItems.length - 1 ? (
              <span className="font-medium text-foreground" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-primary hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
