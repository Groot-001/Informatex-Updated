import { HERO_CONTENT } from "./constants";
import HeroButtons from "./HeroButtons";
import HeroTrust from "./HeroTrust";

export default function HeroContent() {
  const BadgeIcon = HERO_CONTENT.badge.icon;

  return (
    <div className="max-w-2xl">
      {/* Badge */}
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-[#D6E4F5]
          bg-[#F8FBFF]
          px-4
          py-2
        "
      >
        <BadgeIcon className="h-4 w-4 text-[#113358]" />

        <span
          className="
            text-sm
            font-semibold
            tracking-wide
            text-[#113358]
          "
        >
          {HERO_CONTENT.badge.text}
        </span>
      </div>

      {/* Heading */}
      <h1
        className="
          mt-8
          text-5xl
          font-bold
          leading-tight
          tracking-tight
          text-slate-900

          lg:text-6xl
        "
      >
        <span>{HERO_CONTENT.heading.line1}</span>

        <br />

        <span className="text-[#113358]">{HERO_CONTENT.heading.line2}</span>

        <br />

        <span>{HERO_CONTENT.heading.line3}</span>
      </h1>

      {/* Description */}
      <p
        className="
          mt-8
          max-w-xl
          text-lg
          leading-8
          text-slate-600
        "
      >
        {HERO_CONTENT.description}
      </p>

      {/* Buttons */}
      <div className="mt-10">
        <HeroButtons />
      </div>

      {/* Trust */}
      <div className="mt-10">
        <HeroTrust />
      </div>
    </div>
  );
}
