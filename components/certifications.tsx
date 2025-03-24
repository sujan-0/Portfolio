"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Check } from "lucide-react"

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const certifications = [
    "Microsoft & CodefreeCamp Certifications (C# & Game Development)",
    "Hands-on Experience in Hosting Projects (Azure & AWS)",
    "Strong Foundations in DSA & Problem Solving",
  ]

  const achievements = [
    "Successfully deployed multiple web applications on cloud platforms",
    "Implemented machine learning models for real-world problems",
    "Developed responsive and accessible web interfaces",
    "Collaborated on open-source projects",
  ]

  return (
    <section id="certifications" className="section-padding py-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          <span className="gradient-text">Certifications</span> & Achievements
        </h2>
        <div className="divider"></div>
        <p className="section-subtitle">Professional certifications and notable achievements throughout my career.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full card-hover">
            <CardContent className="pt-6">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0 p-1 rounded-full bg-secondary">
                      <Check className="h-4 w-4 text-blue-500" />
                    </div>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full card-hover">
            <CardContent className="pt-6">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-2xl font-semibold">Achievements</h3>
              </div>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0 p-1 rounded-full bg-secondary">
                      <Check className="h-4 w-4 text-blue-500" />
                    </div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

