interface DotPatternProps {
  className?: string;
}

export default function DotPattern({ className = "" }: DotPatternProps) {
  return (
    <div
      className={`
        pointer-events-none

        absolute

        h-32
        w-32

        opacity-60

        ${className}
      `}
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(35,116,182,.22) 1.4px, transparent 1.4px)",
        backgroundSize: "14px 14px",
      }}
    />
  );
}
