"use client"

import { cn } from "@/lib/utils"
import React from "react"

export function GridBackground({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative w-full bg-black", className)}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]",
          "[background-size:4rem_4rem]",
          "[mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"
        )}
      />
      {children}
    </div>
  )
}

export function DotBackground({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative w-full bg-black", className)}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
          "[background-size:24px_24px]",
          "[mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"
        )}
      />
      {children}
    </div>
  )
}
