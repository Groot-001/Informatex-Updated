import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <section
      className="
        about-section
        relative
        overflow-hidden
        py-20
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-14
          px-6

          lg:grid-cols-12
          lg:gap-10
          lg:px-8
        "
      >
        {/* Left Content */}

        <div
          className="
            about-content
            lg:col-span-4
          "
        >
          <SectionEyebrow>Our Purpose</SectionEyebrow>

          <h2 className={typography.section.title}>
            Technology with purpose.
            <span className="block text-[#4F46C8]">Impact that lasts.</span>
          </h2>

          <p className={typography.section.description}>
            We empower organizations with innovative technology solutions that
            drive growth, efficiency, and meaningful impact. Guided by our
            values and delivered by our people, we build partnerships that last.
          </p>

          <div className="mt-10">
            <DotGrid />
          </div>
        </div>

        {/* Cards */}

        <div
          className="
            grid
            grid-cols-1
            place-items-start
            gap-6

            sm:grid-cols-2

            xl:grid-cols-3

            lg:col-span-8
          "
        >
          {valueCards.map((card) => (
            <div
              key={card.title}
              className="
                value-card
                w-full
                max-w-[285px]
              "
            >
              <Reveal>
                <ValueCard {...card} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
