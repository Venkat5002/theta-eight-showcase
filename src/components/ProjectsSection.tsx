import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Play } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "DeepFake Detection System",
      description: "Advanced multimodal AI system for detecting audio-video deepfakes using Swin-v2 and HuBERT transformers with cross-attention mechanisms.",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=500&h=300&fit=crop",
      technologies: ["Python", "PyTorch", "Swin Transformers", "HuBERT", "OpenCV"],
      category: "AI/ML",
      status: "Research",
      highlights: ["94%+ Accuracy", "Cross-attention", "Real-time Processing"]
    },
    {
      title: "Smart IoT Dashboard",
      description: "Full-stack IoT monitoring dashboard with real-time data visualization, predictive analytics, and automated alert systems.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket", "Arduino"],
      category: "IoT",
      status: "Production",
      highlights: ["Real-time Data", "Predictive Analytics", "Mobile Responsive"]
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting application built on Ethereum blockchain with smart contracts and decentralized identity verification.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      category: "Blockchain",
      status: "Development",
      highlights: ["Decentralized", "Secure Voting", "Smart Contracts"]
    },
    {
      title: "AI-Powered Chat Assistant",
      description: "Intelligent conversational AI with natural language processing, context awareness, and multi-domain knowledge integration.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["Python", "Transformers", "FastAPI", "React", "PostgreSQL"],
      category: "AI/ML",
      status: "Production",
      highlights: ["NLP Integration", "Context Aware", "Multi-domain"]
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
            A showcase of my latest projects spanning AI/ML, full-stack development, IoT, and blockchain technologies.
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
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4" />
                    Code
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
          <Button variant="hero" size="lg">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;