export default function BackgroundGlow() {
  return (
    <>
      {/* Center Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[360px]
          w-[360px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-secondary/10

          blur-[130px]
        "
      />

      {/* Top Right */}

      <div
        className="
          absolute
          top-10
          right-10

          h-40
          w-40

          rounded-full

          bg-brand/5

          blur-3xl
        "
      />
    </>
  );
}
