import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroFloatingCards from "./HeroFloatingcards";
import HeroFloatingIcons from "./HeroFloatingIcons";
// import HeroIllustration from "./HeroIllustration";

const HeroSection = () => {
  return (
    <>
      <section
        className="
        relative
        isolate
        overflow-hidden
        px-6
        py-28
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
    flex-col
    items-center
    gap-16
    px-6
    lg:flex-row
    lg:justify-between
  "
        >
          <HeroContent />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
