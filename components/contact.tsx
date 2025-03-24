"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Smartphone } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-blue-500" />,
      title: "Email",
      value: "Sujankhatiwoda0206@gmail.com",
      link: "mailto:Sujankhatiwoda0206@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5 text-blue-500" />,
      title: "Location",
      value: "Kathmandu, Nepal",
      link: "#",
    },
    {
      icon: <Github className="h-5 w-5 text-blue-500" />,
      title: "GitHub",
      value: "github.com/sujan-0",
      link: "https://github.com/sujan-0",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-blue-500" />,
      title: "LinkedIn",
      value: "linkedin.com/in/sujankhatiwoda",
      link: "https://linkedin.com",
    },
  ]

  return (
    <section id="contact" className="section-padding py-24 bg-secondary/30">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="divider"></div>
        <p className="section-subtitle">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="h-full flex items-center justify-center"
          >
            <div className="text-center">
              <Smartphone className="h-48 w-48 text-primary mx-auto mb-4" />
              <p className="text-lg font-medium text-muted-foreground">Connect with me anytime</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2"
        >
          <Card className="h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start hover:text-primary transition-colors p-4 border rounded-lg hover:shadow-sm"
                    target={info.title === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                  >
                    <div className="mr-3 mt-1 p-2 rounded-full bg-secondary">{info.icon}</div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground">Prefer connecting on social media? Find me on these platforms:</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    href="https://github.com/sujan-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Github className="h-6 w-6 text-blue-500" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-blue-500" />
                  </a>
                  <a
                    href="mailto:Sujankhatiwoda0206@gmail.com"
                    className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Mail className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

