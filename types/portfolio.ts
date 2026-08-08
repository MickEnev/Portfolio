export type SocialLink = { label: string; href: string };

export type ExperienceItem = {
  role: string;
  company: string;
  dates: string;
  location?: string;
  summary: string[];
  technologies: string[];
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;
  outcome?: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export type TechnologyGroup = { label: string; items: string[]; primary?: boolean };
