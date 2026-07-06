import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkColumnData {
  title: string;
  links: FooterLink[];
}

export interface ContactItem {
  icon: LucideIcon;
  /** One or more lines of text (e.g. two office addresses stacked) */
  lines: string[];
  /** Optional link, e.g. "mailto:" or "tel:" */
  href?: string;
}
