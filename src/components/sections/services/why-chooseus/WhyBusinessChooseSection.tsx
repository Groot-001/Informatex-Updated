import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import SectionHeading from "../development-services/SectionHeading";
import WhyChooseGrid from "./WhyChooseGrid";

export default function WhyBusinessChooseSection() {
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

          h-[32rem]
          w-[32rem]

          rounded-full

          bg-[#2374B6]/5

          blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          right-[-10rem]
          bottom-0

          h-[28rem]
          w-[28rem]

          rounded-full

          bg-[#113358]/5

          blur-[170px]
        "
      />

      <Container size="xl">
        <div className="relative z-10">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                More than an app development team.
                <span className="mt-2 block text-[#2374B6]">
                  A technology partner invested in your success.
                </span>
              </>
            }
            description="We combine strategic thinking, modern technologies, and proven engineering practices to build reliable, scalable, and future-ready applications that help businesses grow with confidence."
          />

          <div className="mt-20 lg:mt-24">
            <WhyChooseGrid />
          </div>
        </div>
      </Container>
    </Section>
  );
}
