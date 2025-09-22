import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent font-mono">
            PROFESSIONAL JOURNEY
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="text-accent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience and contributions in cutting-edge technology and research.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl text-primary">
                    Malla Reddy University
                  </CardTitle>
                  <h3 className="text-lg font-semibold text-foreground">
                    B.Tech in Computer Science Engineering
                  </h3>
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
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Academic Focus</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    Currently pursuing Computer Science Engineering with focus on modern development practices.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    Completed multiple training programs focusing on web development and data structures.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    Active contributor to various development projects and coding challenges.
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-foreground">Featured Project</h4>
                <h5 className="text-primary font-medium mb-2">E-Commerce & Project Management Platform</h5>
                <p className="text-sm text-muted-foreground mb-3">
                  Technologies: React, Node.js, MongoDB, PostgreSQL, HTML, CSS, JavaScript
                </p>
                <p className="text-sm text-muted-foreground">
                  Built comprehensive E-Commerce website and Project Management tool featuring shopping, 
                  payments, task management, and tracking capabilities.
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {["Java", "React", "Node.js", "MongoDB", "PostgreSQL", "HTML", "CSS", "JavaScript"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center p-6 shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">2nd</div>
              <div className="text-sm text-muted-foreground">Year CSE Student</div>
            </Card>
            <Card className="text-center p-6 shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">6+</div>
              <div className="text-sm text-muted-foreground">GitHub Repositories</div>
            </Card>
            <Card className="text-center p-6 shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">MRU</div>
              <div className="text-sm text-muted-foreground">University Training</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;