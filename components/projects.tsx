"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Info } from "lucide-react"
import Image from "next/image"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

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
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60",
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
    <section id="projects" className="section-padding py-24 bg-secondary/30">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="divider"></div>
        <p className="section-subtitle">A showcase of my recent work and the technologies I've implemented.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Alert className="bg-primary/10 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertTitle className="text-lg font-semibold mb-2">Project Demos & Access</AlertTitle>
          <AlertDescription className="text-foreground/80">
            📽️ Some of my major projects are currently in private repositories due to university policies,
            collaborations, or deployment constraints. If you're interested in a demo or want to access these projects,
            feel free to reach out using the contact details below. I'm happy to provide access or walk you through a
            project if it's for collaboration, hiring, or learning purposes.
          </AlertDescription>
        </Alert>
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
            <Card className="overflow-hidden card-hover h-full flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
