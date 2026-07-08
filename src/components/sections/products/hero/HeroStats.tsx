import { HERO_STATS } from "./constants";

export default function HeroStats() {
  return (
    <div className="border-t border-slate-200 bg-slate-50">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-2
          gap-8
          px-6
          py-10
          md:grid-cols-4
          lg:px-8
        "
      >
        {HERO_STATS.map((item) => (
          <div key={item.label} className="text-center">
            <h3 className="text-4xl font-bold text-[#113358]">{item.value}</h3>

            <p className="mt-2 text-sm text-slate-600">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
