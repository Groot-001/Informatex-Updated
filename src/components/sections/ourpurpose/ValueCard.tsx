import { CheckCircle2 } from "lucide-react";
import type { ValueCardData } from ".";
import IconBadge from "./IconBadge";

export default function ValueCard({
  icon,
  title,
  description,
  checklist,
}: ValueCardData) {
  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col

        overflow-hidden

        rounded-3xl

        border
        border-[#E5EDF5]

        bg-white

        p-8

        shadow-[0_10px_35px_rgba(17,51,88,0.05)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:border-[#C6DDF2]
        hover:shadow-[0_22px_50px_rgba(17,51,88,0.10)]
      "
    >
      {/* Top Accent */}

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

          scale-x-0
          origin-left

          transition-transform
          duration-300

          group-hover:scale-x-100
        "
      />

      {/* Icon */}

      <div className="mb-7">
        <IconBadge icon={icon} size="lg" />
      </div>

      {/* Title */}

      <h3
        className="
          text-[22px]
          font-semibold
          leading-tight
          tracking-tight

          text-[#113358]
        "
      >
        {title}
      </h3>

      {/* Description */}

      {description && (
        <p
          className="
            mt-4

            text-[15px]
            leading-7

            text-slate-600
          "
        >
          {description}
        </p>
      )}

      {/* Divider */}

      {checklist && (
        <div
          className="
            my-6

            h-px
            w-full

            bg-gradient-to-r
            from-[#D8EAF8]
            to-transparent
          "
        />
      )}

      {/* Checklist */}

      {checklist && (
        <ul className="space-y-3">
          {checklist.map((item) => (
            <li
              key={item}
              className="
                flex
                items-start
                gap-3

                text-[15px]
                leading-6

                text-slate-600
              "
            >
              <CheckCircle2
                className="
                  mt-0.5
                  h-5
                  w-5
                  shrink-0

                  text-[#2374B6]
                "
                strokeWidth={2.2}
              />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
