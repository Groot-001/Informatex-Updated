import type { FeatureItemData } from "./index";
import IconBadge from "./IconBadge";

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
        rounded-3xl
        border
        border-[#E8E7F3]
        bg-white
        p-7
        text-left
        shadow-[0_10px_35px_rgba(79,70,200,0.06)]
        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-[#4F46C8]/20
        hover:shadow-[0_20px_50px_rgba(79,70,200,0.12)]
      "
    >
      {/* Icon */}

      <div className="mb-6">
        <IconBadge icon={icon} color="indigo" size="md" />
      </div>

      {/* Title */}

      <h3
        className="
          text-xl
          font-semibold
          leading-snug
          text-slate-900
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-4
          flex-1
          text-sm
          leading-7
          text-[#6B7280]
        "
      >
        {description}
      </p>

      {/* Bottom Accent */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[3px]
          w-full
          origin-left
          scale-x-0
          bg-[#4F46C8]
          transition-transform
          duration-300
          group-hover:scale-x-100
        "
      />
    </article>
  );
}
