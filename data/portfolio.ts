// Edit everything about your portfolio here.
import type {
  ExperienceItem,
  NavItem,
  Profile,
  Project,
  SkillGroup,
  EducationItem,
} from "../types";
import myImage from "@/public/my_photo.jpeg";

export const profile: Profile = {
  name: "Farhan",
  role: "Your Role Here",
  tagline:
    "I’m a Software Engineer who loves turning ideas into functional, meaningful software. I’m constantly learning, building, and improving to create better digital experiences.",
  location: "Dhaka, Bangladesh",
  email: "farhanhasan295@gmail.com",
  status: "Open to work",
  image: myImage,
  chips: ["Frontend Development", "React & Next.js", "UI/UX Implementation"],
  cv: "/Farhan_Hassan_Jabil.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/farhan-jabil" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/farhan-hasan-751066162",
    },
  ],
};

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about: string[] = [
  "I’m a Software Engineer with a background in Computer Science and Engineering, focused on building modern, responsive, and user-friendly web applications. My experience is mainly centered around frontend development with React and Next.js, where I enjoy turning designs and ideas into polished, functional products.",

  "I’m continuously expanding my skills beyond the frontend, currently developing my backend knowledge with Java and Spring Boot. I enjoy learning by building real-world projects, solving practical problems, and improving the way I write and structure software. I’m looking to grow as a well-rounded software engineer while building products that are reliable, maintainable, and genuinely useful.",
];

export const education: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    year: "2022",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "BAF Shaheen College, Dhaka",
    year: "2017",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "BB Govt. Boys High School, Tangail",
    year: "2015",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "SM Technology",
    roles: [
      {
        title: "Junior Executive Frontend Developer",
        period: "01/07/2026 - 19/09/2026",
      },
      {
        title: "Junior Frontend Developer",
        period: "02/08/2025 - 30/06/2026",
      },
    ],
    projects: [
      { name: "HelpPro 24/7", url: "https://helppro247.com" },
      { name: "Super Kaimono", url: "https://superkaimono.com" },
      { name: "Omnia Essence", url: "https://omniaessence.net" },
      { name: "ProBanesa", url: "https://web.probanesa.com" },
      { name: "Salvage Spy" },
      { name: "Horeatimis" },
      { name: "Keep it halal" },
      { name: "Pilaa", url: "https://pilaa-landing-page.vercel.app" },
      { name: "VMTA" },
    ],
    points: [
      "Worked primarily on frontend development and admin dashboard interfaces across several web projects.",
      "Tech Used: Next.js, Tailwind CSS",
    ],
  },

  {
    company: "Okobiz",
    roles: [
      {
        title: "Associate Web Developer",
        period: "01/03/2025 - 31/07/2025",
      },
      {
        title: "Intern",
        period: "01/09/2024 - 28/02/2025",
      },
    ],
    projects: [
      { name: "Unicrescent", url: "https://www.unicrescent.com/" },
      { name: "NexlinBD", url: "https://nexlinbd.com" },
      { name: "Idea Tree", url: "https://ideatreebd.com" },
      { name: "Quranic Edification", url: "https://quranicednet.com" },
      { name: "Qutex", url: "https://qutexbd.com" },
      { name: "Madina Refrigeration LTD" },
      { name: "BD Hajj" },
      { name: "Fatiha Travels", url: "https://fatihatravels.com" },
      { name: "Eco Comfort Socks" },
      { name: "Agro Infusion" },
      { name: "Permatherapy" },
    ],
    points: [
      "Worked primarily on frontend development for multiple web applications, with additional involvement in backend development and API-related tasks.",
      "Tech Used: React, Node.js, Express, MongoDB, Tailwind CSS",
    ],
  },

  {
    company: "Fortune Tech Ltd.",
    roles: [
      {
        title: "Intern – Frontend Developer",
        period: "01/01/2024 - 31/03/2024",
      },
    ],
    projects: [
      { name: "Care Me", url: "https://caremebd.com" },
      { name: "Proton Technology", url: "https://protontechbd.com" },
      { name: "Fortune Inventory" },
    ],
    points: [
      "Worked on frontend development for e-commerce and inventory management projects.",
      "Tech Used: Angular, Tailwind CSS",
    ],
  },

  {
    company: "Solutya Private Limited",
    roles: [
      {
        title: "Intern – Web Developer",
        period: "01/09/2022 - 28/02/2023",
      },
    ],
    projects: [
      { name: "WappSolutya", url: "https://wapp.solutya.com/" },
      {
        name: "SolPlant",
        url: "https://themeforest.net/item/solplant-flower-shop-ecommerce-htmlcss-template/43883469?s_rank=3",
      },
      { name: "SaaS", url: "https://sass-two.vercel.app" },
      { name: "Doctor Guide", url: "https://doctor-guide.vercel.app" },
      { name: "Blood Donors", url: "https://blood-bank-gamma.vercel.app" },
      { name: "Koppee", url: "https://koppee.vercel.app" },
      { name: "Gym Baran", url: "https://gym-baran-xi.vercel.app" },
      { name: "Cake Zone", url: "https://farhan-jabil.github.io/cake-zone" },
      { name: "EduBlink", url: "https://edublink-flax.vercel.app" },
    ],
    points: [
      "Converted UI/UX designs into responsive web interfaces and worked on both React-based and HTML/CSS-based frontend projects.",
      "Tech Used: HTML, CSS, Sass, Bootstrap, Tailwind CSS, JavaScript, and React.js",
    ],
  },

  {
    company: "Software Bazar Bangladesh",
    roles: [
      {
        title: "Intern – Frontend Developer",
        period: "01/01/2022 - 31/03/2022",
      },
    ],
    projects: [{ name: "Hotel 365" }],
    points: [
      "Worked on the frontend of an ongoing Laravel-based project, implementing and refining user interfaces.",
      "Tech Used: HTML, CSS, Bootstrap",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
      "Redux Toolkit",
      "RTK Query",
      "Responsive Design",
      "Figma to React",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Java",
      "Spring Boot",
      "PostgreSQL",
    ],
  },
  {
    group: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Vercel",
      "Render",
      "Termius",
      "Postman",
    ],
  },
  {
    group: "Development",
    items: [
      "API Integration",
      "Authentication",
      "State Management",
      "CRUD Applications",
      "Dashboard Development",
      "POS Systems",
      "HRM Systems",
      "UI Implementation",
      "Web Application Development",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Work Stream",
    desc: "Work Stream is a full-stack employee management platform designed to streamline leave requests, approvals, employee records, and administrative workflow.",
    tags: ["Next.js", "Tailwind", "Node.js", "Express", "MongoDB"],
    link: "https://work-stream-fj.vercel.app/",
  },
];
