import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Play, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import TiltCard from "@/components/effects/TiltCard";
import MagneticButton from "@/components/effects/MagneticButton";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Weather Dashboard Application",
      description: "Interactive weather dashboard with real-time weather data, 7-day forecasts, and location-based weather tracking. Features responsive design and dynamic weather animations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API", "Chart.js"],
      category: "Frontend",
      status: "Production",
      highlights: ["API Integration", "Real-time Data", "Interactive Charts"],
      github: "https://github.com/Venkat5002/DSA8",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Modern Developer Portfolio Website",
      description: "Responsive and modern personal portfolio website built with React, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and professional design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
      category: "Frontend",
      status: "Production",
      highlights: ["Responsive Design", "Modern UI/UX", "Fast Performance"],
      github: "https://github.com/Venkat5002/repo",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "E-Commerce & Project Management Platform",
      description: "Comprehensive platform featuring E-Commerce website with shopping cart, payments, and a Project Management Tool with task tracking capabilities.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "HTML", "CSS"],
      category: "Full Stack",
      status: "Production",
      highlights: ["E-Commerce", "Task Management", "Payment Integration"],
      github: "https://github.com/Venkat5002/codsoft-task-1-and-task-2",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Comprehensive collection of DSA implementations and problem solutions demonstrating algorithmic thinking and programming proficiency in Java.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      technologies: ["Java", "Algorithms", "Data Structures"],
      category: "Programming",
      status: "Development",
      highlights: ["Problem Solving", "Java Programming", "Algorithm Design"],
      github: "https://github.com/Venkat5002/DSA8",
      gradient: "from-orange-500/20 to-yellow-500/20",
    },
    {
      title: "University Training Projects",
      description: "Collection of all coding programs and projects completed during training program at Malla Reddy University, showcasing learning progression.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "HTML", "CSS", "Java"],
      category: "Academic",
      status: "Production",
      highlights: ["Academic Projects", "Learning Portfolio", "Training Program"],
      github: "https://github.com/Venkat5002/Training-01---2311CS010689-",
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
    {
      title: "Java Programming Portfolio",
      description: "Comprehensive Java programming assignments and projects from 2nd year 1st semester, focusing on data structures using Java.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop",
      technologies: ["Java", "Data Structures", "OOP"],
      category: "Academic",
      status: "Production",
      highlights: ["Object-Oriented", "Data Structures", "Java Expertise"],
      github: "https://github.com/Venkat5002/java-programming-done-in-2nd-year-1st-semester-",
      gradient: "from-red-500/20 to-orange-500/20",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-green-500";
      case "Development":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Badge variant="outline" className="mb-4 text-accent font-mono border-accent/50">
                <Sparkles className="w-3 h-3 mr-1" />
                FEATURED WORKS
              </Badge>
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Recent{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-accent bg-clip-text text-transparent">Projects</span>
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
              A showcase of my latest projects spanning full-stack development and academic achievements.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <TiltCard intensity={5}>
                <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent opacity-60`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    {/* Status badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="backdrop-blur-md bg-card/70">
                        {project.category}
                      </Badge>
                      <div className="flex items-center gap-1 bg-card/70 backdrop-blur-md px-2 py-1 rounded-full">
                        <motion.div
                          className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs text-foreground font-medium">{project.status}</span>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      <MagneticButton>
                        <Button variant="secondary" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      </MagneticButton>
                    </motion.div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                      {project.title}
                      <motion.span
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.span>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <Badge variant="outline" className="text-xs text-accent border-accent/30 bg-accent/5">
                            {highlight}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-foreground">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <Badge variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" className="flex-1 group/btn" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Code
                        </a>
                      </Button>
                      {project.status === "Production" && (
                        <Button variant="outline" size="sm" className="flex-1 group/btn">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          Demo
                        </Button>
                      )}
                      {project.status === "Development" && (
                        <Button variant="outline" size="sm" className="flex-1 group/btn">
                          <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Preview
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* View More Button */}
        <ScrollReveal delay={0.5}>
          <div className="text-center mt-16">
            <MagneticButton>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="https://github.com/Venkat5002" target="_blank" rel="noopener noreferrer">
                  <span>View All Projects</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                </a>
              </Button>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
