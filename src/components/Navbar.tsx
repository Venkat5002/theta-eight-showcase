import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks, siteConfig } from "@/config/portfolio";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="font-bold text-xl text-foreground hover:text-primary transition-colors">
            {siteConfig.shortName}<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <a href="/resume.pdf" download="V_Venkata_Rupin_Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
            <Button size="sm" className="btn-glow" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2.5 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4 space-y-2 border-t border-border mt-2">
                <Button variant="outline" className="w-full" asChild>
                  <a href="/resume.pdf" download="V_Venkata_Rupin_Resume.pdf">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
                <Button className="w-full" asChild>
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Hire Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
