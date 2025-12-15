import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import developerPortrait from "@/assets/developer-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground font-medium">
                Hello, I'm
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Venigalla Venkata Rupin
              </h1>
              <p className="text-xl lg:text-2xl text-primary font-medium">
                3rd Year B.Tech Student | Aspiring Software Engineer
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Computer Science Engineering student at Malla Reddy University with a strong foundation 
              in full-stack development. Passionate about building practical applications and 
              continuously learning new technologies. Currently seeking internship opportunities 
              to apply my skills in a professional environment.
            </p>

            {/* Stats */}
            <div className="flex gap-8 py-4">
              <div>
                <p className="text-2xl font-bold text-foreground">8.82</p>
                <p className="text-sm text-muted-foreground">CGPA</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">6+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3rd</p>
                <p className="text-sm text-muted-foreground">Year CSE</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Find me on:</span>
              <a
                href="https://github.com/Venkat5002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/venkatarupin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-border shadow-lg">
                <img
                  src={developerPortrait}
                  alt="Venigalla Venkata Rupin"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Availability Badge */}
              <div className="absolute bottom-4 right-4 bg-card border border-border rounded-full px-4 py-2 shadow-md">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm font-medium text-foreground">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-16"
        >
          <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
