import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Node.js", level: 75 },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "C/C++", level: 75 },
      ]
    },
    {
      title: "Database & Backend",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Netlify/Vercel", level: 70 },
        { name: "Linux", level: 65 },
      ]
    }
  ];

  const certifications = [
    "Computer Science Engineering Student",
    "MRU Training Program Graduate",
    "Full Stack Development",
    "Data Structures & Algorithms"
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent font-mono">
            TECHNICAL EXPERTISE
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="text-accent">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Certifications & Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Preferred Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Java", "React", "JavaScript", "MongoDB", "Node.js", "PostgreSQL", "HTML", "CSS", "Git", "VS Code"].map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;