import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroFloatingCards from "./HeroFloatingcards";
import HeroFloatingIcons from "./HeroFloatingIcons";

const HeroSection = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="
        relative
        isolate
        overflow-hidden
        py-24
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
