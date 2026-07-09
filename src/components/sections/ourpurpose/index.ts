import type { LucideIcon } from "lucide-react";

/** Named accent colors reused across icon badges, product cards, and avatars */
export type AccentColor =
  | "purple"
  | "pink"
  | "green"
  | "orange"
  | "blue"
  | "teal"
  | "indigo";

export interface ValueCardData {
  icon: LucideIcon;
  title: string;
  color: AccentColor;
  /** Plain paragraph copy (Mission / Vision) */
  description?: string;
  /** Checklist copy (Core Values) — provide instead of `description` */
  checklist?: string[];
}

export interface ProductCardData {
  icon: LucideIcon;

  title: string;

  shortTitle: string;

  description: string;

  features: string[];

  image: string;

  href: string;
}
export interface TeamMember {
  name: string;
  initials: string;
  color: AccentColor;
}

export interface FeatureItemData {
  icon: LucideIcon;
  title: string;
  description: string;
}
