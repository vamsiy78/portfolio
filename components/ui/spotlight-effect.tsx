"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type SpotlightProps = {
  className?: string
  fill?: string
}

export const SpotlightEffect = ({ className, fill = "white" }: SpotlightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={cn(
        "pointer-events-none absolute z-[1]",
        className
      )}
    >
      <svg
        className="h-[200vh] w-[200vw] lg:w-[150vw]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#spotlight-filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill={fill}
            fillOpacity="0.36"
          />
        </g>
        <defs>
          <filter
            id="spotlight-filter"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur" />
          </filter>
        </defs>
      </svg>
    </motion.div>
  )
}

export const Spotlight = ({ className, fill = "white" }: SpotlightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={cn(
        "pointer-events-none absolute",
        className
      )}
      style={{
        background: `conic-gradient(from 180deg at 50% 50%, ${fill} 0deg, transparent 60deg, transparent 300deg, ${fill} 360deg)`,
        filter: "blur(80px)",
      }}
    />
  )
}
