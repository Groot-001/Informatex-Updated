import {
  Bot,
  Boxes,
  BriefcaseBusiness,
  Building2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import dashboardImage from "@/assets/Laptop.png";
import hrmsImage from "@/assets/mobile.png";

export const HERO_CONTENT = {
  badge: {
    icon: Sparkles,
    text: "OUR PRODUCTS",
  },

  heading: {
    line1: "Enterprise Products",
    line2: "Built to Accelerate",
    line3: "Modern Businesses",
  },

  description:
    "From AI-powered platforms to enterprise-grade solutions, we build scalable digital products that automate workflows, improve efficiency, and drive business growth.",

  primaryButton: {
    text: "View Products",
    href: "#products",
  },

  secondaryButton: {
    text: "Talk to Product Experts",
    href: "/contact",
  },
} as const;

export const PRODUCT_CAPABILITIES = [
  "ERP Solutions",
  "CRM Platform",
  "HRMS",
  "Inventory",
  "Analytics",
];

/* -------------------------------------------------------------------------- */
/*                               TRUST INDICATORS                             */
/* -------------------------------------------------------------------------- */

export const HERO_TRUST = [
  {
    icon: ShieldCheck,
    label: "Enterprise Ready",
  },
  {
    icon: Bot,
    label: "AI Powered",
  },
  {
    icon: Boxes,
    label: "Scalable",
  },
  {
    icon: Building2,
    label: "Business Focused",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*                             FEATURED PRODUCTS                              */
/* -------------------------------------------------------------------------- */

export const FEATURED_PRODUCTS = [
  {
    id: 1,
    badge: "Featured Product",
    title: "MailTracko",
    subtitle: "Email Outreach Platform",
    image: dashboardImage,
    cta: "View Product",
    rotation: -3,
    icon: BriefcaseBusiness,
  },
  {
    id: 2,
    badge: "Enterprise Solution",
    title: "HRMS",
    subtitle: "Human Resource Management",
    image: hrmsImage,
    cta: "Coming Soon",
    rotation: 2,
    icon: Building2,
  },
] as const;
