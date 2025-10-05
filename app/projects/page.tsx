import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Recycle, Brain, Shield, Zap, Database, Globe, Code, Cpu } from "lucide-react"

export default function ProjectsPage() {
  const allProjects = [
    {
      title: "HiCL - Hippocampal Inspired Continual Learning",
      venue: "AAAI 2026",
      description:
        "Developed HiCL, a hippocampal-inspired architecture for continual learning that significantly reduces forgetting in neural networks. Engineered a DG-Gated MoE system that dynamically routes tasks to specialized subnetworks without a separate gating network. Achieved near SOTA performance on continual learning benchmarks, while reducing computational costs compared to other methods.",
      tags: ["Continual Learning", "Neural Networks", "Neuroscience-Inspired AI"],
      icon: Brain,
      featured: true,
    },
    {
      title: "Blindspot",
      venue: "Bitcamp 2023 - 1st Place Winner",
      description:
        "Created a prototype of image-recognition glasses for the visually impaired. Applied YOLO object detection algorithm by fine-tuning its parameters, optimizing the data transfer and processing pipeline to minimize latency. Integrated the hardware with software and created the facial recognition algorithm.",
      tags: ["Computer Vision", "YOLO", "Hardware Integration", "Accessibility"],
      icon: Trophy,
      featured: true,
    },
    {
      title: "ThoughtWheels",
      venue: "TreeHacks 2024 - Top 10/500 Projects",
      description:
        "Created a smart wheelchair for people with severe mobility impairment to move a wheelchair using their Brain Waves. Designed signal processing algorithms to interpret EEG signals from Muse 2, developed a robotic control system for precise wheelchair navigation based on micro facial movements and built an algorithm to use for a bigger sensor and imagined movements.",
      tags: ["BCI", "Signal Processing", "Robotics", "EEG"],
      icon: Trophy,
      featured: true,
    },
    {
      title: "MediChain",
      venue: "HackMIT 2024 - Best Blockchain Hack",
      description:
        "Developed a blockchain-based platform for secure and transparent management of patient data, enhancing privacy and data integrity. Integrated blockchain technology with Neo4j knowledge graphs to create a decentralized ledger system for tamper-proof storage and authorized access to medical records, hosted and launched a decentralized storage system with these records to stop server shortage.",
      tags: ["Blockchain", "Healthcare", "Neo4j", "Decentralized Systems"],
      icon: Shield,
      featured: true,
    },
    {
      title: "TrashPro",
      venue: "Sustainable AI Innovation",
      description:
        "Sustainable waste management app powered by cutting-edge AI that sorts trash into Recycle, Compost, or Landfill categories, promoting eco-friendly habits for a greener planet. Uses computer vision and machine learning to identify waste types in real-time.",
      tags: ["AI", "Computer Vision", "Sustainability", "Mobile App"],
      icon: Recycle,
    },
    {
      title: "DeceptionTime",
      venue: "ICDC 2021 - Published in Springer",
      description:
        "Designed a large-scale deep learning model to predict stock price movement and market volatility using a sophisticated model based on transpose CNNs and CNNs, ESNs, and GRUs. Architecture surpassed most State-of-the-Art models, including Google's inception, beating models on benchmarks by 10 to 200%.",
      tags: ["Deep Learning", "Time Series", "Financial ML", "CNNs"],
      icon: Zap,
    },
    {
      title: "Generative Underwater Imaging",
      venue: "ICRA 2026",
      description:
        "Worked on a diffusion-based model to generate underwater images from backscattering, illumination and text descriptions of scenes. Finetuned Atlantis to work with this project, creating realistic underwater scenes from SONAR emissions and text descriptions.",
      tags: ["Diffusion Models", "Computer Vision", "Underwater Robotics"],
      icon: Globe,
    },
    {
      title: "Avellaneda-Stoikov with Dentate Gyrus",
      venue: "Research Project",
      description:
        "Developing an improved version of the Avellaneda-Stoikov Market Making model by adding a layer of pattern separation inspired by the Dentate Gyrus neural circuit. Introduces predictive modeling to traditional market making strategies.",
      tags: ["Quantitative Finance", "Neuro-Inspired AI", "Market Making"],
      icon: Database,
    },
    {
      title: "AlphaSynuclein to Parkinson's Predictor",
      venue: "Preprint",
      description:
        "Developed a machine learning model to predict Parkinson's disease progression from AlphaSynuclein protein patterns. Combines molecular biology insights with deep learning for early disease detection.",
      tags: ["Computational Biology", "Healthcare AI", "Protein Analysis"],
      icon: Cpu,
    },
    {
      title: "Jira Ticket Assistant",
      venue: "Marriott International",
      description:
        "Streamlined productivity of the Loyalty IT team through a Jira Ticket assistant, running searches on past Jira tickets and providing recommendations to solve tickets. Increased team productivity by 20% and reduced ticket resolution time by 50%.",
      tags: ["NLP", "Enterprise Software", "Productivity Tools"],
      icon: Code,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight">All Projects</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive collection of research projects, hackathon wins, and technical innovations spanning
              neuro-AI, computer vision, and computational systems.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-light">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {allProjects
                .filter((p) => p.featured)
                .map((project, index) => {
                  const Icon = project.icon
                  return (
                    <Card
                      key={index}
                      className="p-8 bg-card/60 border-border/40 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="space-y-5">
                        <div className="flex items-start justify-between">
                          <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                            <Icon className="h-7 w-7 text-primary" />
                          </div>
                        </div>

                        <div>
                          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                          <Badge variant="default" className="mb-4 bg-primary/20 text-primary border border-primary/30">
                            {project.venue}
                          </Badge>
                          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-border/60">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  )
                })}
            </div>
          </div>

          {/* Other Projects */}
          <div className="space-y-8">
            <h2 className="text-3xl font-light">Other Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {allProjects
                .filter((p) => !p.featured)
                .map((project, index) => {
                  const Icon = project.icon
                  return (
                    <Card
                      key={index}
                      className="p-6 bg-card/60 border-border/40 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                          <Badge
                            variant="default"
                            className="mb-3 bg-primary/20 text-primary border border-primary/30 text-xs"
                          >
                            {project.venue}
                          </Badge>
                          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-border/60">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  )
                })}
            </div>
          </div>

          {/* Skills Section */}
          <Card className="p-8 bg-gradient-to-br from-primary/8 to-chart-2/8 border-border/40 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <Award className="h-12 w-12 text-chart-2" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Deep Learning",
                    "Machine Learning",
                    "NLP",
                    "Python",
                    "TensorFlow",
                    "PyTorch",
                    "C",
                    "Java",
                    "Flutter",
                    "GCP",
                    "AWS",
                    "Signal Processing",
                    "Computer Vision",
                    "Data Science",
                    "Linux",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary/60 border-border/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
