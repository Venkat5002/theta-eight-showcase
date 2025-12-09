import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, ArrowRight, Download } from "lucide-react";
import developerPortrait from "@/assets/developer-portrait.jpg";
import TypewriterText from "@/components/effects/TypewriterText";
import MagneticButton from "@/components/effects/MagneticButton";
import GlowingOrb from "@/components/effects/GlowingOrb";
import ScrollReveal from "@/components/effects/ScrollReveal";
import FloatingGeometry from "@/components/effects/FloatingGeometry";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* 3D Floating Geometry Background */}
      <FloatingGeometry className="opacity-60" />
      
      {/* Animated background orbs */}
      <GlowingOrb color="accent" size="lg" className="top-20 -left-32" delay={0} />
      <GlowingOrb color="primary" size="md" className="bottom-40 -right-20" delay={2} />
      <GlowingOrb color="accent" size="sm" className="top-1/2 left-1/3" delay={4} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="text-muted-foreground font-mono border-accent/50 backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Available for hire
              </Badge>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p 
                className="text-sm uppercase tracking-[0.3em] text-accent font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                &lt;/&gt; Hello World
              </motion.p>
              
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Venkat
                    </span>
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-accent rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </span>
                </h1>
                
                <h2 className="text-2xl lg:text-4xl text-foreground font-light">
                  <TypewriterText
                    words={[
                      "Full Stack Developer",
                      "UI/UX Enthusiast",
                      "Problem Solver",
                      "Tech Innovator",
                    ]}
                    className="text-accent font-semibold"
                  />
                </h2>
              </div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Crafting exceptional digital experiences through elegant code and innovative design. 
              Transforming ideas into reality, one pixel at a time.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <MagneticButton strength={0.2}>
                <Button variant="hero" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-accent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </MagneticButton>
              
              <MagneticButton strength={0.2}>
                <Button variant="outline" size="lg" className="group backdrop-blur-sm">
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </MagneticButton>
            </motion.div>
            
            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">Connect:</span>
              <div className="flex gap-2">
                {[
                  { icon: Github, href: "https://github.com/Venkat5002", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/venkatarupin/", label: "LinkedIn" },
                  { icon: Phone, href: "#", label: "Phone" },
                  { icon: Mail, href: "#", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <MagneticButton key={label} strength={0.4}>
                    <motion.a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  </MagneticButton>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Right side - Developer Image */}
          <motion.div 
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 -m-8 rounded-full border border-accent/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 -m-16 rounded-full border border-primary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Tech badges - floating */}
              <motion.div 
                className="absolute -top-4 -left-8 z-10"
                animate={floatingAnimation}
              >
                <Badge className="bg-card/80 backdrop-blur-md shadow-elegant text-card-foreground font-mono border border-accent/30">
                  <span className="text-accent">⚡</span> Java
                </Badge>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -right-8 z-10"
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
              >
                <Badge className="bg-card/80 backdrop-blur-md shadow-elegant text-card-foreground font-mono border border-primary/30">
                  <span className="text-primary">⚛️</span> React
                </Badge>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -right-16 z-10"
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
              >
                <Badge className="bg-card/80 backdrop-blur-md shadow-elegant text-card-foreground font-mono border border-accent/30">
                  <span className="text-green-500">▲</span> Node.js
                </Badge>
              </motion.div>
              
              {/* Main image container */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elegant bg-gradient-to-br from-accent/20 to-primary/20 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-secondary to-background">
                    <img
                      src={developerPortrait}
                      alt="Venkat - Developer Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-20 blur-3xl -z-10" />
              </motion.div>
              
              {/* Stats badges */}
              <motion.div 
                className="absolute top-8 -right-12"
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
              >
                <div className="bg-card/80 backdrop-blur-md rounded-xl p-4 shadow-elegant border border-border/50">
                  <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">2nd</div>
                  <div className="text-xs text-muted-foreground">Year CSE</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-8 -left-12"
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1.5 } }}
              >
                <div className="bg-card/80 backdrop-blur-md rounded-xl p-4 shadow-elegant border border-border/50">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">6+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-3 bg-accent rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
