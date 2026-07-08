import { SOLUTION_POINTS } from "./constants";

export default function SolutionPoints() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {SOLUTION_POINTS.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="
              flex
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#113358]/10
              "
            >
              <Icon className="h-6 w-6 text-[#113358]" />
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">{item.title}</h4>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
