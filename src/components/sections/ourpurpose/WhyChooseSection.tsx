import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { typography } from "@/design-system/typography";

import FeatureItem from "./FeatureItem";
import SectionEyebrow from "./SectionEyeBrow";
import { whyChooseFeatures } from "./WhyChooseus.data";

console.log("", whyChooseFeatures);

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
    <section className="why-section py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="why-heading mx-auto max-w-3xl text-center">
          <SectionEyebrow align="center">
            Why Choose Informatex Tech
          </SectionEyebrow>

          <h2 className={typography.section.title}>
            More than a vendor.
            <span className="block text-[#4F46C8]">Your growth partner.</span>
          </h2>

          <p className={typography.section.description}>
            We combine business expertise, modern technology, and long-term
            collaboration to deliver software that creates measurable value.
          </p>
        </div>

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-6

            sm:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-5
          "
        >
          {whyChooseFeatures.map((feature) => (
            <div key={feature.title} className="feature-card h-full">
              <FeatureItem
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
