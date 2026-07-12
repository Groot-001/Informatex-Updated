import { ArrowUpRight } from "lucide-react";

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
              group
              relative

              overflow-hidden

              rounded-[24px]

              border
              border-[#DCEAF6]

              bg-white

              p-6

              shadow-[0_15px_40px_rgba(17,51,88,.05)]

              transition-all
              duration-500

              hover:-translate-y-1
              hover:border-[#2374B6]/30
              hover:shadow-[0_25px_60px_rgba(17,51,88,.10)]
            "
          >
            {/* ================================================= */}
            {/* Background Glow */}
            {/* ================================================= */}

            <div
              className="
                pointer-events-none

                absolute

                -right-12
                -top-12

                h-36
                w-36

                rounded-full

                bg-[#2374B6]/8

                opacity-0

                blur-[80px]

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            />

            <div className="relative z-10">
              {/* Header */}

              <div className="flex items-start justify-between">
                <div
                  className="
                    flex
                    h-14
                    w-14

                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-[#DCEAF6]

                    bg-[#EDF5FC]

                    text-[#2374B6]

                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:bg-[#2374B6]
                    group-hover:text-white
                  "
                >
                  <Icon className="h-6 w-6" />
                </div>

                <ArrowUpRight
                  className="
                    h-5
                    w-5

                    text-slate-300

                    transition-all
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    group-hover:text-[#2374B6]
                  "
                />
              </div>

              {/* Title */}

              <h4
                className="
                  mt-6

                  text-lg
                  font-semibold

                  text-[#113358]

                  transition-colors

                  group-hover:text-[#2374B6]
                "
              >
                {item.title}
              </h4>

              {/* Description */}

              <p
                className="
                  mt-3

                  text-[15px]
                  leading-7

                  text-slate-600
                "
              >
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
