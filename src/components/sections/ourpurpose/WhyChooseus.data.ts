import {
  Briefcase,
  Zap,
  ShieldCheck,
  MessageCircle,
  HeartHandshake,
} from "lucide-react";

import type { FeatureItemData } from ".";

export const whyChooseFeatures: FeatureItemData[] = [
  {
    icon: Briefcase,
    title: "Business-Focused",
    description:
      "Technology decisions aligned with your long-term business goals.",
  },
  {
    icon: Zap,
    title: "Agile Delivery",
    description: "Fast iterations, rapid delivery, and continuous improvement.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "Enterprise-grade development backed by best engineering practices.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description:
      "Clear updates, open collaboration, and complete project visibility.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description: "We stay with you beyond launch to help your business grow.",
  },
];
