import { CheckCircle2 } from "lucide-react";

import { HERO_CONTENT, PRODUCT_CAPABILITIES } from "./constants";
import HeroButtons from "./HeroButtons";
import HeroTrust from "./HeroTrust";

export default function HeroContent() {
  const BadgeIcon = HERO_CONTENT.badge.icon;

  return (
    <div className="max-w-2xl">
      {/* ================================================= */}
      {/* Badge */}
      {/* ================================================= */}

      <div
        className="
          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-[#DCEAF6]

          bg-[#EDF5FC]

          px-5
          py-2

          text-sm
          font-semibold

          text-[#113358]
        "
      >
        <BadgeIcon className="h-4 w-4" />

        {HERO_CONTENT.badge.text}
      </div>

      {/* ================================================= */}
      {/* Heading */}
      {/* ================================================= */}

      <h1
        className="
          mt-8

          text-5xl
          font-bold
          leading-[1.05]
          tracking-tight

          text-[#113358]

          lg:text-6xl
        "
      >
        {HERO_CONTENT.heading.line1}

        <span className="mt-2 block text-[#2374B6]">
          {HERO_CONTENT.heading.line2}
        </span>

        <span className="mt-2 block">{HERO_CONTENT.heading.line3}</span>
      </h1>

      {/* ================================================= */}
      {/* Description */}
      {/* ================================================= */}

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

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <div className="mt-10">
        <HeroButtons />
      </div>

      {/* ================================================= */}
      {/* Product Categories */}
      {/* ================================================= */}

      <div
        className="
          mt-12

          border-t
          border-[#EAF2F8]

          pt-8
        "
      >
        <p
          className="
            mb-4

            text-sm
            font-semibold
            uppercase
            tracking-[0.18em]

            text-[#2374B6]
          "
        >
          Our Product Suite
        </p>

        <div className="flex flex-wrap gap-3">
          {PRODUCT_CAPABILITIES.map((item) => (
            <div
              key={item}
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-[#DCEAF6]

                bg-white

                px-4
                py-2

                text-sm
                font-medium

                text-[#113358]

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-[#2374B6]/40
                hover:bg-[#F8FBFE]
                hover:shadow-md
              "
            >
              <CheckCircle2 className="h-4 w-4 text-[#2374B6]" />

              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ================================================= */}
      {/* Trust */}
      {/* ================================================= */}

      <div className="mt-10">
        <HeroTrust />
      </div>
    </div>
  );
}
