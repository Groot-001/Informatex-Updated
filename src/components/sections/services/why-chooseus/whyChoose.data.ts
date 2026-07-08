import { Layers3, ShieldCheck, MonitorSmartphone, Users } from "lucide-react";

import type { WhyChoose } from "./types";

export const WHY_CHOOSE: WhyChoose[] = [
  {
    id: 1,
    title: "Scalable Architecture",
    description:
      "Built to scale as your business grows, ensuring long-term reliability.",
    icon: Layers3,
  },
  {
    id: 2,
    title: "Secure Code",
    description:
      "We follow secure coding standards to protect your data and users.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Cross-Platform Experience",
    description: "Consistent performance across devices and platforms.",
    icon: MonitorSmartphone,
  },
  {
    id: 4,
    title: "User-Focused Interfaces",
    description: "Beautiful, intuitive, and engaging interfaces users love.",
    icon: Users,
  },
];
