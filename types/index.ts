export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  codeUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyLogo?: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    email: string;
    location: string;
    avatar: string;
    resumeUrl: string;
  };
  navigation: NavItem[];
  projects: Project[];
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
  socialLinks: SocialLink[];
}
