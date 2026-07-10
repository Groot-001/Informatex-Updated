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

        rounded-[28px]

        border
        border-soft

        bg-surface

        p-8

        shadow-brand

        transition-all
        duration-300

        hover:-translate-y-2
        hover:shadow-brand-lg
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute

          -right-12
          -top-12

          h-32
          w-32

          rounded-full

          bg-secondary/10

          blur-3xl

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Icon */}

        <div className="mb-6">
          <IconBadge icon={icon} color="secondary" size="md" />
        </div>

        {/* Title */}

        <h3
          className="
            text-xl
            font-semibold
            leading-tight

            text-brand
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-4

            flex-1

            text-base
            leading-7

            text-muted
          "
        >
          {description}
        </p>
      </div>

      {/* Bottom Accent */}

      <span
        className="
          absolute
          bottom-0
          left-0

          h-[3px]
          w-full

          origin-left
          scale-x-0

          bg-secondary

          transition-transform
          duration-300

          group-hover:scale-x-100
        "
      />
    </article>
  );
}
