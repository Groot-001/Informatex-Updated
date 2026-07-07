import { Smartphone } from "lucide-react";

export const HERO_BADGE = {
  label: "App Development",
  icon: Smartphone,
};

export const HERO_CONTENT = {
  title: "From Idea to Implementation,\nWe Build Powerful Apps",

  description:
    "From idea to implementation, we develop robust, intuitive applications that align with your business goals. Our solutions ensure smooth functionality and optimal user experience across platforms.",
};

export const HERO_ACTIONS = [
  {
    label: "Start Your App Project",
    href: "#contact",
    variant: "default" as const,
  },
  {
    label: "Talk to an Expert",
    href: "#contact",
    variant: "secondary" as const,
  },
];

export const HERO_IMAGES = {
  dashboard: "/images/services/dashboard.webp",
  mobile: "/images/services/mobile.webp",
};

export const HERO_ANIMATION = {
  duration: 0.6,
  delay: 0.15,
  stagger: 0.12,
};
