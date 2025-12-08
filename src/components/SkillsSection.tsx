import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Wrench, Layers, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import TiltCard from "@/components/effects/TiltCard";

const AnimatedProgress = ({ value, delay = 0 }: { value: number; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-accent rounded-full relative"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
      </motion.div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Node.js", level: 75 },
      ],
    },
    {
      title: "Programming Languages",
      icon: Layers,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "C/C++", level: 75 },
      ],
    },
    {
      title: "Database & Backend",
      icon: Database,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Netlify/Vercel", level: 70 },
        { name: "Linux", level: 65 },
      ],
    },
  ];

  const certifications = [
    "Computer Science Engineering Student",
    "MRU Training Program Graduate",
    "Full Stack Development",
    "Data Structures & Algorithms",
  ];

  const techStack = [
    "Java",
    "React",
    "JavaScript",
    "MongoDB",
    "Node.js",
    "PostgreSQL",
    "HTML",
    "CSS",
    "Git",
    "VS Code",
  ];

  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Badge variant="outline" className="mb-4 text-accent font-mono border-accent/50">
                <Sparkles className="w-3 h-3 mr-1" />
                TECHNICAL EXPERTISE
              </Badge>
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Skills &{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-accent bg-clip-text text-transparent">Technologies</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise across various domains.
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
              <TiltCard intensity={3}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/30 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center gap-3">
                      <motion.div
                        className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                      </motion.div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <motion.span
                            className="font-medium text-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: skillIndex * 0.1 }}
                          >
                            {skill.name}
                          </motion.span>
                          <motion.span
                            className="text-sm text-accent font-mono"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + skillIndex * 0.1 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <AnimatedProgress value={skill.level} delay={0.2 + skillIndex * 0.1} />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications Section */}
        <ScrollReveal delay={0.3}>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">Certifications & Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-accent rounded-full flex-shrink-0"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <span className="text-foreground font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Tech Stack Badges */}
        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Preferred Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-5 py-2.5 text-sm font-medium cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all duration-300 backdrop-blur-sm"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
