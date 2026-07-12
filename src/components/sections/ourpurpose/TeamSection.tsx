import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import AvatarStack from "./AvatarStack";
import SectionEyebrow from "./SectionEyeBrow";
import { expertsCount, teamMembers } from "./Team.data";

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".team-section",
        start: "top 75%",
        once: true,
      },
    });

    tl.from(".team-content > *", {
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: "power3.out",
    }).from(
      ".avatar-item",
      {
        scale: 0.8,
        opacity: 0,
        stagger: 0.08,
        duration: 0.45,
        ease: "back.out(1.7)",
      },
      "-=0.25",
    );
  });

  return (
    <Section
      spacing="xl"
      className="
        team-section
        relative
        overflow-hidden

        bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)]
      "
    >
      {/* Soft Accent */}

      <div
        className="
          pointer-events-none
          absolute

          right-[-10rem]
          top-20

          h-[34rem]
          w-[34rem]

          rounded-full

          bg-[#2374B6]/5

          blur-[140px]
        "
      />

      <Container size="xl">
        <div
          className="
            relative
            z-10

            grid

            gap-20

            lg:grid-cols-12
            lg:items-center
          "
        >
          {/* ================================================= */}
          {/* Left */}
          {/* ================================================= */}

          <div
            className="
              team-content

              lg:col-span-5
            "
          >
            <SectionEyebrow>Our Team</SectionEyebrow>

            <h2
              className="
                mt-5

                text-4xl
                font-bold
                leading-tight
                tracking-tight

                text-[#113358]

                md:text-5xl
              "
            >
              Great software is built
              <span className="mt-2 block text-[#2374B6]">
                by exceptional people.
              </span>
            </h2>

            <p
              className="
                mt-8

                max-w-md

                text-[17px]
                leading-8

                text-slate-600
              "
            >
              Behind every successful product is a collaborative team of
              engineers, designers, strategists, and innovators committed to
              solving real business challenges.
            </p>

            {/* Brand Divider */}

            <div
              className="
                mt-10

                flex

                gap-3
              "
            >
              <div className="h-[3px] w-14 rounded-full bg-[#113358]" />

              <div className="h-[3px] w-6 rounded-full bg-[#2374B6]" />
            </div>

            {/* Capabilities */}

            <div
              className="
                mt-10

                flex
                flex-wrap

                gap-3
              "
            >
              {["Frontend", "Backend", "Cloud", "UI/UX", "AI"].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full

                    border
                    border-[#DCEAF6]

                    bg-white

                    px-4
                    py-2

                    text-sm
                    font-medium

                    text-slate-700

                    shadow-sm
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ================================================= */}
          {/* Right */}
          {/* ================================================= */}

          <div
            className="
              lg:col-span-7
            "
          >
            <AvatarStack members={teamMembers} count={expertsCount} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
