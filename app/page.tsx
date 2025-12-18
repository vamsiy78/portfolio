import Navigation from "@/components/layout/Navigation"
import FloatingNav from "@/components/layout/FloatingNav"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"
import Certifications from "@/components/sections/Certifications"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  )
}
