import AboutSection from "./AboutSection";
import ProductsSection from "./ProductSection";
import TeamSection from "./TeamSection";
import WhyChooseSection from "./WhyChooseSection";

const OurPurpose = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FAF8FF]
      "
    >
      {/* Top Glow */}
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
          bg-[#DDD0FB]/40
          blur-[140px]
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-[20rem]
          w-[20rem]
          rounded-full
          bg-[#E4DAFC]/30
          blur-[120px]
        "
      />

      <div className="relative z-10">
        <AboutSection />
        <ProductsSection />
        <TeamSection />
        <WhyChooseSection />
      </div>
    </section>
  );
};

export default OurPurpose;
