import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { Mail, Phone, MapPin } from "lucide-react";
import type { SocialLink, ContactItem, FooterLinkColumnData } from "./Types";

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Twitter", href: "#", icon: FaTwitter },
];

export const servicesColumn: FooterLinkColumnData = {
  title: "Services",
  links: [
    { label: "Web Development", href: "#" },
    { label: "Mobile App Development", href: "#" },
    { label: "Digital Marketing", href: "#" },
    { label: "Content Writing", href: "#" },
    { label: "UI/UX Design", href: "#" },
  ],
};

export const contactItems: ContactItem[] = [
  {
    icon: Mail,
    lines: ["hr@informatextech.com"],
    href: "mailto:hr@informatextech.com",
  },
  {
    icon: Phone,
    lines: ["+977 981-3440643"],
    href: "tel:+9779813440643",
  },
  {
    icon: MapPin,
    lines: ["Kathmandu, Nepal", "Birtamode, Jhapa, Nepal"],
  },
];
