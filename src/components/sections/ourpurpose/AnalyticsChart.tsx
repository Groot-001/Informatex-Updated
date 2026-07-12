export default function AnalyticsChart() {
  return (
    <div
      className="
        rounded-2xl

        border
        border-[#E7EEF6]

        bg-white

        p-4
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <p
            className="
              text-[11px]
              font-medium

              uppercase
              tracking-wide

              text-slate-500
            "
          >
            Revenue Overview
          </p>

          <h3
            className="
              mt-1

              text-xl
              font-bold
              tracking-tight

              text-[#113358]
            "
          >
            $248,650
          </h3>
        </div>

        <span
          className="
            rounded-full

            bg-emerald-50

            px-2.5
            py-1

            text-[11px]
            font-semibold

            text-emerald-600
          "
        >
          +18%
        </span>
      </div>

      {/* Chart */}

      <div className="mt-4">
        <svg
          viewBox="0 0 700 180"
          className="h-[180px] w-full"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Grid */}

          {[35, 70, 105, 140].map((y) => (
            <line key={y} x1="0" x2="700" y1={y} y2={y} stroke="#EEF4FA" />
          ))}

          {/* Area */}

          <path
            d="
              M0 150
              C40 145 70 120 110 130
              S180 165 240 120
              S340 65 410 95
              S520 160 590 90
              S660 55 700 70
              L700 180
              L0 180
              Z
            "
            fill="url(#area)"
          />

          {/* Line */}

          <path
            d="
              M0 150
              C40 145 70 120 110 130
              S180 165 240 120
              S340 65 410 95
              S520 160 590 90
              S660 55 700 70
            "
            stroke="#2374B6"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Data Points */}

          {[
            [110, 130],
            [240, 120],
            [410, 95],
            [590, 90],
            [700, 70],
          ].map(([cx, cy], index) => (
            <g key={index}>
              <circle
                cx={cx}
                cy={cy}
                r="5"
                fill="white"
                stroke="#2374B6"
                strokeWidth="2"
              />

              <circle cx={cx} cy={cy} r="2.5" fill="#2374B6" />
            </g>
          ))}

          <defs>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2374B6" stopOpacity=".22" />

              <stop offset="100%" stopColor="#2374B6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
