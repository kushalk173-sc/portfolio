"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kushalkapoor25",
      username: "kushalkapoor25",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/kushalkapoor",
      username: "kushalkapoor",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:kushalk@umd.edu",
      username: "kushalk@umd.edu",
    },
  ]

  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-8 bg-gradient-to-b from-background to-card/20 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <p className="text-primary font-mono text-sm tracking-widest uppercase">05. Get in Touch</p>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Let's collaborate</h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm actively seeking <span className="text-primary font-semibold">PhD opportunities</span> in Neuro-AI
                and Computational Neuroscience for Fall 2026.
              </p>
              <p>
                Whether you're interested in discussing research collaborations, PhD opportunities, or just want to
                connect, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Connect</h3>
              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-muted/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{link.label}</span>
                        <span className="text-xs">{link.username}</span>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <Card className="lg:col-span-3 p-8 glass-card glow-on-hover">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-border/60 focus:border-primary h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-border/60 focus:border-primary h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your research interests or opportunities..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background/50 border-border/60 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 bg-primary hover:bg-primary/90 text-background font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105"
              >
                <Send className="h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

      </div>
    </section>
  )
}
