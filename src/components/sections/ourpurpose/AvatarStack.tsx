import { Users } from "lucide-react";
import type { AccentColor, TeamMember } from ".";

const bgMap: Record<AccentColor, string> = {
  purple: "bg-violet-500",
  pink: "bg-rose-500",
  green: "bg-emerald-500",
  orange: "bg-orange-500",
  blue: "bg-blue-500",
  teal: "bg-teal-500",
  indigo: "bg-indigo-500",
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
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex -space-x-3">
        {members.map((member) => (
          <span
            key={member.name}
            title={member.name}
            className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-xs font-semibold text-white transition-transform duration-200 hover:z-10 hover:scale-110 ${bgMap[member.color]}`}
          >
            {member.initials}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5">
        <Users className="h-5 w-5 text-indigo-600" strokeWidth={2} />
        <p className="text-sm font-semibold leading-tight text-slate-900">
          {count}
          <span className="block text-xs font-normal text-slate-500">
            {countLabel}
          </span>
        </p>
      </div>
    </div>
  );
}
