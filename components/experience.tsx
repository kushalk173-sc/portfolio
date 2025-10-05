import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react"

export function Experience() {
  const professional = [
    {
      company: "Marriott International",
      role: "Software Research Engineer (Flex), Loyalty Engineering",
      period: "June 2024 - December 2024",
      location: "Bethesda, MD",
      highlights: [
        "Worked under the Loyalty Operations Team and Marriott Design Labs at Marriott International",
        "Streamlined productivity of the Loyalty IT team through a Jira Ticket assistant, running searches on past Jira tickets and providing recommendations to solve tickets, overall increasing the productivity of the team by 20% and reducing ticket resolution time by 50%",
        "Collaborated with Viam and Marriott Design Labs to build a Rover for improving Waste Management in Marriott offices and hotels through auto circulation",
        "Developed a proposition to build a self-learning tool to speed up data transfers for new hotel acquisitions for past reservations by 50%",
        "As part of the RMRC team, worked in Knowledge transfer and Personal Risk to help the Loyalty Engineering transition during layoffs",
      ],
      tags: ["AI/ML", "Software Engineering", "Robotics", "NLP"],
    },
    {
      company: "Apex Fund",
      role: "Analyst, Quantitative",
      period: "August 2023 - Present",
      location: "College Park, MD",
      highlights: [
        "As part of the Apex Fund's Quantitative division, started helping develop strategies, build infrastructure to eventually leading own desk and strategy with 4 junior analysts",
        "Worked on a strategy to trade Oil Futures based on Soccer trades made by owners of clubs with significant business in the Oil Production industry",
        "Solely responsible for building the infrastructure of the club, from a database to an event driven Backtester to ease development of all future strategies",
        "Developing a version of the Avellaneda-Stoikov Market Making model, improved by adding a layer of pattern separation by adding a network similar to the Dentate Gyrus, to introduce predictive modelling",
      ],
      tags: ["Quantitative Finance", "Machine Learning", "Strategy Development", "Infrastructure"],
    },
  ]

  const teaching = [
    {
      institution: "University of Maryland, College Park",
      department: "Department of Computer Science",
      role: "Undergraduate Teaching Assistant",
      course: "CMSC 216 - Introduction to Computer Systems",
      period: "August 2023 - May 2024",
      location: "College Park, MD",
      highlights: [
        "Worked under Dr. Ilchul Yoon and Dr. Christopher Kauffman to teach CMSC 216, Introduction to Computer Systems",
        "Handled over 1000 students and taught 5 sections of 40 people each, and graded assignments and exams for students",
        "Was voted one of the best TAs from a Staff size of 40 under Dr. Kauffman",
        "Pre-emptive offer from Dr. Christopher Kauffman to be a part of his teaching staff for CMSC 216 for Spring 2026",
      ],
      tags: ["Teaching", "Computer Systems", "C Programming", "Linux"],
    },
  ]

  return (
    <section
      id="experience"
      className="py-32 px-6 lg:px-8 bg-gradient-to-b from-background via-card/10 to-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="space-y-6 mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase">02. Experience</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Professional journey</h2>
        </div>

        <div className="space-y-12">
          {/* Professional Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              Professional Experience
            </h3>
            <div className="space-y-4">
              {professional.map((exp, index) => (
                <Card
                  key={index}
                  className="p-8 glass-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 glow-on-hover"
                >
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-semibold text-foreground">{exp.company}</h4>
                      <p className="text-lg text-muted-foreground">{exp.role}</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                          <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-muted/50 text-muted-foreground border-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Teaching Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              Teaching Experience
            </h3>
            <div className="space-y-4">
              {teaching.map((exp, index) => (
                <Card
                  key={index}
                  className="p-8 glass-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 glow-on-hover"
                >
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-semibold text-foreground">{exp.institution}</h4>
                      <p className="text-lg text-muted-foreground">{exp.department}</p>
                      <p className="text-base text-muted-foreground">
                        {exp.role} - {exp.course}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                          <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-muted/50 text-muted-foreground border-0">
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
