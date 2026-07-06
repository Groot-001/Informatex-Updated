import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      {/* Primary Button */}
      <Button
        className="
          h-12
          rounded-lg
          bg-[#5C4BC7]
          px-7
          text-base
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-[#4E3DB5]
          hover:shadow-lg
        "
      >
        Get Started
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      {/* Secondary Button */}
      <Button
        variant="outline"
        className="
          h-12
          rounded-lg
          border-[#D8CCFF]
          bg-white
          px-7
          text-base
          font-semibold
          text-[#5C4BC7]
          transition-all
          duration-300
          hover:border-[#5C4BC7]
          hover:bg-[#F8F6FF]
        "
      >
        Our Work
      </Button>
    </div>
  );
}
