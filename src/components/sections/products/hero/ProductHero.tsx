import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import HeroStats from "./HeroStats";

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-16
          px-6
          py-24
          lg:grid-cols-[1fr_1.2fr]
          lg:px-8
        "
      >
        <HeroContent />
        <HeroVisual />
      </div>

      <HeroStats />
    </section>
  );
}
