import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function HeroActions() {
  return (
    <div
      className="
        mt-10
        flex
        flex-col
        items-center
        gap-4

        sm:flex-row
        sm:justify-center
      "
    >
      {/* Primary Button */}
      <Button
        size="lg"
        className="
        flex 
          group
          h-13
          w-full
          rounded-xl
          bg-[#4F46C8]
          px-8
          text-base
          font-semibold
          text-white
          shadow-[0_10px_30px_rgba(79,70,200,0.18)]
          transition-all
          duration-300
          ease-out
          hover:-translate-y-0.5
          hover:bg-[#4338CA]
          hover:shadow-[0_16px_40px_rgba(79,70,200,0.25)]

          sm:w-auto
        "
      >
        <Link to="/contact" className="inline-flex items-center gap-2">
          <span>Get Started</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>

      {/* Secondary Button */}
      <Button
        variant="outline"
        size="lg"
        className="
          h-13
          w-full
          rounded-xl
          border-[#D9D2F9]
          bg-white
          px-8
          text-base
          font-semibold
          text-[#4F46C8]
          transition-all
          duration-300
          ease-out
          hover:-translate-y-0.5
          hover:border-[#4F46C8]
          hover:bg-[#F5F3FF]

          sm:w-auto
        "
      >
        <Link to="/products">Our Work</Link>
      </Button>
    </div>
  );
}
