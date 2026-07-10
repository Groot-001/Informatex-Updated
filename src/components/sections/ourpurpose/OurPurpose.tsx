import Section from "@/components/common/Section";

import AboutSection from "./AboutSection";
import ProductsSection from "./ProductSection";
import TeamSection from "./TeamSection";
import WhyChooseSection from "./WhyChooseSection";

export default function OurPurpose() {
  return (
    <Section
      spacing="xl"
      className="
        relative
        overflow-hidden
        bg-soft
      "
    >
      <div
        className="
          pointer-events-none
          absolute

          left-1/2
          top-0

          h-[22rem]
          w-[42rem]

          -translate-x-1/2

          rounded-full

          bg-[#2374B6]/10

          blur-[170px]

          md:h-[28rem]
          md:w-[48rem]
        "
      />

      {/* Bottom Right Glow */}

      <div
        className="
          pointer-events-none
          absolute

          right-[-8rem]
          bottom-[-6rem]

          h-[22rem]
          w-[22rem]

          rounded-full

          bg-[#093254]/8

          blur-[160px]

          md:h-[28rem]
          md:w-[28rem]
        "
      />

      {/* Left Accent Glow */}

      <div
        className="
          pointer-events-none
          absolute

          left-[-8rem]
          top-1/2

          h-[18rem]
          w-[18rem]

          -translate-y-1/2

          rounded-full

          bg-[#2374B6]/6

          blur-[140px]

          lg:h-[24rem]
          lg:w-[24rem]
        "
      />

      {/* ================= Content ================= */}

      <div className="relative z-10">
        <AboutSection />
        <ProductsSection />
        <TeamSection />
        <WhyChooseSection />
      </div>
    </Section>
  );
}
