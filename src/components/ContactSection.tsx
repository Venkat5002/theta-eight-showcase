import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import TiltCard from "@/components/effects/TiltCard";
import MagneticButton from "@/components/effects/MagneticButton";

const ContactSection = () => {
  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-accent font-mono border-accent/50">
              <Sparkles className="w-3 h-3 mr-1" />
              GET IN TOUCH
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's <span className="bg-gradient-accent bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities. Let's discuss!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            <ScrollReveal direction="left">
              <TiltCard intensity={3}>
                <Card className="shadow-card bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Contact Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { icon: Mail, label: "Email", value: "venkat@example.com" },
                      { icon: Phone, label: "University", value: "Malla Reddy University" },
                      { icon: MapPin, label: "Location", value: "India" },
                      { icon: Github, label: "GitHub", value: "Venkat5002" },
                    ].map(({ icon: Icon, label, value }, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{label}</p>
                          <p className="font-medium text-foreground">{value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <Card className="shadow-card bg-gradient-accent overflow-hidden">
                <CardContent className="p-6 text-center text-accent-foreground">
                  <motion.div
                    className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h3 className="font-semibold mb-2">Available for Opportunities</h3>
                  <p className="text-sm opacity-90">Open to internships and projects</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" className="lg:col-span-2">
            <TiltCard intensity={2}>
              <Card className="shadow-card bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First name" className="bg-secondary/50" />
                    <Input placeholder="Last name" className="bg-secondary/50" />
                  </div>
                  <Input type="email" placeholder="Email" className="bg-secondary/50" />
                  <Input placeholder="Subject" className="bg-secondary/50" />
                  <Textarea placeholder="Your message..." className="min-h-[120px] bg-secondary/50" />
                  <MagneticButton className="w-full">
                    <Button variant="hero" size="lg" className="w-full group">
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </MagneticButton>
                </CardContent>
              </Card>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
