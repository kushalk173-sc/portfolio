import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const topProjects = [
    {
      title: "Blindspot",
      award: "Bitcamp 2023 - 1st Place Winner",
      description:
        "Created a prototype of image-recognition glasses for the visually impaired using YOLO object detection algorithm with optimized parameters and facial recognition.",
      tags: ["Computer Vision", "YOLO", "Hardware Integration"],
    },
    {
      title: "ThoughtWheels",
      award: "TreeHacks 2024 - Top 10/500 Projects",
      description:
        "Smart wheelchair controlled by brain waves for people with severe mobility impairment. Designed signal processing algorithms for EEG signals from Muse 2 and developed robotic control system.",
      tags: ["BCI", "Signal Processing", "Robotics"],
    },
    {
      title: "MediChain",
      award: "HackMIT 2024 - Best Blockchain Hack",
      description:
        "Blockchain-based platform for secure patient data management. Integrated blockchain with Neo4j knowledge graphs for tamper-proof storage and decentralized medical records.",
      tags: ["Blockchain", "Healthcare", "Neo4j"],
    },
  ]

  return (
    <section id="projects" className="py-32 px-6 lg:px-8 bg-card/20 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="space-y-6">
            <p className="text-primary font-mono text-sm tracking-widest uppercase">03. Projects & Hackathons</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Award-winning innovations</h2>
          </div>
          <Link href="/projects">
            <Button
              variant="outline"
              className="gap-2 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 bg-transparent text-foreground font-medium transition-all hover:scale-105"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {topProjects.map((project, index) => (
            <Card
              key={index}
              className="p-8 glass-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group glow-on-hover"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge className="bg-primary/20 text-primary border-primary/30">{project.award}</Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-border/60 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
