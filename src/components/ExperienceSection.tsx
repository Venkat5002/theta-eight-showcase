import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin, Briefcase, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import TiltCard from "@/components/effects/TiltCard";

const ExperienceSection = () => {
  const stats = [
    { value: "2nd", label: "Year CSE Student" },
    { value: "6+", label: "GitHub Repositories" },
    { value: "MRU", label: "University Training" },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-accent font-mono border-accent/50">
              <Sparkles className="w-3 h-3 mr-1" />
              PROFESSIONAL JOURNEY
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Work <span className="bg-gradient-accent bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional experience and contributions in cutting-edge technology.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-8">
          <ScrollReveal delay={0.2}>
            <TiltCard intensity={3}>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-l-4 border-l-accent bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl text-foreground">Malla Reddy University</CardTitle>
                      <h3 className="text-lg font-semibold text-accent">B.Tech in Computer Science Engineering</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
                          2023 - Present
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          India
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      Student
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-2 text-muted-foreground">
                    {[
                      "Currently pursuing CSE with focus on modern development practices.",
                      "Completed multiple training programs on web development and DSA.",
                      "Active contributor to various development projects.",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "React", "Node.js", "MongoDB", "PostgreSQL"].map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <motion.div whileHover={{ scale: 1.05, y: -5 }}>
                  <Card className="text-center p-6 shadow-card hover:shadow-elegant bg-card/50 backdrop-blur-sm border-border/50">
                    <motion.div
                      className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
