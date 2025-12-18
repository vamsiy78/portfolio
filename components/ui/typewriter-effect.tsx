"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimate, useInView } from "framer-motion"
import { useEffect } from "react"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: { text: string; className?: string }[]
  className?: string
  cursorClassName?: string
}) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { opacity: 1 },
        { duration: 0.1, delay: (i) => i * 0.1 }
      )
    }
  }, [isInView, animate])

  return (
    <div className={cn("flex items-center", className)} ref={scope}>
      {words.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block mr-2">
          {word.text.split("").map((char, index) => (
            <motion.span
              initial={{ opacity: 0 }}
              key={`char-${index}`}
              className={cn("opacity-0", word.className)}
            >
              {char}
            </motion.span>
          ))}
        </div>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn("inline-block w-[4px] h-8 bg-cyan-500 ml-1", cursorClassName)}
      />
    </div>
  )
}
