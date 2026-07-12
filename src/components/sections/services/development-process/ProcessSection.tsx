import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import SectionHeading from "../development-services/SectionHeading";
import ProcessTimeline from "./ProcessTimeline";

export default function ProcessSection() {
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

          -left-32
          top-0

          h-[30rem]
          w-[30rem]

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
            eyebrow="Development Process"
            title={
              <>
                From concept to launch,
                <span className="mt-2 block text-[#2374B6]">
                  every step is carefully planned.
                </span>
              </>
            }
            description="We follow a proven development workflow that combines strategy, design, engineering, testing, and deployment to deliver reliable digital products with predictable results."
          />

          <ProcessTimeline />
        </div>
      </Container>
    </Section>
  );
}
