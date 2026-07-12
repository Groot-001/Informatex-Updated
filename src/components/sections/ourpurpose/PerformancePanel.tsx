const performance = [
  {
    label: "System Health",
    value: 99,
    color: "bg-emerald-500",
  },
  {
    label: "API Response",
    value: 94,
    color: "bg-[#2374B6]",
  },
  {
    label: "Server Load",
    value: 71,
    color: "bg-amber-500",
  },
  {
    label: "Security Score",
    value: 98,
    color: "bg-violet-500",
  },
];

export default function PerformancePanel() {
  return (
    <div
      className="
        rounded-3xl

        border
        border-[#E7EEF6]

        bg-white

        p-6
      "
    >
      {/* Header */}

      <div>
        <p className="text-sm text-slate-500">Performance</p>

        <h3
          className="
            mt-1

            text-xl
            font-semibold

            text-[#113358]
          "
        >
          Platform Status
        </h3>
      </div>

      {/* Progress */}

      <div className="mt-8 space-y-6">
        {performance.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between">
              <span
                className="
                  text-sm
                  font-medium

                  text-slate-600
                "
              >
                {item.label}
              </span>

              <span
                className="
                  text-sm
                  font-semibold

                  text-[#113358]
                "
              >
                {item.value}%
              </span>
            </div>

            <div
              className="
                h-2.5

                overflow-hidden

                rounded-full

                bg-[#EDF4FA]
              "
            >
              <div
                className={`
                  ${item.color}

                  h-full

                  rounded-full

                  transition-all
                  duration-1000
                `}
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}

      <div
        className="
          mt-8

          rounded-2xl

          border
          border-[#E7EEF6]

          bg-[#F8FBFE]

          p-4
        "
      >
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">Overall Status</span>

          <span
            className="
              rounded-full

              bg-emerald-100

              px-3
              py-1

              text-xs
              font-semibold

              text-emerald-700
            "
          >
            Operational
          </span>
        </div>
      </div>
    </div>
  );
}
