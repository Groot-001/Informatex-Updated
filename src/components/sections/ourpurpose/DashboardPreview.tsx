import ActivityPanel from "./ActivityPanel";
import AnalyticsChart from "./AnalyticsChart";
import MetricCard from "./MetricCard";
import PerformancePanel from "./PerformancePanel";
import SalesOverview from "./SalesOverview";

import { dashboardData } from "./dashboard.data";

type DashboardVariant = "erp" | "crm" | "hrms";

interface DashboardPreviewProps {
  variant?: DashboardVariant;
}

export default function DashboardPreview({
  variant = "erp",
}: DashboardPreviewProps) {
  const dashboard = dashboardData[variant];

  return (
    <div className="space-y-6">
      {/* KPI Row */}

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {dashboard.metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <MetricCard
              key={metric.title}
              title={metric.title}
              value={metric.value}
              icon={<Icon className="h-5 w-5 text-[#2374B6]" />}
            />
          );
        })}
      </div>

      {/* Dashboard */}

      <div className="grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <AnalyticsChart />
        </div>

        <div className="lg:col-span-4">
          <ActivityPanel />
        </div>

        <div className="lg:col-span-7">
          <SalesOverview />
        </div>

        <div className="lg:col-span-5">
          <PerformancePanel />
        </div>
      </div>
    </div>
  );
}
