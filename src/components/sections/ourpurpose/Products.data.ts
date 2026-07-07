import {
  Boxes,
  Users,
  User,
  ShoppingCart,
  GraduationCap,
  LifeBuoy,
} from "lucide-react";
import type { ProductCardData } from "./index";

export const products: ProductCardData[] = [
  {
    icon: Boxes,
    title: "ERP",
    description:
      "Unify your core business processes and drive operational excellence.",
    color: "purple",
    href: "#erp",
  },
  {
    icon: Users,
    title: "CRM",
    description:
      "Build stronger relationships and close deals faster with smart automation.",
    color: "pink",
    href: "#crm",
  },
  {
    icon: User,
    title: "HRMS",
    description:
      "Streamline HR operations from recruitment to retirement seamlessly.",
    color: "green",
    href: "#hrms",
  },
  {
    icon: ShoppingCart,
    title: "POS / Inventory",
    description: "Manage sales, inventory, and retail operations in real-time.",
    color: "orange",
    href: "#pos",
  },
  {
    icon: GraduationCap,
    title: "School Management",
    description: "Digitize academic management and streamline student success.",
    color: "blue",
    href: "#school",
  },
  {
    icon: LifeBuoy,
    title: "Help Desk",
    description: "Deliver exceptional support and resolve issues faster.",
    color: "teal",
    href: "#helpdesk",
  },
];
