import type { ExperienceItem, Project, SocialLink, TechnologyGroup } from "../types/portfolio";

export const contact = {
  email: "mickenev@gmail.com",
  veriqEmail: "mick@veriqdigital.com",
  location: "Des Moines, Iowa",
  resume: "/resume.pdf",
};

export const veriqUrl = "https://www.veriqdigital.com/";

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/MickEnev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mickenev/" },
];

export const technologyGroups: TechnologyGroup[] = [
  { label: "Core", items: ["Java", "JavaScript", "TypeScript", "React", "Next.js", "SQL"], primary: true },
  { label: "Web & backend", items: ["C#", ".NET", "Python", "Flask", "REST APIs"] },
  { label: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j"] },
  { label: "Additional", items: ["C++", "Go", "HTML", "CSS", "Tailwind CSS"] },
  { label: "Workflow", items: ["Git", "GitHub", "Visual Studio", "Figma"] },
];

export const experience: ExperienceItem[] = [
  {
    role: "Associate Software Developer",
    company: "QCI",
    dates: "Apr 2026 — Present",
    location: "Des Moines, Iowa",
    summary: [
      "Building and maintaining custom software that supports real business workflows.",
      "Collaborating across teams to translate operational needs into reliable, maintainable applications.",
    ],
    technologies: ["Java", "JavaScript", "React", "SQL"],
  },
  {
    role: "Founder & Software Engineer",
    company: "Veriq Digital",
    dates: "2026 — Present",
    location: "Des Moines, Iowa",
    summary: [
      "Designing and developing production web experiences, custom software, and digital systems for businesses.",
      "Owning client-facing product work from architecture and implementation through responsive delivery and deployment.",
    ],
    technologies: ["TypeScript", "React", "Next.js", "Product engineering"],
  },
  {
    role: ".NET Software Engineer",
    company: "OPTO International",
    dates: "Jun 2025 — Apr 2026",
    summary: [
      "Led frontend development for a Blazor inventory system backed by a custom API.",
      "Built data-driven UI state, search, rich-text editing, spell checking, and English–Spanish language support.",
      "Diagnosed production issues and improved reliability across internal workflows.",
    ],
    technologies: ["C#", ".NET", "Blazor", "REST APIs"],
  },
  {
    role: "Computer Science AI Trainer",
    company: "Outlier AI",
    dates: "Jan 2024 — Apr 2025",
    summary: [
      "Reviewed, tested, and improved AI-generated programming solutions across Python, JavaScript, and C++.",
      "Analyzed recurring failure patterns and refactored code using test-driven workflows.",
    ],
    technologies: ["Python", "JavaScript", "C++", "Code review"],
  },
  {
    role: "Computer Science Course Assistant",
    company: "University of Illinois Urbana-Champaign",
    dates: "Aug 2022 — Dec 2022",
    summary: [
      "Mentored students through data structures, object-oriented programming, debugging, and feature design.",
      "Led weekly office hours and provided implementation feedback for semester projects.",
    ],
    technologies: ["Java", "Data structures", "Teaching"],
  },
  {
    role: "Research Analyst Intern",
    company: "American Energy Society",
    dates: "Feb 2023 — May 2023",
    summary: [
      "Researched global university energy programs and organized findings into a decision-support dataset.",
      "Collaborated with a multidisciplinary research team to synthesize and communicate findings.",
    ],
    technologies: ["Research", "Data analysis", "Excel"],
  },
];

export const projects: Project[] = [
  {
    title: "Veriq Digital", slug: "veriq-digital", category: "Production web experience", year: "2026",
    description: "A custom-designed, responsive website for my software studio, built to present its work clearly and turn interest into qualified conversations.",
    outcome: "A production-deployed frontend with accessible, performance-conscious interactions and a focused lead-capture path.",
    technologies: ["Next.js", "React", "TypeScript", "Responsive design"], liveUrl: veriqUrl, featured: true,
  },
  {
    title: "Database Dashboard", slug: "database-dashboard", category: "Research data platform", year: "2024",
    description: "A research dashboard that helps faculty explore keywords and relationships across MySQL, MongoDB, and Neo4j datasets.",
    outcome: "Designed cross-database search, visual exploration, and editing workflows for heterogeneous data.",
    technologies: ["Python", "Dash", "MySQL", "MongoDB", "Neo4j"], image: "/dashboard.jpg",
    githubUrl: "https://github.com/YungBulgaria/Mick_Marcos_411/", featured: true,
  },
  {
    title: "CHIP-8 Emulator", slug: "chip-8-emulator", category: "Systems programming", year: "2025",
    description: "A working CHIP-8 emulator built to understand computer architecture through instruction decoding, memory, input, timers, and pixel rendering.",
    outcome: "Runs tested ROMs and turns low-level architecture concepts into a tangible interactive system.",
    technologies: ["C++", "Emulation", "Computer architecture", "Graphics"], featured: true,
  },
  { title: "Weightlifting Tracker", slug: "weightlifting-tracker", category: "Full-stack application", year: "2024", description: "A workout logbook for recording exercises, sets, reps, weight, and custom movements in a SQL database.", technologies: ["Python", "Flask", "JavaScript", "MySQL"], image: "/weightliftingapp.jpg", githubUrl: "https://github.com/YungBulgaria/WeightliftingApp/", featured: false },
  { title: "Narrative Visualization", slug: "narrative-visualization", category: "Data visualization", year: "2024", description: "An interactive D3 story exploring the relationship between engine cylinders and fuel efficiency.", technologies: ["D3.js", "JavaScript", "HTML", "CSS"], image: "/NarVis.png", liveUrl: "https://mickenev.github.io/", githubUrl: "https://github.com/YungBulgaria/YungBulgaria.github.io/", featured: false },
  { title: "Tower Defense Game", slug: "tower-defense", category: "Game development", year: "2024", description: "A multi-level tower defense game created with a five-person team in Unreal Engine 5.", technologies: ["Unreal Engine 5", "Blueprints", "Git"], image: "/tdg.jpg", liveUrl: "https://mediaspace.illinois.edu/media/t/1_wzhd14lx/", featured: false },
  { title: "Android Weather App", slug: "weather-app", category: "Mobile application", year: "2024", description: "An Android weather experience with mapped locations, live forecast data, and configurable themes.", technologies: ["Java", "Android", "REST APIs"], image: "/weatherapp.png", liveUrl: "https://drive.google.com/file/d/12nkk7TtX-BSvycx__5RHsbysaMhi97vE/view?usp=sharing/", featured: false },
];
