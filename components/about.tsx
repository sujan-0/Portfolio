"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Cloud, Code, Database } from "lucide-react"
import { useTheme } from "next-themes"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { theme } = useTheme()

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="section-padding py-24 section-alt">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="divider"></div>
        <p className="section-subtitle">
          I'm a passionate Computer Science student specializing in AI & ML, Cloud, and Big Data. I love building
          efficient, scalable, and user-friendly applications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Code className="h-10 w-10 text-blue-500" />,
            title: "Web Development",
            description: "Building responsive and dynamic web applications using modern frameworks and technologies.",
          },
          {
            icon: <Brain className="h-10 w-10 text-purple-500" />,
            title: "AI & ML",
            description:
              "Implementing machine learning algorithms and deep learning models for intelligent applications.",
          },
          {
            icon: <Cloud className="h-10 w-10 text-sky-500" />,
            title: "Cloud Computing",
            description: "Deploying and managing applications on cloud platforms like Azure and AWS.",
          },
          {
            icon: <Database className="h-10 w-10 text-emerald-500" />,
            title: "Big Data",
            description: "Working with large datasets and implementing efficient data processing solutions.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full card-hover card-custom">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center p-3 rounded-full bg-secondary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

