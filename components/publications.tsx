import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, ExternalLink } from "lucide-react"

export function Publications() {
  const publications = [
    {
      title: "HiCL - Hippocampal Inspired Continual Learning",
      venue: "AAAI 2026",
      status: "Published",
      description:
        "Developed a hippocampal-inspired architecture for continual learning that significantly reduces forgetting in neural networks. Engineered a DG-Gated MoE system achieving near SOTA performance at 5% computational cost.",
      tags: ["Continual Learning", "Neuro-AI", "Deep Learning"],
      type: "conference",
    },
    {
      title: "DeceptionTime - Predicting the Movement of Shares Using Momentum Indicators",
      venue: "ICDC 2021 (Springer)",
      status: "Published",
      description:
        "Designed a large-scale deep learning model using transpose CNNs, ESNs, and GRUs to predict stock price movement. Architecture surpassed State-of-the-Art models including Google's Inception by 10-200% on benchmarks.",
      tags: ["Time Series", "Financial ML", "Deep Learning"],
      type: "conference",
    },
  ]

  const preprints = [
    {
      title: "Generative Models for Underwater Image Reconstruction",
      venue: "ICRA 2026 (Submitted)",
      description:
        "Developed a diffusion-based model to generate underwater images from backscattering, illumination, and text descriptions. Fine-tuned Atlantis for enhanced underwater scene recreation.",
      tags: ["Computer Vision", "Diffusion Models", "Robotics"],
    },
    {
      title: "AlphaSynuclein to Parkinson's Predictor",
      venue: "In Preparation",
      description: "Predictive modeling for Parkinson's disease progression using protein structure analysis.",
      tags: ["Computational Biology", "Healthcare AI"],
    },
    {
      title: "Avellaneda-Stoikov Model with Dentate Gyrus Integration",
      venue: "In Preparation",
      description:
        "Enhanced market-making model incorporating pattern separation inspired by the Dentate Gyrus for improved predictive modeling.",
      tags: ["Quantitative Finance", "Neuro-AI"],
    },
  ]

  return (
    <section
      id="publications"
      className="py-32 px-6 lg:px-8 bg-gradient-to-b from-background via-card/10 to-background relative overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative space-y-16">
        <div className="space-y-6">
          <p className="text-primary font-mono text-sm tracking-widest uppercase">04. Publications</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Research contributions</h2>
        </div>

        <div className="space-y-12">
          {/* Published Work */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Published Work</h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card
                  key={index}
                  className="p-8 glass-card hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group glow-on-hover"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {pub.title}
                          </h4>
                          <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <Badge className="bg-primary/20 text-primary border-primary/30">{pub.venue}</Badge>
                          <Badge variant="secondary" className="bg-muted/50 text-muted-foreground border-0">
                            {pub.status}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{pub.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {pub.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-border/60 text-muted-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Preprints & Work in Progress */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Preprints & Work in Progress</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {preprints.map((pub, index) => (
                <Card
                  key={index}
                  className="p-6 glass-card hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-2 glow-on-hover"
                >
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground leading-snug">{pub.title}</h4>
                      <Badge variant="outline" className="border-border/60 text-muted-foreground">
                        {pub.venue}
                      </Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pub.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-muted/50 text-muted-foreground border-0"
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
        </div>
      </div>
    </section>
  )
}
