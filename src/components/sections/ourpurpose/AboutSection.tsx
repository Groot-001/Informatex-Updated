import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import { typography } from "@/design-system/typography";

import { valueCards } from "./About.data";
import DotGrid from "./Dotgrid";
import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyeBrow";
import ValueCard from "./ValueCard";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
        once: true,
      },
    });

    tl.from(".about-content > *", {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.12,
    }).from(
      ".value-card",
      {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=0.3",
    );
  });

  return (
    <Section
      spacing="xl"
      className="
        about-section
        relative
        overflow-hidden
      "
    >
      <Container size="xl">
        <div
          className="
            grid
            items-start
            gap-16

            lg:grid-cols-12
            lg:gap-20
          "
        >
          {/* Left Content */}

          <div
            className="
              about-content

              lg:col-span-5
            "
          >
            <SectionEyebrow>Our Purpose</SectionEyebrow>

            <h2 className={typography.section.title}>
              Technology with purpose.
              <span className="mt-2 block text-secondary">
                Impact that lasts.
              </span>
            </h2>

            <p className={typography.section.description}>
              We empower organizations with innovative technology solutions that
              drive growth, efficiency and meaningful impact. Guided by our
              values and delivered by our people, we build partnerships that
              last.
            </p>

            <DotGrid className="mt-10" />
          </div>

          {/* Right Content */}

          <div
            className="
              lg:col-span-7
            "
          >
            <div
              className="
                grid

                grid-cols-1

                gap-6

                sm:grid-cols-2

                2xl:grid-cols-3

                items-stretch
              "
            >
              {valueCards.map((card, index) => (
                <Reveal
                  key={card.title}
                  delay={index * 0.08}
                  className="value-card h-full"
                >
                  <ValueCard {...card} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
