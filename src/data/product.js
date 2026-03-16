export const projects = [
  {
    id: 1,
    title: "Valor Tech",
    description:
      "A cutting-edge technology company website featuring modern design, smooth animations, and responsive layouts. Built with React and advanced UI components.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    live: "https://valor-tech.vercel.app/",
    github: "#",
    category: "Web Application",
  },
  {
    id: 2,
    title: "Estate Platform",
    description:
      "Modern real estate platform with advanced search, property listings, and interactive maps. Features elegant UI and seamless user experience.",
    tech: ["React", "Next.js", "MongoDB", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    live: "https://estate-alpha-green.vercel.app/",
    github: "#",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Edusity",
    description:
      "Educational technology platform designed for modern learning. Interactive course management, student dashboards, and comprehensive analytics.",
    tech: ["React", "Firebase", "Tailwind CSS", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    live: "https://edusity-tau-teal.vercel.app/",
    github: "#",
    category: "EdTech",
  },
  {
    id: 4,
    title: "ByteScripterz",
    description:
      "Professional software development agency website. Showcases services, portfolio, and team expertise with premium animations and modern aesthetics.",
    tech: ["React", "GSAP", "Tailwind CSS", "EmailJS"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    live: "https://www.bytescripterz.com/",
    github: "#",
    category: "Agency Website",
  },
  {
    id: 5,
    title: "ENR Web",
    description:
      "Enterprise-level web application with complex state management, real-time updates, and scalable architecture. Built for performance and reliability.",
    tech: ["React", "Redux", "Node.js", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    live: "https://enr-web.vercel.app/",
    github: "#",
    category: "Enterprise",
  },
];

export const skills = {
  frontend: [
    { name: "React", level: 95, icon: "FaReact" },
    { name: "Next.js", level: 90, icon: "SiNextdotjs" },
    { name: "TypeScript", level: 88, icon: "SiTypescript" },
    { name: "Tailwind CSS", level: 95, icon: "SiTailwindcss" },
    { name: "Framer Motion", level: 85, icon: "SiFramer" },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "FaNodeJs" },
    { name: "Express", level: 82, icon: "SiExpress" },
    { name: "MongoDB", level: 80, icon: "SiMongodb" },
    { name: "PostgreSQL", level: 78, icon: "SiPostgresql" },
  ],
  tools: [
    { name: "Git", level: 90, icon: "FaGitAlt" },
    { name: "AWS(EC2)", level: 75, icon: "TbBrandAws" },
    { name: "Figma", level: 88, icon: "FaFigma" },
    { name: "VS Code", level: 95, icon: "SiVisualstudiocode" }, // mapped to VscCode
    { name: "Vercel", level: 92, icon: "SiVercel" },
  ],
  frameworks: [
    { name: "React", level: 95, icon: "FaReact" },
    { name: "GSAP", level: 85, icon: "SiGreensock" },
  ],
};

export const experience = [
  {
    year: "2024 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    description:
      "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
    skills: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    year: "2022 - 2024",
    title: "Frontend Developer",
    company: "Digital Solutions Co.",
    description:
      "Developed responsive web applications with modern frameworks. Implemented complex UI/UX designs and optimized application performance.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    year: "2021 - 2022",
    title: "Junior Developer",
    company: "StartUp Labs",
    description:
      "Built and maintained web applications. Collaborated with cross-functional teams to deliver high-quality software products.",
    skills: ["JavaScript", "React", "CSS", "Git"],
  },
  {
    year: "2020 - 2021",
    title: "Learning Journey",
    company: "Self-Taught",
    description:
      "Intensive learning of web development technologies, building personal projects, and contributing to open source.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
];
