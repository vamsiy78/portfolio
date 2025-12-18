"use client"

import { cn } from "@/lib/utils"
import React from "react"

export const AuroraBackground = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-screen items-center justify-center bg-black text-white transition-bg overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "pointer-events-none absolute -inset-[10px] opacity-50",
            "[--aurora:repeating-linear-gradient(100deg,#3b82f6_10%,#8b5cf6_15%,#06b6d4_20%,#3b82f6_25%,#8b5cf6_30%)]",
            "[background-image:var(--aurora)]",
            "[background-size:300%_200%]",
            "[background-position:50%_50%]",
            "filter blur-[100px]",
            "animate-aurora"
          )}
        />
      </div>
      {children}
    </div>
  )
}
