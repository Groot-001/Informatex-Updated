import type { LucideIcon } from "lucide-react";

/** Brand accent colors used across icon badges, avatars and feature cards */
export type AccentColor =
  | "primary"
  | "secondary"
  | "navy"
  | "blue"
  | "cyan"
  | "sky"
  | "teal";

export interface ValueCardData {
  icon: LucideIcon;
  title: string;
  color: AccentColor;

  /** Plain paragraph copy (Mission / Vision) */
  description?: string;

  /** Checklist copy (Core Values) */
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
