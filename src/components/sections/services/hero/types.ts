import type { LucideIcon } from "lucide-react";
export type HeroButtonVariant = "default" | "secondary";

export interface HeroBadgeData {
  label: string;
  icon: LucideIcon;
}

export interface HeroAction {
  label: string;
  href: string;
  variant: HeroButtonVariant;
}

export interface HeroContentData {
  title: string;
  description: string;
}
