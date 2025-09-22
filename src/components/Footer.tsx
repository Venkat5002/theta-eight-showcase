import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono border-primary-foreground text-primary-foreground">
                {"{ Dev }"}
              </Badge>
              <span className="font-bold text-xl">
                Venkat
                <span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Computer Science Engineering student at Malla Reddy University. 
              Passionate about full-stack development and building innovative digital solutions.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                <a href="https://github.com/Venkat5002" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                <a href="https://www.linkedin.com/in/venkatarupin/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Mail className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Phone className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Web Development</li>
              <li>AI/ML Solutions</li>
              <li>IoT Development</li>
              <li>Blockchain Apps</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>venigalla.venkata.rupin@example.com</p>
              <p>Malla Reddy University</p>
              <p>Available for opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
            © {currentYear} Venkat Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-primary-foreground/60">
            Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> by a CSE student
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;