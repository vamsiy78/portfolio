"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beams = [
    { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
    { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
    { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7, className: "h-6" },
    { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
    { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, className: "h-20" },
    { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "h-12" },
    { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 2, className: "h-6" },
  ]

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {beams.map((beam, idx) => (
        <motion.div
          key={`beam-${idx}`}
          initial={{ y: "-100%", x: beam.initialX }}
          animate={{ y: "100%", x: beam.translateX }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: beam.delay || 0,
            repeatDelay: beam.repeatDelay,
          }}
          className={cn(
            "absolute left-0 top-0 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent",
            beam.className || "h-40"
          )}
        />
      ))}
      {/* Horizontal beams */}
      {[200, 400, 600].map((y, idx) => (
        <motion.div
          key={`h-beam-${idx}`}
          initial={{ x: "-100%", y }}
          animate={{ x: "100%", y }}
          transition={{
            duration: 8 + idx * 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: idx * 3,
          }}
          className="absolute top-0 left-0 h-px w-40 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"
        />
      ))}
    </div>
  )
}
