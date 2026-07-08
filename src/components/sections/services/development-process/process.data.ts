import { Search, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";

import type { ProcessStep } from "./types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, audience and goals to define the right solution.",
    icon: Search,
  },
  {
    id: 2,
    number: "02",
    title: "Design",
    description:
      "We create intuitive wireframes and beautiful UI focused on usability.",
    icon: PenTool,
  },
  {
    id: 3,
    number: "03",
    title: "Development",
    description:
      "Our developers build scalable, robust applications using best practices.",
    icon: Code2,
  },
  {
    id: 4,
    number: "04",
    title: "Testing",
    description:
      "We ensure quality through rigorous testing and performance optimization.",
    icon: ShieldCheck,
  },
  {
    id: 5,
    number: "05",
    title: "Launch",
    description: "Deployment, monitoring and continuous support after launch.",
    icon: Rocket,
  },
];
