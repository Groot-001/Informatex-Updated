import { Users } from "lucide-react";

import type { AccentColor, TeamMember } from ".";

const bgMap: Record<AccentColor, string> = {
  primary: "bg-brand",
  secondary: "bg-secondary",

  navy: "bg-[#093254]",
  blue: "bg-[#2374B6]",
  cyan: "bg-[#4F92C9]",
  sky: "bg-[#67B7F7]",
  teal: "bg-[#2D8DAF]",
};

interface AvatarStackProps {
  members: TeamMember[];
  count: string;
  countLabel?: string;
}

export default function AvatarStack({
  members,
  count,
  countLabel = "Experts and growing",
}: AvatarStackProps) {
  return (
    <div
      className="
        flex
        flex-col
        gap-12

        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* ================= Avatars ================= */}

      <div
        className="
          flex
          flex-wrap
          items-center
          justify-center

          lg:justify-start
        "
      >
        {members.map((member, index) => (
          <div
            key={member.name}
            className={`
              avatar-item
              group
              relative

              ${index !== 0 ? "-ml-3 md:-ml-4" : ""}
            `}
          >
            <div
              className={`
                ${bgMap[member.color]}

                flex
                h-14
                w-14

                items-center
                justify-center

                rounded-full

                border-4
                border-white

                text-sm
                font-semibold
                text-white

                shadow-brand

                transition-all
                duration-300

                group-hover:-translate-y-2
                group-hover:scale-105
                group-hover:z-20

                md:h-16
                md:w-16

                lg:h-[72px]
                lg:w-[72px]
              `}
            >
              {member.initials}
            </div>
          </div>
        ))}
      </div>

      {/* ================= Counter ================= */}

      <div
        className="
          group
          relative

          mx-auto

          overflow-hidden

          rounded-[32px]

          border
          border-soft

          bg-surface

          px-8
          py-7

          shadow-brand

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-brand-lg

          lg:mx-0
        "
      >
        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute

            -right-10
            -top-10

            h-28
            w-28

            rounded-full

            bg-secondary/10

            blur-3xl
          "
        />

        <div className="relative z-10 flex items-center gap-5">
          {/* Icon */}

          <div
            className="
              flex
              h-16
              w-16

              items-center
              justify-center

              rounded-2xl

              bg-secondary/10

              transition-colors
              duration-300

              group-hover:bg-secondary/15
            "
          >
            <Users
              className="
                h-8
                w-8

                text-secondary
              "
            />
          </div>

          {/* Content */}

          <div>
            <h3
              className="
                text-4xl
                font-bold
                tracking-tight

                text-brand
              "
            >
              {count}
            </h3>

            <p
              className="
                mt-1

                text-sm

                text-muted
              "
            >
              {countLabel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
