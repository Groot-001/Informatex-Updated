import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import PrimaryButton from "@/components/sections/about-us/hero/PrimaryButton";
import SecondaryButton from "@/components/sections/about-us/hero/SecondaryButton";
import SectionBadge from "@/components/sections/about-us/hero/SectionBadge";

import { aboutStats } from "@/components/sections/about-us/hero/aboutstats";

import { Activity, Building2 } from "lucide-react";

import group from "@/assets/AboutHero.png";
import SectionBackground from "../../products/SectionBackground";
import MetricBadge from "../../ourpurpose/MetricBadge";

export default function AboutHeroSection() {
  return (
    <Section
      className="
        relative
        overflow-hidden

        bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)]
      "
    >
      <SectionBackground />

      <Container size="xl">
        <div
          className="
            relative
            z-10

            grid
            items-center

            gap-16

            lg:grid-cols-12
            lg:gap-20
          "
        >
          {/* ================================================= */}
          {/* Left */}
          {/* ================================================= */}

          <div className="lg:col-span-5">
            <SectionBadge title="Who We Are" />

            <h1
              className="
                mt-8

                text-5xl
                font-bold
                leading-[1.05]
                tracking-tight

                text-[#113358]

                lg:text-6xl
              "
            >
              Building Digital
              <span className="mt-2 block text-[#2374B6]">Solutions</span>
              <span className="mt-2 block">That Power Modern Businesses</span>
            </h1>

            <p
              className="
                mt-8

                max-w-xl

                text-lg
                leading-8

                text-slate-600
              "
            >
              We help businesses transform ambitious ideas into scalable,
              enterprise-grade digital products through innovative software,
              cloud technologies, and long-term strategic partnerships.
            </p>

            {/* Highlights */}

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Enterprise Software",
                "Digital Transformation",
                "Cloud Solutions",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    border
                    border-[#DCEAF6]

                    bg-white

                    px-4
                    py-2

                    text-sm
                    font-medium

                    text-[#113358]

                    shadow-sm
                  "
                >
                  ✓ {item}
                </span>
              ))}
            </div>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-3 gap-5">
              {aboutStats.map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-3xl

                    border
                    border-[#DCEAF6]

                    bg-white

                    p-5

                    shadow-[0_10px_30px_rgba(17,51,88,.05)]
                  "
                >
                  <h3
                    className="
                      text-3xl
                      font-bold

                      text-[#113358]
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-sm

                      text-slate-500
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton title="Work With Us" />

              <SecondaryButton title="Join Our Team" />
            </div>
          </div>

          {/* ================================================= */}
          {/* Right */}
          {/* ================================================= */}

          <div className="relative lg:col-span-7">
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

            <div
              className="
                relative

                overflow-hidden

                rounded-[36px]

                border
                border-[#DCEAF6]

                bg-white

                shadow-[0_30px_80px_rgba(17,51,88,.08)]
              "
            >
              <img
                src={group}
                alt="Informatex Team"
                className="
                  h-auto
                  w-full

                  object-cover
                "
              />
            </div>

            {/* Floating Metrics */}

            <MetricBadge
              value="120+"
              title="Projects Delivered"
              icon={<Building2 className="h-5 w-5 text-[#2374B6]" />}
              className="
                hidden

                xl:block

                -left-8
                top-20
              "
            />

            <MetricBadge
              value="98%"
              title="Client Retention"
              icon={<Activity className="h-5 w-5 text-[#2374B6]" />}
              className="
                hidden

                xl:block

                -right-8
                bottom-16
              "
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
