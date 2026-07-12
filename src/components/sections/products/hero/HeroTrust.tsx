import { HERO_TRUST } from "./constants";

export default function HeroTrust() {
  return (
    <div
      className="
        flex
        flex-wrap

        gap-3
      "
    >
      {HERO_TRUST.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              group

              inline-flex
              items-center
              gap-3

              rounded-full

              border
              border-[#DCEAF6]

              bg-white/90

              px-4
              py-2.5

              shadow-sm

              backdrop-blur-sm

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-[#2374B6]/40
              hover:bg-white
              hover:shadow-md
            "
          >
            {/* Icon */}

            <div
              className="
                flex
                h-8
                w-8

                items-center
                justify-center

                rounded-full

                bg-[#EDF5FC]

                text-[#2374B6]

                transition-all
                duration-300

                group-hover:bg-[#2374B6]
                group-hover:text-white
              "
            >
              <Icon className="h-4 w-4" />
            </div>

            {/* Label */}

            <span
              className="
                text-sm
                font-medium

                text-[#113358]
              "
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
