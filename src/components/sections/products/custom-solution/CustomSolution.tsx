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
        bg-soft
      "
    >
      <Container size="xl">
        <div
          className="
            grid
            items-center

            gap-16

            lg:grid-cols-[1fr_1.1fr]
            lg:gap-20

            xl:gap-24
          "
        >
          {/* Left */}

          <div>
            <span
              className="
                inline-flex

                rounded-full

                bg-secondary/10

                px-4
                py-2

                text-sm
                font-semibold

                text-secondary
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
                tracking-tight

                text-brand

                lg:text-5xl
              "
            >
              Need Something
              <br />
              Built Specifically
              <span className="text-secondary"> For You?</span>
            </h2>

            <p
              className="
                mt-8

                max-w-xl

                text-lg
                leading-8

                text-muted
              "
            >
              Every business has unique challenges. We design and develop
              tailored software solutions that align perfectly with your
              workflows, goals, and future growth.
            </p>

            <div className="mt-10">
              <SolutionPoints />
            </div>

            <Button
              size="lg"
              className="
                group
                mt-10

                bg-secondary

                hover:bg-brand
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

          {/* Right */}

          <BrowserWindow
            title="Custom Enterprise Platform"
            address="your-business.informatex.com"
          >
            <img
              src={customPlatform}
              alt="Custom Enterprise Platform"
              className="
                w-full
                object-cover
              "
            />
          </BrowserWindow>
        </div>
      </Container>
    </Section>
  );
}
