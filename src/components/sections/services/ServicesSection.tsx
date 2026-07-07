import React from "react";
import { motion, type Variants } from "framer-motion";
import { CHART_DATA, HERO_METRICS } from "./Services.data";

const floatVariants: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const ServicesSection: React.FC = () => {
  return (
    <motion.div
      className="relative flex items-center justify-center lg:col-span-7 w-full"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      {/* Laptop Presentation Frame Surface */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="relative w-full rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] md:p-4 mr-6 lg:mr-16"
      >
        <div className="grid grid-cols-12 overflow-hidden rounded-xl bg-[#FAFAFC] border border-gray-100 min-h-[380px] md:min-h-[460px]">
          {/* Mock Navigation Workspace Sidebar */}
          <div className="col-span-1 bg-[#1A1640] flex flex-col items-center py-5 space-y-4">
            <div className="h-5 w-5 rounded-md bg-purple-500/30 mb-2" />
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`h-3.5 w-3.5 rounded ${i === 0 ? "bg-white/20" : "bg-white/10"}`}
              />
            ))}
          </div>

          {/* Interactive Metric Content Display Field */}
          <div className="col-span-11 p-4 md:p-6 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-800 md:text-sm">
                Dashboard
              </span>
              <div className="h-5 w-5 rounded-full bg-gray-200" />
            </div>

            {/* Structured Card Grid Iteration */}
            <div className="grid grid-cols-3 gap-3">
              {HERO_METRICS.map((metric) => (
                <div
                  key={metric.id}
                  className="rounded-xl bg-white p-3 shadow-xs border border-gray-100"
                >
                  <div className="text-[9px] font-medium text-gray-400 uppercase tracking-tight">
                    {metric.label}
                  </div>
                  <div className="text-xs font-extrabold text-gray-800 md:text-base mt-0.5">
                    {metric.value}
                  </div>
                  <div className="text-[8px] text-green-500 font-semibold bg-green-50 px-1.5 py-0.5 rounded-md mt-1 inline-block">
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Vector Optimization Analytics Track */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7 rounded-xl bg-white p-4 shadow-xs border border-gray-100 flex flex-col justify-between h-36">
                <span className="text-[10px] font-bold text-gray-400">
                  User Growth
                </span>
                <svg
                  viewBox="0 0 100 30"
                  className="w-full h-14 overflow-visible"
                >
                  <path
                    d="M0,25 Q15,15 30,20 T60,8 T90,2 T100,4"
                    fill="none"
                    stroke="#4A3AFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="flex justify-between text-[8px] text-gray-400 font-semibold px-0.5">
                  {CHART_DATA.map((d) => (
                    <span key={d.name}>{d.name}</span>
                  ))}
                </div>
              </div>

              {/* Progress Radial Sub-panel */}
              <div className="col-span-5 rounded-xl bg-white p-3 shadow-xs border border-gray-100 flex flex-col items-center justify-between text-center">
                <span className="text-[10px] font-bold text-gray-400 self-start">
                  Top Features
                </span>
                <div className="relative flex items-center justify-center w-12 h-12">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      stroke="#E6E6ED"
                      strokeWidth="3.5"
                      fill="none"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      stroke="#4A3AFF"
                      strokeWidth="3.5"
                      fill="none"
                      strokeDasharray={113}
                      strokeDashoffset={113 - (113 * 72) / 100}
                    />
                  </svg>
                  <span className="absolute text-[9px] font-bold text-gray-800">
                    72%
                  </span>
                </div>
                <span className="text-[8px] text-gray-400 font-medium">
                  Engagement
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Overlay Peripheral Device Viewport Representation */}
      <motion.div
        className="absolute bottom-[-16px] right-[-4px] w-[130px] sm:w-[170px] md:w-[195px] rounded-[28px] border-[4px] border-[#1A1640] bg-white p-2 shadow-[0_24px_48px_rgba(0,0,0,0.12)] z-20"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
      >
        <div className="flex flex-col h-full w-full rounded-[22px] bg-white p-2.5 space-y-3.5 text-left">
          <div className="flex justify-between items-center text-[7px] text-gray-400 font-bold">
            <span>9:41</span>
            <div className="w-2 h-1 bg-gray-400 rounded-xs" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-gray-800">
              Hello, Sarah 👋
            </div>
            <div className="text-[7px] text-gray-400 font-medium">
              Your activities
            </div>
          </div>
          <div className="rounded-lg bg-[#EEEBFF] p-2 flex items-center justify-between">
            <span className="text-[7px] text-gray-500 font-medium">Orders</span>
            <span className="text-xs font-black text-[#1A1640]">24</span>
          </div>
          <div className="space-y-1">
            <span className="text-[7px] font-bold text-gray-800 block">
              Performance
            </span>
            <div className="w-full h-8 bg-gray-50 rounded-md" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
