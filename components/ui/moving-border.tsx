"use client"

import React from "react"
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface MovingBorderProps {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
  className?: string
  containerClassName?: string
  borderClassName?: string
  as?: "div" | "button" | "a" | "span"
  [key: string]: unknown
}

export function MovingBorder({
  children,
  duration = 2000,
  rx = "30%",
  ry = "30%",
  className,
  containerClassName,
  borderClassName,
  as = "div",
  ...otherProps
}: MovingBorderProps) {
  const content = (
    <>
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${rx} * 0.96) calc(${ry} * 0.96)` }}
      >
        <MovingBorderSvg duration={duration} rx={rx} ry={ry}>
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#fff_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorderSvg>
      </div>

      <div
        className={cn(
          "relative bg-black/80 border border-white/10 backdrop-blur-xl",
          className
        )}
        style={{ borderRadius: `calc(${rx} * 0.96) calc(${ry} * 0.96)` }}
      >
        {children}
      </div>
    </>
  )

  const wrapperClassName = cn(
    "bg-transparent relative text-xl p-[1px] overflow-hidden",
    containerClassName
  )

  if (as === "button") {
    return (
      <button className={wrapperClassName} {...(otherProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        {content}
      </button>
    )
  }

  if (as === "a") {
    return (
      <a className={wrapperClassName} {...(otherProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    )
  }

  if (as === "span") {
    return (
      <span className={wrapperClassName} {...(otherProps as React.HTMLAttributes<HTMLSpanElement>)}>
        {content}
      </span>
    )
  }

  return (
    <div className={wrapperClassName} {...(otherProps as React.HTMLAttributes<HTMLDivElement>)}>
      {content}
    </div>
  )
}

export const MovingBorderSvg = ({
  children,
  duration = 2000,
  rx = "30%",
  ry = "30%",
}: {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
}) => {
  const pathRef = useRef<SVGRectElement>(null)
  const progress = useMotionValue<number>(0)

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength()
    if (length) {
      const pxPerMillisecond = length / duration
      progress.set((time * pxPerMillisecond) % length)
    }
  })

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x)
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y)

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  )
}
