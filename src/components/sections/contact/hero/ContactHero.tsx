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

        bg-soft
      "
    >
      {/* ================= Background Glow ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Right Glow */}

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

        {/* Left Glow */}

        <div
          className="
            absolute
            bottom-0
            left-0

            h-[300px]
            w-[300px]

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

            gap-12

            lg:grid-cols-12
            lg:gap-16

            xl:gap-20
          "
        >
          {/* ================= Left ================= */}

          <div className="lg:col-span-5">
            <ContactBadge />

            <ContactHeading />

            <ContactDescription />
          </div>

          {/* ================= Right ================= */}

          <div className="lg:col-span-7">
            <ContactIllustration />
          </div>
        </div>
      </Container>
    </Section>
  );
}
