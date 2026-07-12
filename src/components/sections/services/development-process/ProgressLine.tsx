export default function ProgressLine() {
  return (
    <div
      className="
        pointer-events-none

        absolute
        left-0
        right-0
        top-8

        hidden
        lg:block
      "
    >
      {/* Base Line */}

      <div
        className="
          relative

          h-[2px]
          w-full

          overflow-hidden

          rounded-full

          bg-[#DCEAF6]
        "
      >
        {/* Animated Progress */}

        <div
          className="
            timeline-progress

            absolute
            inset-y-0
            left-0

            origin-left
            scale-x-0

            rounded-full

            bg-gradient-to-r
            from-[#113358]
            via-[#2374B6]
            to-[#67B7F7]
          "
        />

        {/* Soft Glow */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-[#113358]/10
            via-[#2374B6]/20
            to-[#67B7F7]/10

            blur-sm
          "
        />
      </div>
    </div>
  );
}
