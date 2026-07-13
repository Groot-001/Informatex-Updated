import { MessageCircleMore } from "lucide-react";

export default function ContactBadge() {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2.5

        rounded-full

        border
        border-[#DCEAF6]

        bg-[#EDF5FC]

        px-5
        py-2.5

        shadow-sm

        transition-all
        duration-300

        hover:border-[#2374B6]/30
        hover:shadow-md
      "
    >
      <div
        className="
          flex
          h-8
          w-8

          items-center
          justify-center

          rounded-full

          bg-white

          shadow-sm
        "
      >
        <MessageCircleMore
          className="
            h-4
            w-4

            text-[#2374B6]
          "
          strokeWidth={2.2}
        />
      </div>

      <span
        className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.12em]

          text-[#113358]
        "
      >
        Contact With Us
      </span>
    </div>
  );
}
