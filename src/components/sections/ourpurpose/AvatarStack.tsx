import {
  CheckCircle2,
  User,
  UserRound,
  UserCircle2,
  CircleUserRound,
} from "lucide-react";

import type { AccentColor, TeamMember } from ".";

const bgMap: Record<AccentColor, string> = {
  primary: "bg-brand",
  secondary: "bg-secondary",
  navy: "bg-[#113358]",
  blue: "bg-[#2374B6]",
  cyan: "bg-[#4F92C9]",
  sky: "bg-[#67B7F7]",
  teal: "bg-[#2D8DAF]",
};

const avatarIcons = [User, UserRound, UserCircle2, CircleUserRound];

interface AvatarStackProps {
  members: TeamMember[];
  count: string;
  countLabel?: string;
}

export default function AvatarStack({
  members,
  count,
  countLabel = "Technology experts across multiple domains",
}: AvatarStackProps) {
  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-[32px]

        border
        border-[#DCEAF6]

        bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_100%)]

        p-8

        shadow-[0_25px_60px_rgba(17,51,88,.06)]
      "
    >
      {/* Soft Glow */}

      <div
        className="
          pointer-events-none
          absolute

          right-[-6rem]
          top-[-6rem]

          h-60
          w-60

          rounded-full

          bg-[#2374B6]/6

          blur-[120px]
        "
      />

      <div className="relative z-10">
        {/* ================================================= */}
        {/* Team */}
        {/* ================================================= */}

        <div className="flex justify-center">
          {members.map((member, index) => {
            const Icon = avatarIcons[index % avatarIcons.length];

            return (
              <div
                key={member.name}
                className={`
                  group
                  relative

                  transition-all
                  duration-300

                  hover:z-20
                  hover:-translate-y-2

                  ${index !== 0 ? "-ml-4" : ""}
                `}
              >
                <div
                  className={`
                    ${bgMap[member.color]}

                    flex
                    h-[72px]
                    w-[72px]

                    items-center
                    justify-center

                    rounded-full

                    border-[5px]
                    border-white

                    shadow-[0_12px_28px_rgba(17,51,88,.18)]

                    transition-all
                    duration-300

                    group-hover:scale-105
                    group-hover:shadow-[0_18px_36px_rgba(17,51,88,.24)]
                  `}
                >
                  <Icon
                    className="
                      h-8
                      w-8

                      text-white

                      transition-transform
                      duration-300

                      group-hover:scale-110
                    "
                    strokeWidth={2.2}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ================================================= */}
        {/* Divider */}
        {/* ================================================= */}

        <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-[#2374B6]/30 to-transparent" />

        {/* ================================================= */}
        {/* Statistics */}
        {/* ================================================= */}

        <div className="mt-8 text-center">
          <h3
            className="
              text-5xl
              font-bold
              tracking-tight

              text-[#113358]
            "
          >
            {count}
          </h3>

          <p
            className="
              mt-2

              text-lg
              font-semibold

              text-[#2374B6]
            "
          >
            Technology Experts
          </p>

          <p
            className="
              mx-auto
              mt-3

              max-w-xs

              text-sm
              leading-6

              text-slate-600
            "
          >
            {countLabel}
          </p>
        </div>

        {/* ================================================= */}
        {/* Skills */}
        {/* ================================================= */}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["Frontend", "Backend", "Cloud", "AI"].map((item) => (
            <div
              key={item}
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-[#DCEAF6]

                bg-white

                px-4
                py-2

                text-sm
                font-medium

                text-slate-700

                transition-all
                duration-300

                hover:border-[#2374B6]/20
                hover:bg-[#F8FBFE]
                hover:-translate-y-0.5
              "
            >
              <CheckCircle2
                className="h-4 w-4 text-[#2374B6]"
                strokeWidth={2}
              />

              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
