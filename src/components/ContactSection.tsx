import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent font-mono">
            GET IN TOUCH
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">venigalla.venkata.rupin@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">University</p>
                    <p className="font-medium text-foreground">Malla Reddy University</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium text-foreground">Venkat5002</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Social Media</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-primary/10" asChild>
                  <a href="https://github.com/Venkat5002" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                    <div className="text-left">
                      <p className="font-medium">GitHub</p>
                      <p className="text-xs text-muted-foreground">Venkat5002</p>
                    </div>
                  </a>
                </Button>
                
                <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-primary/10" asChild>
                  <a href="https://www.linkedin.com/in/venkatarupin/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    <div className="text-left">
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-xs text-muted-foreground">venkatarupin</p>
                    </div>
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="shadow-card bg-gradient-accent text-accent-foreground">
              <CardContent className="p-6 text-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-3 animate-pulse"></div>
                <h3 className="font-semibold mb-2">Available for Opportunities</h3>
                <p className="text-sm opacity-90">
                  Open to internships, projects, and learning opportunities
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input placeholder="What would you like to discuss?" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  I typically respond within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;