"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export const Vortex = ({
  children,
  className,
  containerClassName,
  particleCount = 500,
  baseHue = 220,
  rangeY = 100,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = "transparent",
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  particleCount?: number
  baseHue?: number
  rangeY?: number
  baseSpeed?: number
  rangeSpeed?: number
  baseRadius?: number
  rangeRadius?: number
  backgroundColor?: string
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let tick = 0
    const center = { x: 0, y: 0 }

    const resize = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
      center.x = canvas.width / 2
      center.y = canvas.height / 2
    }

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
      life: number
      maxLife: number

      constructor() {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * 300 + 50
        this.x = center.x + Math.cos(angle) * distance
        this.y = center.y + Math.sin(angle) * distance
        this.vx = 0
        this.vy = 0
        this.radius = baseRadius + Math.random() * rangeRadius
        const hue = baseHue + Math.random() * 60
        this.color = `hsla(${hue}, 80%, 60%, 0.8)`
        this.life = 0
        this.maxLife = 200 + Math.random() * 200
      }

      update() {
        const dx = center.x - this.x
        const dy = center.y - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const angle = Math.atan2(dy, dx)
        
        // Spiral inward
        const spiralAngle = angle + Math.PI / 2
        const force = 0.5 / (dist + 1)
        
        this.vx += Math.cos(spiralAngle) * force * 2 + Math.cos(angle) * force
        this.vy += Math.sin(spiralAngle) * force * 2 + Math.sin(angle) * force
        
        this.vx *= 0.98
        this.vy *= 0.98
        
        this.x += this.vx
        this.y += this.vy
        this.life++

        if (this.life > this.maxLife || dist < 10) {
          this.reset()
        }
      }

      reset() {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * 200 + 250
        this.x = center.x + Math.cos(angle) * distance
        this.y = center.y + Math.sin(angle) * distance
        this.vx = 0
        this.vy = 0
        this.life = 0
        this.maxLife = 200 + Math.random() * 200
      }

      draw() {
        if (!ctx) return
        const alpha = Math.min(1, (this.maxLife - this.life) / 50, this.life / 20)
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color.replace("0.8", String(alpha * 0.8))
        ctx.fill()
      }
    }

    const init = () => {
      resize()
      particles = Array.from({ length: particleCount }, () => new Particle())
    }

    const animate = () => {
      if (!ctx) return
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.update()
        p.draw()
      })

      tick++
      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [particleCount, baseHue, rangeY, baseSpeed, rangeSpeed, baseRadius, rangeRadius, backgroundColor])

  return (
    <div ref={containerRef} className={cn("relative h-full w-full overflow-hidden", containerClassName)}>
      <motion.canvas
        ref={canvasRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0"
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}
