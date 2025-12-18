"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

interface ShootingStar {
  id: number
  x: number
  y: number
  angle: number
  scale: number
  speed: number
  distance: number
}

export const ShootingStars = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}: {
  minSpeed?: number
  maxSpeed?: number
  minDelay?: number
  maxDelay?: number
  starColor?: string
  trailColor?: string
  starWidth?: number
  starHeight?: number
  className?: string
}) => {
  const [stars, setStars] = useState<ShootingStar[]>([])

  useEffect(() => {
    const createStar = (): ShootingStar => ({
      id: Date.now() + Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * (window.innerHeight / 2),
      angle: 215 + Math.random() * 10,
      scale: 0.5 + Math.random() * 0.5,
      speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
      distance: 0,
    })

    const addStar = () => {
      setStars((prev) => [...prev, createStar()])
      const delay = minDelay + Math.random() * (maxDelay - minDelay)
      setTimeout(addStar, delay)
    }

    const timeout = setTimeout(addStar, 1000)

    const interval = setInterval(() => {
      setStars((prev) =>
        prev
          .map((star) => ({
            ...star,
            distance: star.distance + star.speed,
          }))
          .filter((star) => star.distance < 1000)
      )
    }, 50)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [minSpeed, maxSpeed, minDelay, maxDelay])

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {stars.map((star) => {
        const rad = (star.angle * Math.PI) / 180
        const x = star.x + Math.cos(rad) * star.distance
        const y = star.y + Math.sin(rad) * star.distance

        return (
          <span
            key={star.id}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: starWidth * star.scale,
              height: starHeight,
              borderRadius: "9999px",
              background: `linear-gradient(90deg, ${starColor}, ${trailColor})`,
              transform: `rotate(${star.angle}deg)`,
              boxShadow: `0 0 ${starWidth}px ${starColor}`,
              opacity: Math.max(0, 1 - star.distance / 800),
            }}
          />
        )
      })}
    </div>
  )
}
