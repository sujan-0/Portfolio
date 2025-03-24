"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className={`relative min-h-screen flex items-center pt-16 hero-section`}>
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <div>
            <p className="text-lg text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4">
              Sujan <span className="gradient-text">Khatiwoda</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground/90">Full-Stack MERN Developer</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">
              Aspiring Full-Stack Developer specializing in AI & ML, Cloud, and Big Data. Building efficient, scalable,
              and user-friendly applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-md">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-md">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex items-center space-x-4 pt-2">
            <a
              href="https://github.com/sujan-0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:Sujankhatiwoda0206@gmail.com"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-md mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden border-4 border-secondary shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1741924910924.jpg-CoGzRI12SrGbPjHUQuSYVXKWMRwpzR.jpeg"
              alt="Sujan Khatiwoda AI Avatar"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

