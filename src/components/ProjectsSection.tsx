import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Play } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Modern Developer Portfolio Website",
      description: "Responsive and modern personal portfolio website built with React, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and professional design showcasing my projects and skills.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
      category: "Frontend",
      status: "Production",
      highlights: ["Responsive Design", "Modern UI/UX", "Fast Performance"],
      github: "https://github.com/Venkat5002/repo"
    },
    {
      title: "E-Commerce & Project Management Platform",
      description: "Comprehensive platform featuring E-Commerce website with shopping cart, payments, and a Project Management Tool with task tracking and management capabilities.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "HTML", "CSS"],
      category: "Full Stack",
      status: "Production",
      highlights: ["E-Commerce", "Task Management", "Payment Integration"],
      github: "https://github.com/Venkat5002/codsoft-task-1-and-task-2"
    },
    {
      title: "Data Structures & Algorithms",
      description: "Comprehensive collection of DSA implementations and problem solutions demonstrating algorithmic thinking and programming proficiency in Java.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      technologies: ["Java", "Algorithms", "Data Structures"],
      category: "Programming",
      status: "Development",
      highlights: ["Problem Solving", "Java Programming", "Algorithm Design"],
      github: "https://github.com/Venkat5002/DSA8"
    },
    {
      title: "University Training Projects",
      description: "Collection of all coding programs and projects completed during training program at Malla Reddy University, showcasing learning progression.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "HTML", "CSS", "Java"],
      category: "Academic",
      status: "Production",
      highlights: ["Academic Projects", "Learning Portfolio", "Training Program"],
      github: "https://github.com/Venkat5002/Training-01---2311CS010689-"
    },
    {
      title: "Java Programming Portfolio",
      description: "Comprehensive Java programming assignments and projects from 2nd year 1st semester, focusing on data structures using Java programming language.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop",
      technologies: ["Java", "Data Structures", "OOP"],
      category: "Academic",
      status: "Production",
      highlights: ["Object-Oriented", "Data Structures", "Java Expertise"],
      github: "https://github.com/Venkat5002/java-programming-done-in-2nd-year-1st-semester-"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-green-500";
      case "Development": return "bg-yellow-500";
      case "Research": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent font-mono">
            FEATURED WORKS
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Recent <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest projects spanning full-stack development, data structures, and academic achievements from my Computer Science journey.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></div>
                    <span className="text-xs text-white font-medium">{project.status}</span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs text-accent border-accent/30">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                  {project.status === "Production" && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  )}
                  {project.status === "Development" && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="w-4 h-4" />
                      Preview
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="https://github.com/Venkat5002" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;