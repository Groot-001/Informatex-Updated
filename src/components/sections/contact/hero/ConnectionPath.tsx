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
        {/* Email → Location */}

        <path
          d="
    M170 80
    C250 15,
      220 180,
      300 245

    C355 290,
      355 155,
      445 115
  "
          stroke="rgb(214 225 236)"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Location → Phone */}

        <path
          d="
          M305 240
          C355 210,
          410 180,
          445 120
        "
          stroke="rgb(214 225 236)"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />

        {/* Email → Phone */}

        <path
          d="
          M180 85
          C255 20,
          385 35,
          455 105
        "
          stroke="rgb(225 233 242)"
          strokeWidth="2"
          strokeDasharray="6 10"
          strokeLinecap="round"
          opacity="0.65"
        />
      </svg>
    );
  },
);

export default ConnectionPath;
