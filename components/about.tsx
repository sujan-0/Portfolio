"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Brain, Cloud, Code, Database } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6 text-white text-shadow-glow">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I'm a passionate Computer Science student specializing in AI & ML, Cloud, and Big Data. I love building
          efficient, scalable, and user-friendly applications that solve real-world problems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Code className="h-10 w-10 text-blue-400" />,
            title: "Web Development",
            description: "Building responsive and dynamic web applications using modern frameworks and technologies.",
          },
          {
            icon: <Brain className="h-10 w-10 text-purple-400" />,
            title: "AI & ML",
            description:
              "Implementing machine learning algorithms and deep learning models for intelligent applications.",
          },
          {
            icon: <Cloud className="h-10 w-10 text-sky-400" />,
            title: "Cloud Computing",
            description: "Deploying and managing applications on cloud platforms like Azure and AWS.",
          },
          {
            icon: <Database className="h-10 w-10 text-emerald-400" />,
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
            <div className="h-full p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-lg group">
              <div className="mb-4 inline-flex items-center justify-center p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

