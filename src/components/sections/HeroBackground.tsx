export default function HeroBackground() {
  return (
    <>
      {/* Left Glow */}
      <div
        className="
          absolute
          -left-40
          top-24
          h-105
          w-105
          rounded-full
          bg-[#A78BFA]/20
          blur-[120px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          -right-40
          top-32
          h-105
          w-105
          rounded-full
          bg-[#7C3AED]/20
          blur-[140px]
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-75
          w-150
          -translate-x-1/2
          rounded-full
          bg-[#DDD6FE]/40
          blur-[120px]
        "
      />
    </>
  );
}
