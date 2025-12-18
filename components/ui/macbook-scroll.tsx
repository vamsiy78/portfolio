"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export const MacbookScroll = ({
  src,
  title,
  badge,
  showGradient,
  className,
}: {
  src?: string
  title?: string | React.ReactNode
  badge?: React.ReactNode
  showGradient?: boolean
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true)
    }
  }, [])

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 1.5])
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 1.5])
  const translate = useTransform(scrollYProgress, [0, 1], [0, 800])
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0])
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div
      ref={ref}
      className={cn(
        "min-h-[150vh] flex flex-col items-center py-0 md:py-20 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.35] sm:scale-50 relative",
        className
      )}
    >
      <motion.h2
        style={{ translateY: textTransform, opacity: textOpacity }}
        className="text-3xl md:text-5xl font-bold text-center text-white mb-8"
      >
        {title || <span>Featured Projects</span>}
      </motion.h2>
      {badge && <motion.div style={{ opacity: textOpacity }} className="mb-8">{badge}</motion.div>}
      
      <Lid src={src} scaleX={scaleX} scaleY={scaleY} rotate={rotate} translate={translate} />
      <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative z-0">
        <div className="h-10 w-full relative">
          <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
        </div>
        <div className="flex relative">
          <div className="mx-auto w-[10%] overflow-hidden h-full">
            <SpeakerGrid />
          </div>
          <div className="mx-auto w-[80%] h-full">
            <Keypad />
          </div>
          <div className="mx-auto w-[10%] overflow-hidden h-full">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
        {showGradient && (
          <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black to-transparent z-50" />
        )}
      </div>
    </div>
  )
}

const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: any
  scaleY: any
  rotate: any
  translate: any
  src?: string
}) => {
  return (
    <div className="relative [perspective:800px] z-10">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{ boxShadow: "0px 2px 0px 2px var(--neutral-900) inset" }}
          className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
        >
          <span className="text-white">
            <AcesLogo />
          </span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
      >
        <div className="absolute inset-0 bg-[#272729] rounded-lg" />
        <img
          src={src || "/projects/placeholder.png"}
          alt="Project preview"
          className="object-contain object-center absolute rounded-lg inset-0 h-full w-full bg-[#0a0a0a]"
        />
      </motion.div>
    </div>
  )
}

const AcesSLogo = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const AceternityLogo = () => (
  <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white">
    <path d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696" stroke="currentColor" strokeWidth="15" strokeMiterlimit="3.86874" strokeLinecap="round" />
  </svg>
)

const AceternityLogo2 = () => (
  <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white">
    <path d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696" stroke="currentColor" strokeWidth="15" strokeMiterlimit="3.86874" strokeLinecap="round" />
  </svg>
)

const AcesLogo = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)


const Trackpad = () => {
  return (
    <div
      className="w-[40%] mx-auto h-32 rounded-xl my-1"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
        background: "linear-gradient(to bottom, #1a1a1a, #0a0a0a)",
      }}
    />
  )
}

const Keypad = () => {
  return (
    <div className="h-full rounded-md bg-[#050505] mx-1 p-1">
      {/* Row 1 - Function keys */}
      <Row>
        <KBtn className="w-10 items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">esc</KBtn>
        {[...Array(12)].map((_, i) => (
          <KBtn key={i}>
            <span className="block">F{i + 1}</span>
          </KBtn>
        ))}
        <KBtn><span className="block text-[6px]">⏏</span></KBtn>
      </Row>

      {/* Row 2 - Numbers */}
      <Row>
        <KBtn><span className="block">~</span><span className="block mt-1">`</span></KBtn>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((n) => (
          <KBtn key={n}>{n}</KBtn>
        ))}
        <KBtn><span className="block">_</span><span className="block">-</span></KBtn>
        <KBtn><span className="block">+</span><span className="block">=</span></KBtn>
        <KBtn className="w-10 items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">delete</KBtn>
      </Row>

      {/* Row 3 - QWERTY */}
      <Row>
        <KBtn className="w-10 items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">tab</KBtn>
        {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((l) => (
          <KBtn key={l}>{l}</KBtn>
        ))}
        <KBtn><span className="block">{"{"}</span><span className="block">[</span></KBtn>
        <KBtn><span className="block">{"}"}</span><span className="block">]</span></KBtn>
        <KBtn><span className="block">|</span><span className="block">\</span></KBtn>
      </Row>

      {/* Row 4 - ASDF */}
      <Row>
        <KBtn className="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">caps lock</KBtn>
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((l) => (
          <KBtn key={l}>{l}</KBtn>
        ))}
        <KBtn><span className="block">:</span><span className="block">;</span></KBtn>
        <KBtn><span className="block">{'"'}</span><span className="block">{"'"}</span></KBtn>
        <KBtn className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">return</KBtn>
      </Row>

      {/* Row 5 - ZXCV */}
      <Row>
        <KBtn className="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">shift</KBtn>
        {["Z", "X", "C", "V", "B", "N", "M"].map((l) => (
          <KBtn key={l}>{l}</KBtn>
        ))}
        <KBtn><span className="block">{"<"}</span><span className="block">,</span></KBtn>
        <KBtn><span className="block">{">"}</span><span className="block">.</span></KBtn>
        <KBtn><span className="block">?</span><span className="block">/</span></KBtn>
        <KBtn className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">shift</KBtn>
      </Row>

      {/* Row 6 - Bottom */}
      <Row>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <span className="block">fn</span>
          <span className="block text-[6px]">🌐</span>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <span className="block text-[6px]">⌃</span>
          <span className="block">control</span>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <span className="block text-[6px]">⌥</span>
          <span className="block">option</span>
        </KBtn>
        <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
          <span className="block text-[6px]">⌘</span>
          <span className="block">command</span>
        </KBtn>
        <KBtn className="w-[8.2rem]" />
        <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
          <span className="block text-[6px]">⌘</span>
          <span className="block">command</span>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <span className="block text-[6px]">⌥</span>
          <span className="block">option</span>
        </KBtn>
        <div className="w-[4.9rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
          <KBtn className="w-6 h-3"><span className="text-[5px]">▲</span></KBtn>
          <div className="flex">
            <KBtn className="w-6 h-3"><span className="text-[5px]">◀</span></KBtn>
            <KBtn className="w-6 h-3"><span className="text-[5px]">▼</span></KBtn>
            <KBtn className="w-6 h-3"><span className="text-[5px]">▶</span></KBtn>
          </div>
        </div>
      </Row>
    </div>
  )
}

const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string
  children?: React.ReactNode
  childrenClassName?: string
  backlit?: boolean
}) => {
  return (
    <div
      className={cn(
        "p-[0.5px] rounded-[4px]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white/10",
        className
      )}
    >
      <div
        className={cn(
          "h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center",
          childrenClassName
        )}
        style={{
          boxShadow: "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div className={cn("text-white/50 text-[5px] w-full flex justify-center items-center flex-col", childrenClassName)}>
          {children}
        </div>
      </div>
    </div>
  )
}

const Row = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">{children}</div>
}

const SpeakerGrid = () => {
  return (
    <div
      className="flex px-[0.5px] gap-[2px] mt-2 h-40"
      style={{
        backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    />
  )
}
