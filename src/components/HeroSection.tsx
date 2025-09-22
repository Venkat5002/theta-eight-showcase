import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import developerPortrait from "@/assets/developer-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Code snippet header */}
        <div className="mb-6">
          <Badge variant="outline" className="text-muted-foreground font-mono">
            {"{ \"developer\": true }"}
          </Badge>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-mono">
                &lt;code&gt;Hello World&lt;/code&gt;
              </p>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">
                WELCOME TO MY WORLD
              </p>
              
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-6xl font-bold">
                  Hi, I'm{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
                
                <h2 className="text-2xl lg:text-3xl text-foreground">
                  Full Stack Developer with{" "}
                  <span className="text-accent font-semibold">AI/ML expertise</span>
                  <span className="text-muted-foreground font-mono">&lt;/&gt;</span>
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I'm a 2nd-year B.Tech student passionate about technology and innovation. 
                I explore frontend development, AI/ML, IoT, and blockchain to build 
                meaningful, user-centered digital solutions.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Find me on:</span>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                  <a href="https://www.linkedin.com/in/venkatarupin/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Phone className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right side - Developer Image with decorative elements */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Tech badges */}
              <div className="absolute -top-4 -left-8 z-10">
                <Badge className="bg-card shadow-card text-card-foreground font-mono">
                  &lt;TensorFlow/&gt;
                </Badge>
              </div>
              <div className="absolute -bottom-4 -right-8 z-10">
                <Badge className="bg-card shadow-card text-card-foreground font-mono">
                  &lt;scikit-learn/&gt;
                </Badge>
              </div>
              
              {/* Main image container */}
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant bg-gradient-to-br from-secondary to-background p-2">
                  <img
                    src={developerPortrait}
                    alt="Developer Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Stats badges */}
                <div className="absolute top-8 -right-12">
                  <div className="bg-card rounded-lg p-3 shadow-card">
                    <div className="text-2xl font-bold text-accent">1 YR+</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                </div>
                
                <div className="absolute bottom-8 -left-12">
                  <div className="bg-card rounded-lg p-3 shadow-card">
                    <div className="text-2xl font-bold text-accent">20+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;