"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, FileText, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px] transition-all duration-1000 ease-out pointer-events-none hidden md:block"
        style={{
          left: `${mousePosition.x - 300}px`,
          top: `${mousePosition.y - 300}px`,
        }}
      />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px] animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] animate-float pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="space-y-8 sm:space-y-12 text-center">
          <div
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <p className="text-primary font-mono text-xs sm:text-sm tracking-widest uppercase">Neuro-AI Researcher</p>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              <span className="block">Kushal</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite]">
                Kapoor
              </span>
            </h1>
          </div>

          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground/90 text-balance max-w-5xl mx-auto leading-tight px-4">
              Building the future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-cyan-400">
                neuro-inspired AI
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              PhD-bound researcher developing hippocampal-inspired architectures for continual learning. Bridging
              computational neuroscience and deep learning to create more intelligent systems.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} px-4`}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="h-5 w-5" />
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto gap-2 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 text-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 transition-all hover:scale-105 active:scale-95 bg-transparent"
            >
              <FileText className="h-5 w-5" />
              View CV
            </Button>
          </div>

          <div
            className={`flex items-center justify-center gap-4 sm:gap-6 pt-8 sm:pt-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <a
              href="https://github.com/kushalkapoor25"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-primary/20 hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/kushalkapoor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-primary/20 hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:kushalk@umd.edu"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-primary/20 hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground font-mono hidden sm:block">Scroll</span>
        </div>
      </div>
    </section>
  )
}
