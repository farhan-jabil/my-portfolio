import { StaticImageData } from "next/image";

export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  status: string;
  image: StaticImageData | string;
  chips: string[];
  cv: string;
  socials: SocialLink[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
}

export interface ExperienceProject {
  name: string;
  url?: string;
}

export interface ExperienceItem {
  company: string;
  roles: ExperienceRole[];
  projects: ExperienceProject[];
  points: string[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

export type RevealDirection = "up" | "left" | "right";