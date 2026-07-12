import { motion } from "framer-motion";
import { Activity, Building2, Code2, Smartphone } from "lucide-react";
import BrowserMockup from "../../ourpurpose/BrowserMockup";
import DashboardPreview from "../../ourpurpose/DashboardPreview";
import MetricBadge from "../../ourpurpose/MetricBadge";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: 0.25,
      }}
      className="
        relative

        mx-auto

        flex
        w-full
        max-w-4xl

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

          -z-20

          rounded-full

          bg-[#2374B6]/6

          blur-[160px]
        "
      />

      {/* ================================================= */}
      {/* Dashboard */}
      {/* ================================================= */}

      <BrowserMockup url="apps.informatex.tech">
        <DashboardPreview />
      </BrowserMockup>

      {/* ================================================= */}
      {/* Floating Cards */}
      {/* ================================================= */}

      <MetricBadge
        value="99.9%"
        title="Deployment Success"
        icon={<Activity className="h-5 w-5 text-[#2374B6]" />}
        className="
          hidden

          xl:block

          -left-10
          top-20
        "
      />

      <MetricBadge
        value="40+"
        title="Apps Delivered"
        icon={<Building2 className="h-5 w-5 text-[#2374B6]" />}
        className="
          hidden

          xl:block

          -right-8
          bottom-12
        "
      />

      {/* ================================================= */}
      {/* Tech Stack */}
      {/* ================================================= */}

      <div
        className="
          absolute

          -right-10
          top-16

          hidden

          xl:flex

          items-center
          gap-3

          rounded-2xl

          border
          border-[#DCEAF6]

          bg-white/95

          px-5
          py-4

          shadow-[0_20px_45px_rgba(17,51,88,.10)]
        "
      >
        <div
          className="
            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-xl

            bg-[#EDF5FC]
          "
        >
          <Code2 className="h-5 w-5 text-[#2374B6]" />
        </div>

        <div>
          <p className="text-sm font-semibold text-[#113358]">Modern Stack</p>

          <p className="text-xs text-slate-500">React • Node • Flutter</p>
        </div>
      </div>

      {/* ================================================= */}
      {/* Mobile Preview */}
      {/* ================================================= */}

      <div
        className="
          absolute

          -left-8
          bottom-10

          hidden

          xl:flex

          items-center
          gap-3

          rounded-2xl

          border
          border-[#DCEAF6]

          bg-white/95

          px-5
          py-4

          shadow-[0_20px_45px_rgba(17,51,88,.10)]
        "
      >
        <div
          className="
            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-xl

            bg-[#EDF5FC]
          "
        >
          <Smartphone className="h-5 w-5 text-[#2374B6]" />
        </div>

        <div>
          <p className="text-sm font-semibold text-[#113358]">Mobile Ready</p>

          <p className="text-xs text-slate-500">Android • iOS • Tablet</p>
        </div>
      </div>
    </motion.div>
  );
}
