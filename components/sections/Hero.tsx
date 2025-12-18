"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FlipWords } from "@/components/ui/flip-words"
import { SparklesCore } from "@/components/ui/sparkles"
import { Spotlight } from "@/components/ui/spotlight"
import { cn } from "@/lib/utils"
import { FolderOpen } from "lucide-react"
import dynamic from "next/dynamic"

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
  loading: () => <div className="w-full h-full" />
})

const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 12.9716, lng: 77.5946 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
}

const colors = ["#06b6d4", "#3b82f6", "#6366f1"]

const sampleArcs = [
  { order: 1, startLat: 12.9716, startLng: 77.5946, endLat: 17.385, endLng: 78.4867, arcAlt: 0.1, color: colors[0] },
  { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 12.9716, endLng: 77.5946, arcAlt: 0.2, color: colors[1] },
  { order: 2, startLat: 12.9716, startLng: 77.5946, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.5, color: colors[2] },
  { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 12.9716, endLng: 77.5946, arcAlt: 0.3, color: colors[0] },
  { order: 3, startLat: 12.9716, startLng: 77.5946, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.2, color: colors[1] },
  { order: 3, startLat: 35.6762, startLng: 139.6503, endLat: 12.9716, endLng: 77.5946, arcAlt: 0.4, color: colors[2] },
  { order: 4, startLat: 12.9716, startLng: 77.5946, endLat: 40.7128, endLng: -74.006, arcAlt: 0.6, color: colors[0] },
  { order: 4, startLat: -33.8688, startLng: 151.2093, endLat: 12.9716, endLng: 77.5946, arcAlt: 0.5, color: colors[1] },
  { order: 5, startLat: 12.9716, startLng: 77.5946, endLat: 52.52, endLng: 13.405, arcAlt: 0.3, color: colors[2] },
  { order: 5, startLat: 22.3193, startLng: 114.1694, endLat: 12.9716, endLng: 77.5946, arcAlt: 0.2, color: colors[0] },
]

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const words = ["scalable applications", "AI-powered solutions", "cloud architectures", "full-stack systems"]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black antialiased">
      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      {/* Sparkles */}
      <div className="absolute inset-0">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={30}
          particleColor="#ffffff"
        />
      </div>

      {/* Globe - Desktop only, positioned right-center */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[550px] h-[550px] xl:w-[650px] xl:h-[650px] opacity-60 pointer-events-none hidden lg:block">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:max-w-[50%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 flex justify-center lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent mb-4"
            >
              Y Naga Vamsi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-neutral-400 mb-2"
            >
              Software Engineer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-neutral-300 mb-8 sm:mb-10 leading-relaxed h-8 sm:h-12"
            >
              I build <FlipWords words={words} className="text-cyan-400" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                onClick={scrollToProjects} 
                className="group bg-white text-black hover:bg-white/90"
              >
                <FolderOpen className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
