import { Target, Eye, Gem } from "lucide-react";
import type { ValueCardData } from "./index";

export const valueCards: ValueCardData[] = [
  {
    icon: Target,
    title: "Our Mission",
    color: "indigo",
    description:
      "To empower organizations with innovative technology solutions that drive growth, efficiency, and lasting impact.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    color: "indigo",
    description:
      "To be a global leader in technology services, known for our people, our partnerships, and our impact.",
  },
  {
    icon: Gem,
    title: "Our Core Values",
    color: "indigo",
    checklist: [
      "Client Success First",
      "Integrity & Transparency",
      "Innovation & Excellence",
      "Collaboration & Respect",
    ],
  },
];
