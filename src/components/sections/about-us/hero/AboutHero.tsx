import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import PrimaryButton from "@/components/sections/about-us/hero/PrimaryButton";
import SecondaryButton from "@/components/sections/about-us/hero/SecondaryButton";
import SectionBadge from "@/components/sections/about-us/hero/SectionBadge";

import { aboutStats } from "@/components/sections/about-us/hero/aboutstats";

import group from "@/assets/AboutHero.png";

const AboutHeroSection = () => {
  return (
    <Section
      className="
        relative
        overflow-hidden

        bg-soft
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Right */}

        <div
          className="
            absolute
            -top-32
            right-0

            h-[420px]
            w-[420px]

            rounded-full

            bg-secondary/10

            blur-[160px]
          "
        />

        {/* Left */}

        <div
          className="
            absolute
            bottom-0
            left-0

            h-[320px]
            w-[320px]

            rounded-full

            bg-brand/5

            blur-[140px]
          "
        />
      </div>

      <Container size="xl" className="relative z-10">
        <div
          className="
            grid
            items-center

            gap-14

            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* ================= LEFT ================= */}

          <div>
            <SectionBadge title="Who We Are" />

            <h1
              className="
                mt-6

                max-w-xl

                text-4xl
                font-bold
                leading-tight
                tracking-tight

                text-brand

                sm:text-5xl
                lg:text-6xl
              "
            >
              Empowering Businesses
              <span className="block text-secondary">Through Technology</span>
            </h1>

            <p
              className="
                mt-6

                max-w-xl

                text-lg
                leading-8

                text-muted
              "
            >
              We help businesses transform ideas into scalable digital solutions
              through innovative software development, enterprise services and
              modern technology.
            </p>

            {/* ================= Stats ================= */}

            <div
              className="
                mt-10

                grid
                grid-cols-3

                gap-6

                border-y
                border-soft

                py-8
              "
            >
              {aboutStats.map((item) => (
                <div key={item.label}>
                  <h3
                    className="
                      text-3xl
                      font-bold

                      text-brand
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-sm

                      text-muted
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* ================= Buttons ================= */}

            <div
              className="
                mt-10

                flex
                flex-col
                gap-4

                sm:flex-row
              "
            >
              <PrimaryButton title="Work With Us" />

              <SecondaryButton title="Join Our Team" />
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div
            className="
              relative

              flex
              justify-center
            "
          >
            {/* Glow */}

            <div
              className="
                absolute

                h-[340px]
                w-[340px]

                rounded-full

                bg-secondary/15

                blur-[140px]
              "
            />

            {/* Image */}

            <div
              className="
                relative

                overflow-hidden

                rounded-[32px]

                border
                border-soft

                bg-surface

                shadow-brand-lg
              "
            >
              <img
                src={group}
                alt="Informatex Team"
                className="
                  h-[260px]
                  w-full

                  object-cover

                  sm:h-[360px]

                  lg:h-[430px]
                  lg:w-[560px]
                "
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutHeroSection;
