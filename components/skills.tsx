"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
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
      icon: <Code2 className="h-6 w-6 text-blue-500" />,
      items: ["HTML", "CSS", "JavaScript", "Python", "Java", "C", "C#", "PHP"],
    },
    {
      category: "Web Development",
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      items: ["React.js", "Node.js", "Express.js", "Figma (UI Design)"],
    },
    {
      category: "Databases",
      icon: <DatabaseIcon className="h-6 w-6 text-blue-500" />,
      items: ["MongoDB", "MySQL"],
    },
    {
      category: "Cloud & DevOps",
      icon: <CloudIcon className="h-6 w-6 text-blue-500" />,
      items: ["Azure", "AWS", "Git/GitHub"],
    },
    {
      category: "AI & Machine Learning",
      icon: <Cpu className="h-6 w-6 text-blue-500" />,
      items: ["ML Algorithms", "Deep Learning", "Scikit-learn", "TensorFlow", "PyTorch"],
    },
  ]

  return (
    <section id="skills" className="section-padding py-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="divider"></div>
        <p className="section-subtitle">
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
            <Card className="h-full card-hover">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-3 p-2 rounded-lg bg-secondary">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

