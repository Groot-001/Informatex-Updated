import type { ContactCardData } from "./types";

interface ContactCardProps {
  card: ContactCardData;
}

export default function ContactCard({ card }: ContactCardProps) {
  const { icon: Icon, title, value, description } = card;
  
  return (
    <article
      className="
        group
        relative

        overflow-hidden

        rounded-[28px]

        border
        border-soft

        bg-surface

        px-8
        py-10

        text-center

        shadow-brand

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-secondary/20
        hover:shadow-brand-lg
      "
    >
      {/* Top Accent */}

      <span
        className="
          absolute
          left-0
          top-0

          h-1
          w-full

          origin-left
          scale-x-0

          bg-secondary

          transition-transform
          duration-300

          group-hover:scale-x-100
        "
      />

      {/* Background Glow */}

      <div
        className="
          pointer-events-none

          absolute
          -right-12
          -top-12

          h-40
          w-40

          rounded-full

          bg-secondary/10

          opacity-0

          blur-3xl

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        {/* Icon */}

        <div
          className="
            mx-auto

            flex
            h-16
            w-16

            items-center
            justify-center

            rounded-2xl

            bg-secondary/10

            transition-all
            duration-300

            group-hover:scale-105
            group-hover:bg-secondary
          "
        >
          <Icon
            className="
              h-7
              w-7

              text-secondary

              transition-colors
              duration-300

              group-hover:text-white
            "
            strokeWidth={2}
          />
        </div>

        {/* Title */}

        <h3
          className="
            mt-7

            text-xl
            font-semibold

            text-brand
          "
        >
          {title}
        </h3>

        {/* Value */}

        <p
          className="
            mt-4

            break-words

            text-lg
            font-semibold
            leading-7

            text-secondary
          "
        >
          {value}
        </p>

        {/* Description */}

        <p
          className="
            mt-3

            text-sm
            leading-7

            text-muted
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
}
