import { useEffect } from "react";
import { siteConfig } from "@/config/portfolio";

const SEOHead = () => {
  useEffect(() => {
    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.fullName,
      jobTitle: siteConfig.title,
      description: siteConfig.tagline,
      url: window.location.origin,
      sameAs: [
        siteConfig.social.github,
        siteConfig.social.linkedin,
        siteConfig.social.twitter,
      ].filter(Boolean),
      alumniOf: {
        "@type": "EducationalOrganization",
        name: siteConfig.education.institution,
      },
      knowsAbout: [
        "JavaScript",
        "React",
        "Java",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "Full Stack Development",
        "Web Development",
      ],
    };

    // Check if script already exists
    const existingScript = document.querySelector('script[data-seo="json-ld"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "json-ld");
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-seo="json-ld"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};

export default SEOHead;
