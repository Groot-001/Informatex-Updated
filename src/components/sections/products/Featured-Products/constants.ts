import mailtrackoImage from "@/assets/Laptop.png";
import hrmsImage from "@/assets/mobile.png";

export const FEATURED_PRODUCTS = [
  {
    id: 1,

    badge: "Featured Product",

    title: "MailTracko",

    subtitle: "Email Outreach Platform",

    description:
      "A powerful email outreach platform that helps businesses automate campaigns, track engagement, and build meaningful customer relationships.",

    features: [
      "Email Campaign Automation",
      "Open & Click Tracking",
      "Analytics Dashboard",
      "Team Collaboration",
    ],

    techStack: ["React", "Node.js", "PostgreSQL", "Docker"],

    image: mailtrackoImage,

    primaryButton: "Explore MailTracko",

    secondaryButton: "Request Demo",
  },

  {
    id: 2,

    badge: "Enterprise Solution",

    title: "HRMS",

    subtitle: "Human Resource Management",

    description:
      "A centralized HR platform to manage employees, attendance, payroll, recruitment, and organizational workflows efficiently.",

    features: [
      "Employee Management",
      "Payroll System",
      "Attendance Tracking",
      "Performance Reports",
    ],

    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],

    image: hrmsImage,

    primaryButton: "Coming Soon",

    reverse: true,
  },
];
