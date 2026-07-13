export default function BackgroundGlow() {
  return (
    <>
      {/* ================================================= */}
      {/* Main Center Glow */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-1/2

          h-[24rem]
          w-[24rem]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#2374B6]/8

          blur-[140px]
        "
      />

      {/* ================================================= */}
      {/* Top Right Glow */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none

          absolute

          right-10
          top-8

          h-48
          w-48

          rounded-full

          bg-[#113358]/5

          blur-[110px]
        "
      />

      {/* ================================================= */}
      {/* Bottom Left Glow */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none

          absolute

          bottom-6
          left-8

          h-44
          w-44

          rounded-full

          bg-[#67B7F7]/8

          blur-[100px]
        "
      />
    </>
  );
}
