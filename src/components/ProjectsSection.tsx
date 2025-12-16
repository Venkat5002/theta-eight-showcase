import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github, Calendar, ArrowRight, Lightbulb, Code2 } from "lucide-react";
import { projectsConfig, siteConfig } from "@/config/portfolio";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications I've built during my academic journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectsConfig.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className={`glass-card hover-lift h-full flex flex-col overflow-hidden group`}>
                {/* Gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {project.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem/Solution highlight */}
                  <div className="space-y-2 mb-4 flex-1">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-xs font-medium text-muted-foreground">Problem</span>
                          <p className="text-xs text-foreground">{project.problem}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Code2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-xs font-medium text-muted-foreground">Solution</span>
                          <p className="text-xs text-foreground">{project.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs font-normal px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 mt-auto pt-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-1.5" />
                        View Code
                      </a>
                    </Button>
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
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="group" asChild>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              Explore All Projects on GitHub
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
