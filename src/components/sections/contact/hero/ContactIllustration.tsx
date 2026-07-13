import { Mail, MapPin, Phone } from "lucide-react";

import BackgroundGlow from "./BackgroundGlow";
import ConnectionPath from "./ConnectionPath";
import DotPattern from "./DotPattern";
import FloatingCard from "./FloatingCard";

export default function ContactIllustration() {
  return (
    <div
      className="
        relative

        hidden

        h-[480px]
        w-full

        lg:flex
        lg:items-center
        lg:justify-center
      "
    >
      {/* ================================================= */}
      {/* Background */}
      {/* ================================================= */}

      <BackgroundGlow />

      <DotPattern
        className="
          right-8
          top-6
        "
      />

      {/* ================================================= */}
      {/* Connection */}
      {/* ================================================= */}

      <ConnectionPath />

      {/* ================================================= */}
      {/* Floating Cards */}
      {/* ================================================= */}

      {/* Email */}

      <FloatingCard
        icon={Mail}
        delay={0}
        className="
          left-[14%]
          top-[10%]

          -rotate-6
        "
      />

      {/* Location */}

      <FloatingCard
        icon={MapPin}
        delay={0.5}
        className="
          left-1/2
          top-[52%]

          -translate-x-1/2
        "
      />

      {/* Phone */}

      <FloatingCard
        icon={Phone}
        delay={1}
        className="
          right-[14%]
          top-[18%]

          rotate-6
        "
      />
    </div>
  );
}
