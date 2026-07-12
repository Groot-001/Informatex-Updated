import { DollarSign, ShoppingBag, TrendingUp, Users } from "lucide-react";

export const dashboardData = {
  erp: {
    metrics: [
      {
        title: "Revenue",
        value: "$285K",
        icon: DollarSign,
      },
      {
        title: "Customers",
        value: "1,248",
        icon: Users,
      },
      {
        title: "Orders",
        value: "842",
        icon: ShoppingBag,
      },
      {
        title: "Growth",
        value: "+24%",
        icon: TrendingUp,
      },
    ],
  },

  crm: {
    metrics: [
      {
        title: "Leads",
        value: "854",
        icon: Users,
      },
      {
        title: "Pipeline",
        value: "$420K",
        icon: DollarSign,
      },
      {
        title: "Deals",
        value: "92",
        icon: ShoppingBag,
      },
      {
        title: "Conversion",
        value: "36%",
        icon: TrendingUp,
      },
    ],
  },

  hrms: {
    metrics: [
      {
        title: "Employees",
        value: "248",
        icon: Users,
      },
      {
        title: "Attendance",
        value: "97%",
        icon: TrendingUp,
      },
      {
        title: "Payroll",
        value: "$120K",
        icon: DollarSign,
      },
      {
        title: "Leaves",
        value: "18",
        icon: ShoppingBag,
      },
    ],
  },
};
