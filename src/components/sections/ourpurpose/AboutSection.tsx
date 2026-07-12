import { Rocket } from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import { valueCards } from "./About.data";
import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyeBrow";
import ValueCard from "./ValueCard";

export default function AboutSection() {
  return (
    <Section
      spacing="xl"
      className="
        about-section
        relative
        overflow-hidden

        bg-[linear-gradient(180deg,#F7FBFE_0%,#FFFFFF_100%)]
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute

          right-[-10rem]
          top-24

          h-[34rem]
          w-[34rem]

          rounded-full

          bg-[#2374B6]/5

          blur-[130px]
        "
      />

      <Container size="xl">
        <div
          className="
            grid

            gap-20

            lg:grid-cols-12
            lg:items-start
          "
        >
          {/* ========================================================== */}
          {/* Left */}
          {/* ========================================================== */}

          <Reveal
            direction="left"
            className="
              about-content

              h-fit

              lg:sticky
              lg:top-28
              lg:col-span-4
            "
          >
            <SectionEyebrow>Our Purpose</SectionEyebrow>

            <h2
              className="
                mt-5

                max-w-lg

                text-4xl
                font-bold
                leading-[1.08]
                tracking-tight

                text-[#113358]

                md:text-5xl
              "
            >
              Technology built
              <span className="mt-2 block text-[#2374B6]">
                for business growth.
              </span>
            </h2>

            <p
              className="
                mt-8

                max-w-md

                text-[17px]
                leading-8

                text-slate-700
              "
            >
              We help organizations modernize operations through secure,
              scalable and reliable technology solutions. From strategy to
              implementation, we build long-term partnerships that deliver real
              business value.
            </p>

            {/* Brand Divider */}

            <div className="mt-10 flex items-center gap-3">
              <div className="h-[3px] w-14 rounded-full bg-[#113358]" />

              <div className="h-[3px] w-6 rounded-full bg-[#2374B6]" />
            </div>

            {/* Commitment Card */}

            <div
              className="
                mt-10

                rounded-3xl

                border
                border-[#DCEAF6]

                bg-white

                p-6

                shadow-[0_12px_35px_rgba(17,51,88,.05)]
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-2xl

                    bg-[#EDF5FC]

                    text-[#113358]
                  "
                >
                  <Rocket size={22} />
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-semibold

                      text-[#113358]
                    "
                  >
                    Long-term Technology Partner
                  </h3>

                  <p
                    className="
                      mt-2

                      text-sm
                      leading-7

                      text-slate-600
                    "
                  >
                    We don't just deliver software. We help businesses grow with
                    scalable digital solutions and lasting partnerships.
                  </p>
                </div>
              </div>
            </div>

            {/* Company Metrics */}

            <div
              className="
                mt-10

                grid
                grid-cols-3

                gap-5
              "
            >
              <div>
                <h4 className="text-3xl font-bold text-[#113358]">7+</h4>

                <p className="mt-1 text-sm text-slate-500">Years</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-[#113358]">100+</h4>

                <p className="mt-1 text-sm text-slate-500">Projects</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-[#113358]">20+</h4>

                <p className="mt-1 text-sm text-slate-500">Countries</p>
              </div>
            </div>
          </Reveal>

          {/* ========================================================== */}
          {/* Right */}
          {/* ========================================================== */}

          <div className="lg:col-span-8">
            <div
              className="
                grid

                grid-cols-1

                gap-7

                md:grid-cols-2

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
