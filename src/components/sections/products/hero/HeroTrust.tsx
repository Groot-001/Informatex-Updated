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
              flex
              items-center
              gap-2

              rounded-full

              border
              border-slate-200

              bg-white

              px-4
              py-2

              text-sm
              font-medium

              text-slate-700
            "
          >
            <Icon className="h-4 w-4 text-[#113358]" />

            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
