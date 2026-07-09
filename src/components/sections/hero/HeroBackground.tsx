export default function HeroBackground() {
  return (
    <>
      {/* Left Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-52
          top-10
          h-[34rem]
          w-[34rem]
          rounded-full
          bg-[#093254]/8
          blur-[170px]

          md:-left-44
          lg:-left-32
        "
      />

      {/* Right Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-52
          top-16
          h-[38rem]
          w-[38rem]
          rounded-full
          bg-[#2374B6]/12
          blur-[180px]

          md:-right-40
          lg:-right-24
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-10rem]
          left-1/2
          h-[22rem]
          w-[44rem]
          -translate-x-1/2
          rounded-full
          bg-[#EEF4FA]
          blur-[140px]
        "
      />

      {/* Center Focus */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(35,116,182,0.08),transparent_72%)]
        "
      />

      {/* Top Highlight */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-60
          w-[28rem]
          -translate-x-1/2
          rounded-full
          bg-[#2374B6]/6
          blur-[120px]
        "
      />
    </>
  );
}
