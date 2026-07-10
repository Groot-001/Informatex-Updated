import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import { typography } from "@/design-system/typography";

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
        scale: 0.7,
        opacity: 0,
        stagger: 0.08,
        duration: 0.45,
        ease: "back.out(1.7)",
      },
      "-=0.2",
    );
  });

  return (
    <Section
      spacing="xl"
      className="
        team-section
        relative
        overflow-hidden

        bg-blend-soft-light
      "
    >
      {/* ================= Background Glow ================= */}

      {/* Left */}

      <div
        className="
          pointer-events-none
          absolute

          -left-40
          top-1/2

          h-[28rem]
          w-[28rem]

          -translate-y-1/2

          rounded-full

          bg-[#2374B6]/6

          blur-[180px]
        "
      />

      {/* Right */}

      <div
        className="
          pointer-events-none
          absolute

          -right-32
          top-0

          h-[26rem]
          w-[26rem]

          rounded-full

          bg-[#093254]/5

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

            lg:grid-cols-12
            lg:gap-20
          "
        >
          {/* ================= Left Content ================= */}

          <div
            className="
              team-content

              lg:col-span-5
            "
          >
            <SectionEyebrow>Our Team</SectionEyebrow>

            <h2 className={typography.section.title}>
              A team of <span className="text-secondary">passionate</span>
              <br />
              problem <span className="text-secondary">solvers.</span>
            </h2>

            <p className={typography.section.description}>
              Our strength lies in our people. Developers, designers,
              strategists, and innovators building meaningful digital
              experiences together.
            </p>
          </div>

          {/* ================= Right Content ================= */}

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
