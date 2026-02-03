"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, Globe, DatabaseIcon, CloudIcon, Cpu } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const skills = [
    {
      category: "Programming Languages",
      icon: <Code2 className="h-6 w-6 text-blue-400" />,
      items: ["HTML", "CSS", "JavaScript", "Python", "Java", "C", "C#", "PHP"],
    },
    {
      category: "Web Development",
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      items: ["React.js", "Node.js", "Express.js", "Figma (UI Design)"],
    },
    {
      category: "Databases",
      icon: <DatabaseIcon className="h-6 w-6 text-blue-400" />,
      items: ["MongoDB", "MySQL"],
    },
    {
      category: "Cloud & DevOps",
      icon: <CloudIcon className="h-6 w-6 text-blue-400" />,
      items: ["Azure", "AWS", "Git/GitHub"],
    },
    {
      category: "AI & Machine Learning",
      icon: <Cpu className="h-6 w-6 text-blue-400" />,
      items: ["ML Algorithms", "Deep Learning", "Scikit-learn", "TensorFlow", "PyTorch"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6 text-white text-shadow-glow">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          A comprehensive set of technologies and tools I've mastered throughout my journey.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-full p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-lg group">
              <div className="flex items-center mb-6">
                <div className="mr-3 p-3 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/5 border border-white/5 text-gray-300 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

