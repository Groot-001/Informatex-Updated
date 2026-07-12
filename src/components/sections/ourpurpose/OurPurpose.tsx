import Section from "@/components/common/Section";

import AboutSection from "./AboutSection";
import ProductsSection from "./ProductSection";
import TeamSection from "./TeamSection";
import WhyChooseSection from "./WhyChooseSection";

export default function OurPurpose() {
  return (
    <Section
      spacing="none"
      className="
        relative
        overflow-hidden

        bg-[#F8FBFE]
      "
    >
      {/* Soft Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0

          h-[520px]

          bg-[radial-gradient(circle_at_top,rgba(35,116,182,0.08),transparent_70%)]
        "
      />

      {/* Content */}

      <div className="relative z-10">
        <AboutSection />

        <ProductsSection />

        <TeamSection />

        <WhyChooseSection />
      </div>
    </Section>
  );
}
