export interface FeaturedProduct {
  id: number;

  badge: string;

  title: string;

  subtitle: string;

  description: string;

  features: string[];

  techStack: string[];

  image: string;

  primaryButton: string;

  secondaryButton?: string;

  reverse?: boolean;
}
