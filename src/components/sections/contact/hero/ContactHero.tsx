import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import ContactBadge from "./ContactBadge";
import ContactDescription from "./ContactDescription";
import ContactHeading from "./ContactHeading";
import ContactIllustration from "./ContactIllustration";

export default function ContactHero() {
  return (
    <Section
      className="
        relative
        overflow-hidden

        bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)]
      "
    >
      {/* ================================================= */}
      {/* Background Glow */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute

          -left-40
          top-0

          h-[34rem]
          w-[34rem]

          rounded-full

          bg-[#2374B6]/5

          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          -right-32
          bottom-[-8rem]

          h-[30rem]
          w-[30rem]

          rounded-full

          bg-[#113358]/5

          blur-[170px]
        "
      />

      {/* ================================================= */}
      {/* Content */}
      {/* ================================================= */}

      <Container size="xl" className="relative z-10">
        <div
          className="
            grid
            items-center

            gap-16

            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-20

            xl:gap-24
          "
        >
          {/* ================================================= */}
          {/* Left */}
          {/* ================================================= */}

          <div
            className="
              max-w-xl

              lg:pr-6
            "
          >
            <ContactBadge />

            <ContactHeading />

            <ContactDescription />
          </div>

          {/* ================================================= */}
          {/* Right */}
          {/* ================================================= */}

          <div
            className="
              relative

              hidden

              lg:flex
              lg:items-center
              lg:justify-center
            "
          >
            <ContactIllustration />
          </div>
        </div>
      </Container>
    </Section>
  );
}
