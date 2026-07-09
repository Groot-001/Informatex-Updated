export default function HeroBackground() {
  return (
    <>
      {/* Left Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-16
          h-[34rem]
          w-[34rem]
          rounded-full
          bg-[#DDD0FB]/60
          blur-[150px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-44
          top-20
          h-[36rem]
          w-[36rem]
          rounded-full
          bg-[#E4DAFC]/70
          blur-[170px]
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-8rem]
          left-1/2
          h-[18rem]
          w-[42rem]
          -translate-x-1/2
          rounded-full
          bg-[#F4F0FF]
          blur-[130px]
        "
      />

      {/* Center Focus */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(221,208,251,0.28),transparent_70%)]
        "
      />
    </>
  );
}
