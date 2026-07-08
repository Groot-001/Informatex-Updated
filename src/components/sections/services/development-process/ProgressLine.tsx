export default function ProgressLine() {
  return (
    <div
      className="
        absolute
        left-0
        right-0
        top-7
        hidden
        lg:block
      "
    >
      {/* Background */}

      <div
        className="
          h-0.5
          w-full
          bg-violet-200
        "
      />

      {/* Animated Progress */}

      <div
        className="
          timeline-progress

          absolute
          left-0
          top-0

          h-0.5
          w-full

          origin-left
          scale-x-0

          bg-violet-600
        "
      />
    </div>
  );
}
