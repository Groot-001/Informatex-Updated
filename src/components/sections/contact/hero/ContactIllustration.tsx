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

        h-[380px]
        w-full

        lg:block
      "
    >
      <BackgroundGlow />

      <DotPattern />

      <ConnectionPath />

      <FloatingCard
        icon={Mail}
        delay={0}
        className="left-[18%] top-[12%] -rotate-6"
      />

      <FloatingCard
        icon={MapPin}
        delay={0.8}
        className="left-[42%] top-[58%]"
      />

      <FloatingCard
        icon={Phone}
        delay={1.6}
        className="right-[18%] top-[28%] rotate-6"
      />
    </div>
  );
}
