import { Boxes, Users } from "lucide-react";

import erpImage from "@/assets/Erp.png";
import crmImage from "@/assets/crm.png";
import type { ProductCardData } from ".";

export const products: ProductCardData[] = [
  {
    icon: Boxes,

    title: "Enterprise Resource Planning",

    shortTitle: "ERP",

    description:
      "Manage finance, inventory, procurement, HR, and operations from one centralized platform.",

    features: [
      "Inventory Management",
      "Finance & Accounting",
      "Procurement",
      "Business Analytics",
      "Sales & Purchase",
    ],

    image: erpImage,

    href: "/products/erp",
  },

  {
    icon: Users,

    title: "Customer Relationship Management",

    shortTitle: "CRM",

    description:
      "Generate leads, manage customers, automate sales, and provide exceptional customer experiences.",

    features: [
      "Lead Management",
      "Sales Pipeline",
      "Customer Support",
      "Marketing Automation",
      "Reports & Analytics",
    ],

    image: crmImage,

    href: "/products/crm",
  },
];
