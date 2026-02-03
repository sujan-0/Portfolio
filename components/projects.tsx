"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Info } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      title: "College Management System",
      description:
        "Developed a comprehensive system for managing college operations including student registration for DII faculty, result preparation, and teacher management.",
      image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stack: ["Java", "MySQL", "Swing", "JDBC"],
      github: "https://github.com/sujan-0/CollegeManagementSystem",
      demo: "https://github.com/sujan-0",
    },
    {
      title: "Citizen Grievance Application & Tracking System",
      description:
        "Built a platform for local governments to efficiently track and manage day-to-day citizen grievances.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/sujan-0/CitizenGrievanceApplication",
      demo: "https://github.com/sujan-0",
    },
    {
      title: "Pet Adoption System",
      description: "Designed backend APIs for a pet adoption system, ensuring security and scalability.",
      image: "https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=800&auto=format&fit=crop&q=60",
      stack: ["Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/sujan-0/PetProject",
      demo: "https://github.com/sujan-0",
    },
    {
      title: "Weather App",
      description: "Created a dynamic weather application fetching real-time data using APIs.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=60",
      stack: ["HTML", "CSS", "JavaScript", "PHP"],
      github: "https://github.com/sujan-0",
      demo: "https://github.com/sujan-0",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6 text-white text-shadow-glow">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">A showcase of my recent work and the technologies I've implemented.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex items-start gap-3 backdrop-blur-sm">
          <Info className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-white">Project Demos & Access</h4>
            <p className="text-gray-300">
              📽️ Some of my major projects are currently in private repositories due to university policies,
              collaborations, or deployment constraints. If you're interested in a demo or want to access these projects,
              feel free to reach out using the contact details below. I'm happy to provide access or walk you through a
              project if it's for collaboration, hiring, or learning purposes.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="overflow-hidden h-full flex flex-col rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-300 group">
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/5 border border-white/5 text-blue-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white border-none">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
