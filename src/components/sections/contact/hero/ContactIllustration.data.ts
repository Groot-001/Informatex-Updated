import { Mail, Phone, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContactIllustrationItem {
  icon: LucideIcon;
  className: string;
}

export const contactIllustrations: ContactIllustrationItem[] = [
  {
    icon: Mail,
    className: "left-[16%] top-[10%] rotate-[-6deg]",
  },
  {
    icon: Phone,
    className: "right-[18%] top-[34%] rotate-[8deg]",
  },
  {
    icon: MapPin,
    className: "left-[42%] top-[56%] rotate-[-2deg]",
  },
];
