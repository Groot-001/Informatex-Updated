import {
  Smartphone,
  Globe,
  BriefcaseBusiness,
  PenTool,
  Puzzle,
  Headset,
} from "lucide-react";

import type { Service } from "./types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile apps for iOS and Android with top-notch performance.",
    icon: Smartphone,
  },
  {
    id: 2,
    title: "Web Apps",
    description:
      "Scalable, secure and high-performance web applications tailored to your business.",
    icon: Globe,
  },
  {
    id: 3,
    title: "Business Apps",
    description:
      "Custom business solutions that streamline operations and improve efficiency.",
    icon: BriefcaseBusiness,
  },
  {
    id: 4,
    title: "UI/UX Prototyping",
    description:
      "Interactive prototypes and intuitive interfaces that create better user experiences.",
    icon: PenTool,
  },
  {
    id: 5,
    title: "API Integration",
    description:
      "Seamless third-party API integrations to extend your application's capabilities.",
    icon: Puzzle,
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description:
      "Continuous support and maintenance to keep your applications secure and up to date.",
    icon: Headset,
  },
];
