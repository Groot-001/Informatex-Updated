import { Activity, Building2 } from "lucide-react";

import FeaturedProductCard from "./FeaturedProductCard";
import { FEATURED_PRODUCTS } from "./constants";
import MetricBadge from "../../ourpurpose/MetricBadge";

export default function HeroVisual() {
  return (
    <div
      className="
        relative

        flex

        min-h-[640px]

        items-center
        justify-center
      "
    >
      {/* ================================================= */}
      {/* Background Glow */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute

          inset-0

          rounded-full

          bg-[#2374B6]/5

          blur-[140px]
        "
      />

      {/* ================================================= */}
      {/* Featured Product + Attached Metrics */}
      {/* ================================================= */}

      <div
        className="
          relative

          z-20

          w-full
          max-w-[720px]
        "
      >
        <FeaturedProductCard product={FEATURED_PRODUCTS[0]} />

        {/* Left Metric */}

        <MetricBadge
          value="99.9%"
          title="System Uptime"
          icon={<Activity className="h-5 w-5 text-[#2374B6]" />}
          className="
            absolute

            -left-8
            top-16

            z-30

            hidden
            xl:block
          "
        />

        {/* Right Metric */}

        <MetricBadge
          value="120+"
          title="Enterprise Clients"
          icon={<Building2 className="h-5 w-5 text-[#2374B6]" />}
          className="
            absolute

            -right-8
            bottom-16

            z-30

            hidden
            xl:block
          "
        />
      </div>
    </div>
  );
}
