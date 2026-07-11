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
        relative
        isolate
        w-full
        overflow-hidden

        min-h-[calc(100dvh-96px)]

        bg-[linear-gradient(180deg,#EEF5FB_0%,#F7FAFD_55%,#FFFFFF_100%)]
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
          min-h-[calc(100dvh-96px)]

          w-full
          max-w-[1440px]

          items-center
          justify-center

          px-6
          lg:px-10
          xl:px-12
        "
      >
        <HeroContent />
      </div>
    </section>
  );
};

export default HeroSection;
