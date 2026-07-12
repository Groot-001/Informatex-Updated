import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";

import { typography } from "@/design-system/typography";

import FeatureItem from "./FeatureItem";
import SectionEyebrow from "./SectionEyeBrow";
import { whyChooseFeatures } from "./WhyChooseus.data";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  "Business-first approach",
  "Modern scalable architecture",
  "Transparent communication",
  "Long-term technical partnership",
];

const stats = [
  {
    value: "100+",
    label: "Projects",
  },
  {
    value: "20+",
    label: "Countries",
  },
  {
    value: "98%",
    label: "Retention",
  },
];

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
      y: 32,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: "power3.out",
    }).from(
      ".feature-card",
      {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.65,
        ease: "power3.out",
      },
      "-=0.25",
    );
  });

  return (
    <Section
      spacing="xl"
      className="
        why-section
        relative
        overflow-hidden

        bg-[linear-gradient(
          180deg,
          #F7FBFE_0%,
          #FFFFFF_30%,
          #FFFFFF_70%,
          #F8FBFE_100%
        )]
      "
    >
      {/* Mesh */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          opacity-[0.025]

          bg-[linear-gradient(rgba(17,51,88,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(17,51,88,.22)_1px,transparent_1px)]

          bg-[size:72px_72px]
        "
      />

      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute

          -left-24
          top-20

          h-[30rem]
          w-[30rem]

          rounded-full

          bg-[#2374B6]/6

          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          right-[-10rem]
          bottom-[-10rem]

          h-[34rem]
          w-[34rem]

          rounded-full

          bg-[#113358]/5

          blur-[170px]
        "
      />

      <Container size="xl">
        {/* Heading */}

        <div
          className="
            why-heading

            relative
            z-10

            mx-auto
            max-w-3xl

            text-center
          "
        >
          <SectionEyebrow align="center">Why Choose Informatex</SectionEyebrow>

          <h2 className={`${typography.section.title} mt-6`}>
            More than software.
            <span className="mt-2 block text-[#2374B6]">
              A long-term technology partner.
            </span>
          </h2>

          <p
            className={`
              ${typography.section.description}
              mx-auto
              mt-6
              max-w-2xl
            `}
          >
            We combine business strategy, engineering excellence and continuous
            collaboration to deliver solutions that keep creating value as your
            business grows.
          </p>
        </div>

        {/* Layout */}

        <div
          className="
            relative
            z-10

            mt-24

            grid

            gap-10

            lg:grid-cols-12
          "
        >
          {/* Left */}

          <div className="feature-card lg:col-span-5">
            <div
              className="
                flex
                h-full
                flex-col

                rounded-[36px]

                border
                border-[#DCEAF6]

                bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)]

                p-10

                shadow-[0_28px_70px_rgba(17,51,88,.08)]
              "
            >
              <FeatureItem {...whyChooseFeatures[0]} />

              <div className="mt-8 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2374B6]" />

                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <h4 className="text-2xl font-bold text-[#113358]">
                      {stat.value}
                    </h4>

                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Button
                className="
                  mt-10
                  w-fit

                  rounded-full

                  bg-[#113358]

                  px-7

                  hover:bg-[#0D2946]
                "
              >
                Let's Work Together
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right */}

          <div
            className="
              lg:col-span-7

              grid

              gap-6

              sm:grid-cols-2
            "
          >
            {whyChooseFeatures.slice(1).map((feature) => (
              <div key={feature.title} className="feature-card">
                <FeatureItem
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
