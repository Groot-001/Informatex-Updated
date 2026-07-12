import { ArrowRight } from "lucide-react";

import IconBadge from "./IconBadge";
import type { FeatureItemData } from ".";

export default function FeatureItem({
  icon,
  title,
  description,
}: FeatureItemData) {
  return (
    <article
      className="
        group
        relative

        flex
        h-full
        flex-col

        overflow-hidden

        rounded-[36px]

        border
        border-[#DCEAF6]

        bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)]

        p-10

        shadow-[0_24px_60px_rgba(17,51,88,.06)]

        transition-all
        duration-500

        hover:-translate-y-2
        hover:shadow-[0_35px_80px_rgba(17,51,88,.12)]
      "
    >
      {/* Accent */}

      <div
        className="
          absolute
          inset-x-0
          top-0

          h-1

          bg-gradient-to-r
          from-[#113358]
          via-[#2374B6]
          to-transparent
        "
      />

      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute

          right-[-5rem]
          top-[-5rem]

          h-56
          w-56

          rounded-full

          bg-[#2374B6]/8

          blur-[100px]
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Icon */}

        <IconBadge icon={icon} color="secondary" size="lg" />

        {/* Heading */}

        <h3
          className="
            mt-8

            text-3xl
            font-bold
            leading-tight
            tracking-tight

            text-[#113358]
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-6

            max-w-md

            text-[17px]
            leading-8

            text-slate-600
          "
        >
          {description}
        </p>

        {/* Divider */}

        <div
          className="
            mt-8

            h-[3px]
            w-20

            rounded-full

            bg-gradient-to-r
            from-[#113358]
            via-[#2374B6]
            to-transparent
          "
        />

        {/* Bottom */}

        <div
          className="
            mt-auto
            pt-10

            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-sm
              font-semibold

              uppercase
              tracking-[0.18em]

              text-[#2374B6]
            "
          >
            Trusted Process
          </span>

          <ArrowRight
            className="
              h-5
              w-5

              text-[#2374B6]

              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </article>
  );
}
