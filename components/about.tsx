import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Microscope, Code2, GraduationCap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "Neuro-AI Research",
      description: "Developing hippocampal-inspired architectures for continual learning systems",
    },
    {
      icon: Microscope,
      title: "Computational Neuroscience",
      description: "Bridging biological intelligence with artificial neural networks",
    },
    {
      icon: Code2,
      title: "Deep Learning",
      description: "Expertise in PyTorch, TensorFlow, and large-scale model development",
    },
    {
      icon: GraduationCap,
      title: "PhD Bound",
      description: "Seeking Fall 2026 opportunities in Neuro-AI and Computational Neuroscience",
    },
  ]

  const coursework = [
    "Molecular and Cellular Neuroscience",
    "Signal Processing",
    "Molecular Neuroethology",
    "Machine Learning",
    "Neural Systems and Circuits",
    "FMRI Analysis",
    "BioPsychology",
    "Applied Statistics",
  ]

  const skills = [
    "Python",
    "C++",
    "MATLAB",
    "PyTorch",
    "JAX",
    "Transformers",
    "Diffusion Models",
    "Continual Learning",
    "Evolutionary Algorithms",
    "MEG/EEG Analysis",
    "Spike Encoding Models",
    "Hippocampal Architectures",
    "Docker",
    "Linux",
    "Git",
  ]

  return (
    <section
      id="about"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-20">
          <p className="text-primary font-mono text-xs sm:text-sm tracking-widest uppercase">01. About Me</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl">
            Researcher at the intersection of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              neuroscience and AI
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p className="text-xl leading-relaxed">
              I'm a Computer Science student at the{" "}
              <span className="text-foreground font-semibold">University of Maryland, College Park</span>, pursuing a
              B.Sc. in Computer Science Honours (Machine Learning) and Neurotechnology (Individual Studies), with a minor in Computational Finance.
            </p>

            <p>
              My research centers on developing{" "}
              <span className="text-foreground font-semibold">hippocampal-inspired architectures</span> for continual
              learning. I'm particularly interested in how biological principles like pattern separation in the Dentate
              Gyrus can address catastrophic forgetting in neural networks.
            </p>

            <p>
              Beyond research, I've worked as a{" "}
              <span className="text-foreground font-semibold">
                Software Research Engineer at Marriott International
              </span>{" "}
              and lead the quantitative desk at <span className="text-foreground font-semibold">Apex Fund</span>, where
              I develop AI-powered trading strategies.
            </p>

            <div className="p-6 rounded-xl bg-primary/10 border-2 border-primary/30">
              <p className="text-primary font-semibold text-xl">
                I'm actively seeking PhD opportunities for Fall 2026 to continue advancing the field of neuro-inspired
                artificial intelligence.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-base font-semibold text-foreground uppercase tracking-wide">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-muted/50 hover:bg-primary/20 hover:text-primary text-muted-foreground border-0 transition-all px-3 py-1 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card
                    key={index}
                    className="p-5 sm:p-6 glass-card hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 glow-on-hover active:scale-95"
                  >
                    <div className="space-y-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                )
              })}
            </div>

            <Card className="p-8 glass-card glow-on-hover">
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-foreground">Relevant Coursework</h3>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <Badge
                      key={course}
                      variant="outline"
                      className="border-border/60 hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
