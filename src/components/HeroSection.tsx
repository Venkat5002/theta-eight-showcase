import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ArrowDown, Download, MapPin } from "lucide-react";
import { siteConfig } from "@/config/portfolio";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/30 pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-primary/30 bg-primary/5">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                {siteConfig.availability.message}
              </Badge>
            </motion.div>

            {/* Name and Title */}
            <div className="space-y-3">
              <p className="text-muted-foreground font-medium">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                {siteConfig.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold gradient-text">
                {siteConfig.title} | {siteConfig.subtitle}
              </p>
            </div>

            {/* Bio */}
            <p className="text-muted-foreground leading-relaxed text-lg max-w-xl">
              {siteConfig.tagline}. Currently pursuing B.Tech in Computer Science at{" "}
              <span className="text-foreground font-medium">{siteConfig.education.institution}</span>,
              focused on full-stack development and building practical applications.
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 py-2">
              {[
                { value: siteConfig.stats.cgpa, label: "CGPA" },
                { value: siteConfig.stats.projects, label: "Projects" },
                { value: siteConfig.stats.certifications, label: "Certifications" },
                { value: siteConfig.stats.year, label: "B.Tech CSE" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-card border border-border rounded-xl px-5 py-3 shadow-sm hover-lift"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Button size="lg" className="btn-glow" asChild>
                <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="./resume.pdf" download="V_Venkata_Rupin_Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 pt-4"
            >
              <span className="text-sm text-muted-foreground">Connect:</span>
              <div className="flex gap-2">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl" />
              
              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-card shadow-2xl bg-card">
                  <img
                    src={profilePhoto}
                    alt={`${siteConfig.name} - B.Tech CSE Student at Malla Reddy University`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-4 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      {siteConfig.contact.location}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'experience')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
