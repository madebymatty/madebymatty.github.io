export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  description: string;
  link?: string;
}

export interface SpeakingEngagement {
  event: string;
  location: string;
  topic: string;
  link?: string;
}

export interface NavItem {
  label: string;
  href: string;
}