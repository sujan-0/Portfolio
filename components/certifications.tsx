"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
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
    <section id="certifications" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6 text-white text-shadow-glow">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Certifications</span> & Achievements
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">Professional certifications and notable achievements throughout my career.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <div className="h-full p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="mr-3 p-3 rounded-lg bg-blue-500/20">
                <Award className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 p-1 rounded-full bg-white/10">
                    <Check className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-gray-300">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="h-full p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="mr-3 p-3 rounded-lg bg-purple-500/20">
                <Award className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Achievements</h3>
            </div>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 p-1 rounded-full bg-white/10">
                    <Check className="h-4 w-4 text-purple-400" />
                  </div>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

