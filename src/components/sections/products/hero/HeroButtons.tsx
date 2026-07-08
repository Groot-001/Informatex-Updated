import { ArrowRight } from "lucide-react";

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
      <Button size="lg" className="group bg-[#113358] hover:bg-[#0d2a47]">
        {HERO_CONTENT.primaryButton.text}

        <ArrowRight
          className="
            ml-2
            h-4
            w-4
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </Button>

      <Button size="lg" variant="outline">
        {HERO_CONTENT.secondaryButton.text}
      </Button>
    </div>
  );
}
