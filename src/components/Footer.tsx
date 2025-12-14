import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Heart, Sparkles } from "lucide-react";
import { siteConfig, footerConfig } from "@/config/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-glow rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono border-primary-foreground/50 text-primary-foreground">
                <Sparkles className="w-3 h-3 mr-1" />
                {"{ Dev }"}
              </Badge>
              <span className="font-bold text-xl">{siteConfig.name}<span className="text-accent">.</span></span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              CSE student passionate about full-stack development and innovation.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Github, href: siteConfig.social.github },
                { icon: Linkedin, href: siteConfig.social.linkedin },
                { icon: Mail, href: siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : "#" },
                { icon: Phone, href: siteConfig.contact.phone ? `tel:${siteConfig.contact.phone}` : "#" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.div key={i} whileHover={{ scale: 1.1, y: -2 }}>
                  <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {[
            { title: "Quick Links", items: footerConfig.quickLinks },
            { title: "Services", items: footerConfig.services },
            { title: "Contact", items: [siteConfig.contact.email, siteConfig.education.institution, siteConfig.availability.opportunityType] },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                {section.items.map((item, j) => (
                  <li key={j} className="hover:text-accent transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">© {currentYear} {siteConfig.name} Portfolio</p>
          <div className="flex items-center gap-1 text-sm text-primary-foreground/60">
            Made with <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" /> by {siteConfig.name}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
