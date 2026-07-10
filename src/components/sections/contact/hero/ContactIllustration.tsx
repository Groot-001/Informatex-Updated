import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactIllustration() {
  return (
    <div
      className="
        relative
        hidden
        h-[360px]
        w-full
        lg:block
      "
    >
      {/* Soft Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#2374B6]/10
          blur-[100px]
        "
      />

      {/* Dot Grid */}

      <div
        className="
          absolute
          right-8
          top-4
          h-24
          w-24
          opacity-40
          [background-image:radial-gradient(#2374B6_1.3px,transparent_1.3px)]
          [background-size:14px_14px]
        "
      />

      {/* Dashed SVG Path */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 360"
        fill="none"
      >
        <path
          d="M185 70
             C260 30,
             280 170,
             350 150

             S470 250,
             430 310"
          stroke="#C8D8E8"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />
      </svg>

      {/* Email */}

      <FloatingIcon className="left-[18%] top-[12%] rotate-[-6deg]">
        <Mail className="h-8 w-8 text-[#216FAE]" />
      </FloatingIcon>

      {/* Phone */}

      <FloatingIcon className="right-[18%] top-[30%] rotate-[8deg]">
        <Phone className="h-8 w-8 text-[#216FAE]" />
      </FloatingIcon>

      {/* Location */}

      <FloatingIcon className="left-[42%] top-[56%]">
        <MapPin className="h-8 w-8 text-[#216FAE]" />
      </FloatingIcon>
    </div>
  );
}

interface FloatingIconProps {
  children: React.ReactNode;
  className?: string;
}

function FloatingIcon({ children, className = "" }: FloatingIconProps) {
  return (
    <div
      className={`
        absolute
        ${className}

        flex
        h-18
        w-18
        items-center
        justify-center

        rounded-2xl

        border
        border-[#D9E8F6]

        bg-[#DCEBFA]

        shadow-[0_15px_40px_rgba(9,50,84,.08)]

        transition-all
        duration-300

        hover:-translate-y-2
        hover:scale-105
      `}
    >
      {children}
    </div>
  );
}
