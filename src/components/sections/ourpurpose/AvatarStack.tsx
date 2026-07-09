import { Users } from "lucide-react";
import type { AccentColor, TeamMember } from ".";

const bgMap: Record<AccentColor, string> = {
  purple: "bg-violet-500",
  pink: "bg-rose-500",
  green: "bg-emerald-500",
  orange: "bg-orange-500",
  blue: "bg-blue-500",
  teal: "bg-teal-500",
  indigo: "bg-[#4F46C8]",
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
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      {/* Avatars */}

      <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
        {members.map((member) => (
          <div key={member.name} className="avatar-item group">
            <div
              className={`
                ${bgMap[member.color]}
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border-4
                border-white
                text-sm
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                group-hover:-translate-y-2
                group-hover:scale-110
                group-hover:shadow-[0_20px_40px_rgba(79,70,200,.18)]
              `}
            >
              {member.initials}
            </div>
          </div>
        ))}
      </div>

      {/* Counter */}

      <div
        className="
          mx-auto
          flex
          items-center
          gap-4
          rounded-2xl
          border
          border-[#E8E7F3]
          bg-white
          px-6
          py-5
          shadow-[0_10px_35px_rgba(79,70,200,.08)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_18px_45px_rgba(79,70,200,.12)]

          lg:mx-0
        "
      >
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-[#F4F0FF]
          "
        >
          <Users className="h-7 w-7 text-[#4F46C8]" strokeWidth={2} />
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#4F46C8]">{count}</h3>

          <p className="text-sm text-slate-500">{countLabel}</p>
        </div>
      </div>
    </div>
  );
}
