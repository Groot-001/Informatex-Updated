import { ArrowRight, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

import { HERO_CONTENT } from "./constants";

export default function HeroButtons() {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center

        gap-4
      "
    >
      {/* Primary CTA */}

      <Button
        size="lg"
        className="
          group

          h-12

          rounded-full

          bg-[#113358]

          px-7

          text-white

          shadow-[0_12px_35px_rgba(17,51,88,.18)]

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:bg-[#0D2D4B]
          hover:shadow-[0_20px_45px_rgba(17,51,88,.25)]
        "
      >
        {HERO_CONTENT.primaryButton.text}

        <ArrowRight
          className="
            ml-2

            h-4
            w-4

            transition-transform
            duration-300

            group-hover:translate-x-1.5
          "
        />
      </Button>

      {/* Secondary CTA */}

      <Button
        size="lg"
        variant="outline"
        className="
          group

          h-12

          rounded-full

          border-[#DCEAF6]

          bg-white/80

          px-7

          text-[#113358]

          backdrop-blur-sm

          transition-all
          duration-300

          hover:border-[#2374B6]/40
          hover:bg-white
          hover:text-[#2374B6]
          hover:shadow-lg
        "
      >
        <PlayCircle
          className="
            mr-2

            h-4
            w-4

            transition-transform
            duration-300

            group-hover:scale-110
          "
        />

        {HERO_CONTENT.secondaryButton.text}
      </Button>
    </div>
  );
}
