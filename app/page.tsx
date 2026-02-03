import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import RippleBackground from "@/components/ripple-background"

export default function Home() {
  return (
    <main className="min-h-screen relative text-white">
      <RippleBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

