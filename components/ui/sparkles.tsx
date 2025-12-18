"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SparkleType {
  id: string
  x: string
  y: string
  color: string
  delay: number
  scale: number
}

export const SparklesCore = ({
  id,
  className,
  background,
  minSize = 0.5,
  maxSize = 1,
  particleDensity = 100,
  particleColor = "#FFF",
}: {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  particleColor?: string
}) => {
  const [sparkles, setSparkles] = useState<SparkleType[]>([])

  useEffect(() => {
    const newSparkles: SparkleType[] = []

    for (let i = 0; i < particleDensity; i++) {
      newSparkles.push({
        id: `sparkle-${i}`,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        color: particleColor,
        delay: Math.random() * 2,
        scale: Math.random() * (maxSize - minSize) + minSize,
      })
    }
    setSparkles(newSparkles)
  }, [maxSize, minSize, particleColor, particleDensity])

  if (sparkles.length === 0) return null

  return (
    <div
      id={id}
      className={cn("absolute inset-0 overflow-hidden", className)}
      style={{ background: background || "transparent" }}
    >
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute inline-block rounded-full"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.scale * 2,
            height: sparkle.scale * 2,
            backgroundColor: sparkle.color,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
