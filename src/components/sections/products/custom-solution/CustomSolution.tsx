import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import { Button } from "@/components/ui/button";
import BrowserWindow from "@/components/ui/browser-window";

import SolutionPoints from "./SolutionPoints";

import customPlatform from "@/assets/Dashboard.png";

export default function CustomSolution() {
  return (
    <Section
      className="
        relative
        overflow-hidden

        bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)]
      "
    >
      {/* ================================================= */}
      {/* Background Glow */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute

          -left-40
          top-0

          h-[32rem]
          w-[32rem]

          rounded-full

          bg-[#2374B6]/5

          blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          right-[-10rem]
          bottom-0

          h-[28rem]
          w-[28rem]

          rounded-full

          bg-[#113358]/5

          blur-[170px]
        "
      />

      <Container size="xl">
        <div
          className="
            relative
            z-10

            grid
            items-center

            gap-16

            lg:grid-cols-[1fr_1.1fr]
            lg:gap-20

            xl:gap-24
          "
        >
          {/* ================================================= */}
          {/* Left */}
          {/* ================================================= */}

          <div>
            {/* Badge */}

            <span
              className="
                inline-flex
                items-center

                rounded-full

                border
                border-[#DCEAF6]

                bg-[#EDF5FC]

                px-5
                py-2

                text-sm
                font-semibold

                text-[#113358]
              "
            >
              CUSTOM SOFTWARE
            </span>

            {/* Heading */}

            <h2
              className="
                mt-7

                text-4xl
                font-bold
                leading-tight
                tracking-tight

                text-[#113358]

                lg:text-5xl
              "
            >
              Need Something
              <br />
              Built Specifically
              <span className="block text-[#2374B6]">For Your Business?</span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-7

                max-w-xl

                text-lg
                leading-8

                text-slate-600
              "
            >
              Every business has unique challenges. We design and develop
              tailored software solutions that align perfectly with your
              workflows, business objectives, and long-term growth strategy.
            </p>

            {/* Solution Points */}

            <div className="mt-10">
              <SolutionPoints />
            </div>

            {/* CTA */}

            <Button
              className="
                group

                mt-10

                h-12

                rounded-full

                bg-[#113358]

                px-7

                hover:bg-[#0D2D4B]
              "
            >
              Discuss Your Project
              <ArrowRight
                className="
                  ml-2

                  h-4
                  w-4

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </Button>
          </div>

          {/* ================================================= */}
          {/* Right */}
          {/* ================================================= */}

          <div className="relative group">
            {/* Glow */}

            <div
              className="
                pointer-events-none

                absolute

                -right-16
                -top-16

                h-72
                w-72

                rounded-full

                bg-[#2374B6]/8

                opacity-0

                blur-[120px]

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            />

            <div
              className="
                relative
                z-10

                transition-transform
                duration-500

                group-hover:-translate-y-2
              "
            >
              <BrowserWindow
                title="Custom Enterprise Platform"
                address="your-business.informatex.tech"
              >
                <img
                  src={customPlatform}
                  alt="Custom Enterprise Platform"
                  className="
                    w-full

                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-[1.02]
                  "
                />
              </BrowserWindow>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
