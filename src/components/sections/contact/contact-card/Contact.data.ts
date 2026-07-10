import { Phone, Mail, MapPin, Building2 } from "lucide-react";
import type { ContactCardData } from "./types";


export const contactCards: ContactCardData[] = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+977 981-3440643",
    description: "Mon - Sat, 9:00 AM - 6:00 PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hr@informatextech.com",
    description: "We'll reply within a few hours",
  },
  {
    icon: MapPin,
    title: "Kathmandu Office",
    value: "Baluwatar",
    description: "Kalikamarg, Kathmandu, Nepal",
  },
  {
    icon: Building2,
    title: "Birtamode Office",
    value: "Shanischare Road",
    description: "Birtamode, Jhapa, Nepal",
  },
];
