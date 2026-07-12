import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import SectionHeading from "./SectionHeading";
import ServiceGrid from "./ServiceGrid";

export default function ServicesSection() {
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
          top-1/3

          h-[28rem]
          w-[28rem]

          rounded-full

          bg-[#113358]/5

          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          left-1/2
          bottom-[-12rem]

          h-[30rem]
          w-[30rem]

          -translate-x-1/2

          rounded-full

          bg-[#67B7F7]/6

          blur-[180px]
        "
      />

      <Container size="xl">
        <div className="relative z-10">
          <SectionHeading
            eyebrow="Development Services"
            title={
              <>
                End-to-end application
                <span className="mt-2 block text-[#2374B6]">
                  development for modern businesses.
                </span>
              </>
            }
            description="
    We transform ideas into secure, scalable, and user-centric digital
    products using modern technologies and proven engineering practices.
  "
          />
          <div className="mt-16 lg:mt-20">
            <ServiceGrid />
          </div>
        </div>
      </Container>
    </Section>
  );
}
