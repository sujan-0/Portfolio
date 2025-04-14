"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import { z } from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
  };
  success?: boolean;
};

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [state, setState] = useState<ContactFormState>({});
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setState({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Validate form data
    const validatedFields = formSchema.safeParse(data);

    if (!validatedFields.success) {
      setState({
        errors: validatedFields.error.flatten().fieldErrors,
        success: false,
      });
      setIsPending(false);
      e.currentTarget.reset(); // Prevent form submission
      return;
    }

    // If validation passes, allow the form to submit natively to Formspree
    try {
      e.currentTarget.submit(); // Trigger native form submission
    } catch (error) {
      console.error("Form submission error:", error);
      setState({
        errors: { _form: ["Failed to send message. Please try again later."] },
        success: false,
      });
      setIsPending(false);
    }
  };

  useEffect(() => {
    // Check URL for Formspree success (e.g., after redirect)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("form") === "success") {
      setState({ success: true });
      setIsPending(false);
      // Clear URL params
      window.history.replaceState({}, document.title, window.location.pathname + "#contact");
    } else if (urlParams.get("form") === "error") {
      setState({
        errors: { _form: ["Failed to send message. Please try again later."] },
        success: false,
      });
      setIsPending(false);
      window.history.replaceState({}, document.title, window.location.pathname + "#contact");
    }

    if (state.success) {
      const timer = setTimeout(() => setState({}), 5000); // Clear success message after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [state]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
      link: "https://linkedin.com/in/sujankhatiwoda",
    },
  ];

  return (
    <section id="contact" className="section-padding py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="divider"></div>
        <p className="section-subtitle">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1"
        >
          <Card className="h-full overflow-hidden border-0 shadow-lg">
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&auto=format&fit=crop&q=60"
                alt="Contact"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Say Hi!</h3>
              </div>
            </div>
            <CardContent className="pt-6">
              {state.success && (
                <Alert className="mb-6 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-300 border-green-200">
                  <AlertDescription>
                    Thank you for your message! It has been sent successfully.
                  </AlertDescription>
                </Alert>
              )}
              {state.errors?._form && (
                <Alert className="mb-6 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-300 border-red-200">
                  <AlertDescription>{state.errors._form}</AlertDescription>
                </Alert>
              )}
              <form
                id="contact-form"
                action="https://formspree.io/f/xeoadqgg"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_next" value="https://sujankhatiwoda.com.np/#contact?form=success" />
                <input type="hidden" name="_error" value="https://sujankhatiwoda.com.np/#contact?form=error" />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="border-secondary/50 focus:border-primary"
                    />
                    {state.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      required
                      className="border-secondary/50 focus:border-primary"
                    />
                    {state.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      className="min-h-[120px] border-secondary/50 focus:border-primary"
                      required
                    />
                    {state.errors?.message && <p className="text-sm text-red-500">{state.errors.message[0]}</p>}
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">
                    Your message will be sent directly to Sujan.
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all"
                    disabled={isPending}
                  >
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:block lg:col-span-1"
        >
          <div className="relative h-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&auto=format&fit=crop&q=60"
              alt="Contact illustration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent flex flex-col justify-end p-8">
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl">
                <MessageSquare className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <Card className="h-full border-0 shadow-lg">
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"
                alt="Contact information"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              </div>
            </div>
            <CardContent className="pt-6">
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start hover:text-primary transition-colors p-4 border border-secondary/50 rounded-lg hover:shadow-md hover:border-primary/30 group"
                    target={info.title === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                  >
                    <div className="mr-3 mt-1 p-2 rounded-full bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground">Prefer connecting on social media?</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    href="https://github.com/sujan-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary/50 hover:bg-primary/10 transition-colors group"
                  >
                    <Github className="h-6 w-6 text-blue-500 group-hover:text-blue-600" />
                  </a>
                  <a
                    href="https://linkedin.com/in/sujankhatiwoda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary/50 hover:bg-primary/10 transition-colors group"
                  >
                    <Linkedin className="h-6 w-6 text-blue-500 group-hover:text-blue-600" />
                  </a>
                  <a
                    href="mailto:Sujankhatiwoda0206@gmail.com"
                    className="p-3 rounded-full bg-secondary/50 hover:bg-primary/10 transition-colors group"
                  >
                    <Mail className="h-6 w-6 text-blue-500 group-hover:text-blue-600" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}