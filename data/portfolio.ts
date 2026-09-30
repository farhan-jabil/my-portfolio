// Edit everything about your portfolio here.
import type { ExperienceItem, NavItem, Profile, Project, SkillGroup } from "../types";
import myImage from "@/public/my_photo.jpeg"

export const profile: Profile = {
  name: "Farhan",
  role: "Your Role Here",
  tagline: "One or two sentences about what you do and who you help.",
  location: "Dhaka, Bangladesh",
  email: "you@example.com",
  status: "Open to work",
  image: myImage,
  chips: ["Skill one", "Skill two", "Skill three"],
  cv: "/Farhan-CV.pdf", // put your file in /public with this name
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
};

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about: string[] = [
  "Write a short paragraph about your background and what drives your work.",
  "Add a second paragraph about how you work and what you are looking for next.",
];

export const experience: ExperienceItem[] = [
  { role: "Job Title", company: "Company Name", period: "2023 - Present", points: ["What you built or delivered, with a result.", "Another concrete responsibility or achievement."] },
  { role: "Previous Title", company: "Previous Company", period: "2021 - 2023", points: ["Describe one achievement.", "Describe another."] },
];

export const skills: SkillGroup[] = [
  { group: "Core", items: ["Skill one", "Skill two", "Skill three"] },
  { group: "Tools", items: ["Tool one", "Tool two", "Tool three"] },
  { group: "Also", items: ["Extra one", "Extra two"] },
];

export const projects: Project[] = [
  { title: "Project One", desc: "One sentence on what it is and the problem it solves.", tags: ["Next.js", "Tailwind"], link: "#" },
  { title: "Project Two", desc: "One sentence on what it is and the problem it solves.", tags: ["Node.js", "Express"], link: "#" },
  { title: "Project Three", desc: "One sentence on what it is and the problem it solves.", tags: ["Java", "Spring Boot"], link: "#" },
];
