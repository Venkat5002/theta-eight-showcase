import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce website with shopping cart functionality, user authentication, and payment integration. Built as part of an internship project.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/Venkat5002/codsoft-task-1-and-task-2",
      type: "Full Stack",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather application that displays real-time weather data and 7-day forecasts using external APIs. Features responsive design and location-based search.",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      github: "https://github.com/Venkat5002/DSA8",
      type: "Frontend",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with React and Tailwind CSS. Features dark/light mode toggle and clean, professional design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/Venkat5002/repo",
      type: "Frontend",
    },
    {
      title: "DSA Problem Solutions",
      description:
        "Comprehensive collection of Data Structures and Algorithms implementations in Java. Includes solutions to common interview problems and optimization techniques.",
      technologies: ["Java", "Data Structures", "Algorithms"],
      github: "https://github.com/Venkat5002/DSA8",
      type: "Programming",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-3">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on during my coursework and personal learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg text-foreground">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs flex-shrink-0">
                      {project.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Venkat5002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
