import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroFloatingCards from "./HeroFloatingcards";
import HeroFloatingIcons from "./HeroFloatingIcons";

const HeroSection = () => {
  return (
    <section
      role="banner"
      aria-labelledby="hero-heading"
      className="
        bg-soft
      
        relative
        isolate
        overflow-hidden
        w-full
        bg-[#F7F9FC]
        py-20
        sm:py-24
        lg:min-h-[720px]
        lg:py-32
      "
    >
      <HeroBackground />

      <HeroFloatingCards />

      <HeroFloatingIcons />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          items-center
          justify-center
          px-6
          lg:px-8
        "
      >
        <HeroContent />
      </div>
    </section>
  );
};

export default HeroSection;
