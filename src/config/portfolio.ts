// ============================================
// PORTFOLIO CONFIGURATION FILE
// Edit this file to customize your portfolio
// ============================================

export const siteConfig = {
  // Personal Information
  name: "Venkat",
  fullName: "Venigalla Venkata Rupin",
  title: "Full Stack Developer",
  tagline: "Crafting exceptional digital experiences through elegant code and innovative design.",
  
  // Roles for typewriter effect
  roles: [
    "Full Stack Developer",
    "UI/UX Enthusiast", 
    "Problem Solver",
    "Tech Innovator",
  ],

  // Profile image
  avatar: "/src/assets/developer-portrait.jpg",

  // Contact Information
  contact: {
    email: "venkat@example.com",
    phone: "",
    location: "India",
  },

  // Social Links
  social: {
    github: "https://github.com/Venkat5002",
    linkedin: "https://www.linkedin.com/in/venkatarupin/",
    twitter: "",
    website: "",
  },

  // Education
  education: {
    institution: "Malla Reddy University",
    degree: "B.Tech in Computer Science Engineering",
    year: "2023 - Present",
    location: "India",
  },

  // Stats displayed in hero/experience
  stats: {
    yearLabel: "2nd",
    yearDescription: "Year CSE",
    projectCount: "6+",
    projectLabel: "Projects",
  },

  // Availability status
  availability: {
    isAvailable: true,
    message: "Available for hire",
    opportunityType: "Open to internships and projects",
  },
};

// Skills Configuration
export const skillsConfig = {
  categories: [
    {
      title: "Frontend Development",
      icon: "code",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Node.js", level: 75 },
      ],
    },
    {
      title: "Programming Languages",
      icon: "layers",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "C/C++", level: 75 },
      ],
    },
    {
      title: "Database & Backend",
      icon: "database",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "wrench",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Netlify/Vercel", level: 70 },
        { name: "Linux", level: 65 },
      ],
    },
  ],
  certifications: [
    "Computer Science Engineering Student",
    "MRU Training Program Graduate",
    "Full Stack Development",
    "Data Structures & Algorithms",
  ],
  techStack: [
    "Java",
    "React",
    "JavaScript",
    "MongoDB",
    "Node.js",
    "PostgreSQL",
    "HTML",
    "CSS",
    "Git",
    "VS Code",
  ],
};

// Projects Configuration
export const projectsConfig = [
  {
    title: "Weather Dashboard Application",
    description: "Interactive weather dashboard with real-time weather data, 7-day forecasts, and location-based weather tracking.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    technologies: ["JavaScript", "HTML", "CSS", "Weather API", "Chart.js"],
    category: "Frontend",
    status: "Production" as const,
    highlights: ["API Integration", "Real-time Data", "Interactive Charts"],
    github: "https://github.com/Venkat5002/DSA8",
    demo: "",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Modern Developer Portfolio",
    description: "Responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark/light mode and smooth animations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Frontend",
    status: "Production" as const,
    highlights: ["Responsive Design", "Modern UI/UX", "Fast Performance"],
    github: "https://github.com/Venkat5002/repo",
    demo: "",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "E-Commerce Platform",
    description: "Comprehensive platform featuring shopping cart, payments, and project management with task tracking.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"],
    category: "Full Stack",
    status: "Production" as const,
    highlights: ["E-Commerce", "Task Management", "Payment Integration"],
    github: "https://github.com/Venkat5002/codsoft-task-1-and-task-2",
    demo: "",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Comprehensive DSA implementations demonstrating algorithmic thinking and programming proficiency.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
    technologies: ["Java", "Algorithms", "Data Structures"],
    category: "Programming",
    status: "Development" as const,
    highlights: ["Problem Solving", "Java Programming", "Algorithm Design"],
    github: "https://github.com/Venkat5002/DSA8",
    demo: "",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "University Training Projects",
    description: "Collection of coding programs completed during training at Malla Reddy University.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
    technologies: ["JavaScript", "HTML", "CSS", "Java"],
    category: "Academic",
    status: "Production" as const,
    highlights: ["Academic Projects", "Learning Portfolio", "Training Program"],
    github: "https://github.com/Venkat5002/Training-01---2311CS010689-",
    demo: "",
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Java Programming Portfolio",
    description: "Java programming assignments focusing on data structures from 2nd year 1st semester.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop",
    technologies: ["Java", "Data Structures", "OOP"],
    category: "Academic",
    status: "Production" as const,
    highlights: ["Object-Oriented", "Data Structures", "Java Expertise"],
    github: "https://github.com/Venkat5002/java-programming-done-in-2nd-year-1st-semester-",
    demo: "",
    gradient: "from-red-500/20 to-orange-500/20",
  },
];

// Navigation Links
export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Footer Links
export const footerConfig = {
  quickLinks: ["Experience", "Skills", "Projects", "Contact"],
  services: ["Web Development", "Full Stack", "UI/UX", "APIs"],
};

// Theme Colors (for future theme customization)
export const themeColors = {
  presets: [
    { name: "Ocean", primary: "225 70% 25%", accent: "175 85% 45%" },
    { name: "Sunset", primary: "15 80% 50%", accent: "45 90% 55%" },
    { name: "Forest", primary: "150 60% 30%", accent: "120 70% 45%" },
    { name: "Purple", primary: "270 70% 50%", accent: "280 80% 60%" },
  ],
};
