import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import { typography } from "@/design-system/typography";

import FeatureItem from "./FeatureItem";
import SectionEyebrow from "./SectionEyeBrow";
import { whyChooseFeatures } from "./WhyChooseus.data";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseSection() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".why-section",
        start: "top 75%",
        once: true,
      },
    });

    tl.from(".why-heading > *", {
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
    }).from(
      ".feature-card",
      {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.3",
    );
  });

  return (
    <Section
      spacing="xl"
      className="
        why-section
        relative
        overflow-hidden

        bg-soft
      "
    >
      {/* ================= Background Glow ================= */}

      {/* Top */}

      <div
        className="
          pointer-events-none
          absolute

          left-1/2
          top-0

          h-[30rem]
          w-[44rem]

          -translate-x-1/2

          rounded-full

          bg-[#2374B6]/8

          blur-[180px]
        "
      />

      {/* Bottom Left */}

      <div
        className="
          pointer-events-none
          absolute

          -left-24
          bottom-0

          h-[24rem]
          w-[24rem]

          rounded-full

          bg-[#093254]/6

          blur-[170px]
        "
      />

      <Container size="xl">
        {/* ================= Heading ================= */}

        <div
          className="
            why-heading
            relative
            z-10

            mx-auto
            max-w-4xl

            text-center
          "
        >
          <SectionEyebrow align="center">
            Why Choose Informatex Tech
          </SectionEyebrow>

          <h2 className={typography.section.title}>
            More than a vendor.
            <span className="mt-2 block text-secondary">
              Your growth partner.
            </span>
          </h2>

          <p
            className={`
              ${typography.section.description}
              mx-auto
              mt-6
              max-w-3xl
            `}
          >
            We combine business expertise, modern technology, and long-term
            collaboration to deliver software that creates measurable value.
          </p>
        </div>

        {/* ================= Features ================= */}

        <div
          className="
            relative
            z-10

            mt-20

            grid
            grid-cols-1

            gap-6

            sm:grid-cols-2

            lg:grid-cols-3

            2xl:grid-cols-5
          "
        >
          {whyChooseFeatures.map((feature, index) => (
            <div key={index} className="feature-card h-full">
              <FeatureItem
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
