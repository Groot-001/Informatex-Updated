export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Left Ambient Glow */}
      <div
        className="
          absolute
          -left-40
          top-8
          h-[24rem]
          w-[24rem]
          rounded-full
          bg-[#093254]/8
          blur-[120px]

          sm:h-[28rem]
          sm:w-[28rem]

          lg:-left-28
          lg:h-[34rem]
          lg:w-[34rem]
          lg:blur-[160px]
        "
      />

      {/* Right Ambient Glow */}
      <div
        className="
          absolute
          -right-40
          top-16
          h-[26rem]
          w-[26rem]
          rounded-full
          bg-[#093254]/6
          blur-[130px]

          sm:h-[30rem]
          sm:w-[30rem]

          lg:-right-24
          lg:h-[38rem]
          lg:w-[38rem]
          lg:blur-[170px]
        "
      />

      {/* Bottom Soft Light */}
      <div
        className="
          absolute
          bottom-[-8rem]
          left-1/2
          h-[18rem]
          w-[32rem]
          -translate-x-1/2
          rounded-full
          bg-[#EEF5FB]
          blur-[110px]

          sm:h-[20rem]
          sm:w-[40rem]

          lg:h-[22rem]
          lg:w-[46rem]
          lg:blur-[140px]
        "
      />

      {/* Center Focus Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(9,50,84,0.06),transparent_72%)]
        "
      />

      {/* Top Highlight */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-40
          w-[20rem]
          -translate-x-1/2
          rounded-full
          bg-[#093254]/5
          blur-[90px]

          sm:h-48
          sm:w-[24rem]

          lg:h-60
          lg:w-[30rem]
          lg:blur-[120px]
        "
      />
    </div>
  );
}
