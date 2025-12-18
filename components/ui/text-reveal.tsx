"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextReveal = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </div>
  )
}

export const GradientText = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  )
}

export const AnimatedGradientText = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <span
      className={cn(
        "animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:200%_auto] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  )
}
