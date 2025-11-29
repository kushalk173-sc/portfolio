import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Microscope, MapPin, Calendar } from "lucide-react"

export function Research() {
  const positions = [
    {
      lab: "Perception and Robotics Group",
      institution: "University of Maryland, College Park",
      role: "Undergraduate Research Assistant",
      period: "March 2025 – Present",
      location: "College Park, MD",
      highlights: [
        "Led development of HiCL, a hippocampal-inspired continual learning architecture using DG-gated Mixture-of-Experts with sparse pattern separation (top-k sparsity at 5%) and cosine similarity routing to prototypes, achieving over 95% routing accuracy without explicit gating networks under Prof. Yiannis Aloimonos.",
        "Designed a dual-phase training strategy integrating Elastic Weight Consolidation, prioritized replay, and contrastive losses for memory consolidation, yielding robust performance on Split CIFAR-10 (92.38% Task-IL accuracy) and Split Tiny-ImageNet (62.76% Task-IL) at 5% of baseline compute costs (e.g., 38.21 MFLOPs for small model).",
        "Conducting an Honors thesis on high-dimensional vectors and embeddings. Attended advanced seminars and guest lectures in neuro-inspired AI to deepen interdisciplinary expertise.",
        "Finetuned Atlantis to recreate underwater scenes using components from SONAR emissions and text descriptions.",
      ],
      tags: ["Continual Learning", "Evolutionary Algorithms", "Computer Vision"],
    },
    {
      lab: "Shamma Lab",
      institution: "University of Maryland, College Park",
      role: "Undergraduate Research Assistant",
      period: "March 2024 – November 2024",
      location: "College Park, MD",
      highlights: [
        "Developed a computational pipeline to decode speech from MEG neural recordings under Dr. Shihab Shamma",
        "Implemented spike-based encoding models to map temporal neural patterns to individuals reading poems.",
        "Fine-tuned GPT to predict neural response patterns from speech stimuli",
      ],
      tags: ["MEG", "Neural Decoding", "NLP"],
    },
    {
      lab: "Genome Computing Lab in FIRE",
      institution: "University of Maryland, College Park",
      role: "Undergraduate Research Assistant",
      period: "August 2022 – December 2023",
      location: "College Park, MD",
      highlights: [
        "Developed 3D models of nucleosome-decorated DNA fragments to investigate linker sequence effects on structural conformation and rigidity, utilizing 3DNA, Python and PyMOL for optimization and visualization of datasets from the Todolli database.",
        "Analyzed sequence-dependent DNA-protein interactions in lac repressor loops, to reveal multistate variance patterns and binding site influences.",
        "Managed large-scale biological data processing, implementing scripts for data retrieval, manipulation, and clustering",
        "Presented research poster 'Linker DNA Sequence Effects on Nucleosome Orientation' at FIRE Research Day",
      ],
      tags: ["Computational Biology", "Structural Biology", "Data Science"],
    },
  ]

  return (
    <section
      id="research"
      className="py-32 px-6 lg:px-8 bg-gradient-to-b from-background via-card/10 to-background relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative space-y-16">
        <div className="space-y-6">
          <p className="text-primary font-mono text-sm tracking-widest uppercase">01.5 Research Experience</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance max-w-4xl">
            Advancing computational neuroscience and AI
          </h2>
        </div>

        <div className="space-y-6">
          {positions.map((position, index) => (
            <Card
              key={index}
              className="p-8 glass-card hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 glow-on-hover"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Microscope className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">{position.lab}</h3>
                    <p className="text-lg text-muted-foreground">{position.role}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>{position.period}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {position.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {position.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-muted/50 text-muted-foreground border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Presentations</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6 glass-card hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 glow-on-hover">
              <div className="space-y-3">
                <Badge className="bg-primary/20 text-primary border-primary/30">Upcoming</Badge>
                <h4 className="text-lg font-semibold text-foreground">HiCL: Hippocampal Inspired Continual Learning</h4>
                <p className="text-sm text-muted-foreground">
                  The Fortieth AAAI Conference on Artificial Intelligence (AAAI-26) • January 2026
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Poster Presentation
                </p>
              </div>
            </Card>

            <Card className="p-6 glass-card hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 glow-on-hover">
              <div className="space-y-3">
                <Badge className="bg-primary/20 text-primary border-primary/30">Invited Talk</Badge>
                <h4 className="text-lg font-semibold text-foreground">HiCL: Hippocampal Inspired Continual Learning</h4>
                <p className="text-sm text-muted-foreground">
                  DEVCOM Army Research Laboratory, University of Tennessee, Knoxville • July 2025
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Presented to Professors, Senior faculty, graduate students, lab members and SURF students
                </p>
              </div>
            </Card>

            <Card className="p-6 glass-card hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 glow-on-hover">
              <div className="space-y-3">
                <Badge variant="secondary" className="bg-muted/50 text-muted-foreground border-0">
                  Poster
                </Badge>
                <h4 className="text-lg font-semibold text-foreground">
                  Linker DNA Sequence Effects on Nucleosome Orientation
                </h4>
                <p className="text-sm text-muted-foreground">
                  FIRE Research Day, University of Maryland • November 2023
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
