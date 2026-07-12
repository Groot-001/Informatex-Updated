const monthlyData = [42, 68, 54, 88, 72, 96, 84];

export default function SalesOverview() {
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

      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">Sales Overview</p>

          <h3
            className="
              mt-1

              text-3xl
              font-bold

              text-[#113358]
            "
          >
            $124,820
          </h3>

          <p
            className="
              mt-2

              text-sm

              font-medium

              text-emerald-600
            "
          >
            ↑ 18.4% from last month
          </p>
        </div>

        <div
          className="
            rounded-xl

            bg-[#EDF5FC]

            px-3
            py-2

            text-sm
            font-semibold

            text-[#2374B6]
          "
        >
          Monthly
        </div>
      </div>

      {/* Chart */}

      <div
        className="
          mt-10

          flex

          h-52

          items-end
          justify-between

          gap-3
        "
      >
        {monthlyData.map((value, index) => (
          <div
            key={index}
            className="
              flex
              flex-1
              flex-col
              items-center
            "
          >
            <div
              className="
                w-full

                rounded-t-xl

                bg-gradient-to-t
                from-[#2374B6]
                to-[#67B7F7]

                transition-all
                duration-500

                hover:scale-y-105
              "
              style={{
                height: `${value}%`,
              }}
            />

            <span
              className="
                mt-3

                text-xs

                text-slate-400
              "
            >
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
