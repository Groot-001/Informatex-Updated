import type { LucideIcon } from "lucide-react";

export interface HeroTrustItem {
  icon: LucideIcon;
  label: string;
}

export interface FeaturedProduct {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  rotation: number;
}
