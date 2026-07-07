interface DotGridProps {
  rows?: number;
  cols?: number;
}

export default function DotGrid({ rows = 4, cols = 9 }: DotGridProps) {
  return (
    <div
      className="mt-8 grid w-fit gap-2"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <span key={i} className="h-1 w-1 rounded-full bg-indigo-200" />
      ))}
    </div>
  );
}
