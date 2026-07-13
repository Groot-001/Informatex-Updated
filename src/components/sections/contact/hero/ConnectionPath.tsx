import { forwardRef } from "react";

const ConnectionPath = forwardRef<SVGSVGElement>(
  function ConnectionPath(_, ref) {
    return (
      <svg
        ref={ref}
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 360"
        fill="none"
      >
        <circle cx="185" cy="90" r="4" fill="red" />
        <circle cx="320" cy="245" r="4" fill="blue" />

        {/* Email → Location */}

        <path
          d="
    M180 90

    C250 95,
      260 150,
      260 185

    C260 230,
      215 260,
      235 295

    C250 320,
      290 305,
      320 250
  "
          fill="none"
          stroke="#DCEAF6"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />

        {/* Location → Phone */}

        <path
          d="
    M300 245
    C360 210,
      365 130,
      425 125

    C455 125,
      455 180,
      440 245

    C430 290,
      470 300,
      505 240
  "
          fill="none"
          stroke="#DCEAF6"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />

        {/* Phone → Location */}

        <path
          d="
    M445 120

    C410 145,
      360 175,
      320 215

    C295 235,
      275 225,
      250 215
  "
          fill="none"
          stroke="#DCEAF6"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default ConnectionPath;
