export default function NepalMap() {
  return (
    <svg
      viewBox="0 0 900 420"
      className="
        absolute
        inset-0
        h-full
        w-full
      "
      fill="none"
    >
      {/* Glow */}

      <defs>
        <linearGradient id="nepalGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EAF4FC" />

          <stop offset="100%" stopColor="#F8FBFE" />
        </linearGradient>
      </defs>

      {/* Nepal Shape */}

      <path
        d="
        M70 210
        L120 175
        L165 190
        L220 165
        L280 175
        L340 145
        L405 165
        L475 150
        L545 165
        L615 145
        L690 170
        L760 155
        L835 185
        L785 215
        L700 230
        L620 250
        L540 245
        L465 270
        L390 255
        L315 275
        L240 260
        L175 285
        L110 255
        Z
        "
        fill="url(#nepalGradient)"
        stroke="#D7E8F6"
        strokeWidth="3"
      />
    </svg>
  );
}
