import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import BrowserWindow from "@/components/ui/browser-window";

import SolutionPoints from "./SolutionPoints";

import customPlatform from "@/assets/Dashboard.png";

export default function CustomSolution() {
  return (
    <section className="py-28">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-20
          px-6
          lg:grid-cols-[1fr_1.1fr]
          lg:px-8
        "
      >
        {/* Left */}

        <div>
          <span
            className="
              inline-flex
              rounded-full
              bg-[#113358]/10
              px-4
              py-2
              text-sm
              font-semibold
              text-[#113358]
            "
          >
            CUSTOM SOFTWARE
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              text-slate-900
              lg:text-5xl
            "
          >
            Need Something
            <br />
            Built Specifically
            <span className="text-[#113358]"> For You?</span>
          </h2>

          <p
            className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            Every business has unique challenges. We design and develop tailored
            software solutions that align perfectly with your workflows, goals,
            and future growth.
          </p>

          <div className="mt-10">
            <SolutionPoints />
          </div>

          <Button size="lg" className="group mt-10 bg-[#113358]">
            Discuss Your Project
            <ArrowRight
              className="
                ml-2
                h-4
                w-4
                transition-transform
                group-hover:translate-x-1
              "
            />
          </Button>
        </div>

        {/* Right */}

        <BrowserWindow
          title="Custom Enterprise Platform"
          address="your-business.informatex.com"
        >
          <img
            src={customPlatform}
            alt="Custom Enterprise Platform"
            className="w-full object-cover"
          />
        </BrowserWindow>
      </div>
    </section>
  );
}
