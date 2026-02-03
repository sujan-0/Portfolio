"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Glass Container */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-sm font-medium"
            >
              Available for Work
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 tracking-tight text-white drop-shadow-lg">
              Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Digital Experiences</span>
              <br /> That Matter
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm Sujan Khatiwoda, a Full-Stack Developer passionate about building beautiful,
              functional, and scalable web applications using the latest technologies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button
                size="lg"
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-blue-500/25 transition-all"
                asChild
              >
                <a href="#projects">View My Work <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-md"
                asChild
              >
                <a href="/resume.pdf" download>Download CV <Download className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6">
              {[
                { icon: Github, href: "https://github.com/sujan-0", label: "Github" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:Sujankhatiwoda0206@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
