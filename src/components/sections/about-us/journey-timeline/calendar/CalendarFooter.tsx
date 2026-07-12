interface CalendarFooterProps {
  title: string;
  isFooterSwapping: boolean;
}

export default function CalendarFooter({
  title,
  isFooterSwapping,
}: CalendarFooterProps) {
  return (
    <div
      className={`
        border-t
        border-[#EEF4FA]

        bg-[#FAFCFE]

        px-6
        py-6

        transition-all
        duration-300

        ${
          isFooterSwapping
            ? "translate-y-2 opacity-0"
            : "translate-y-0 opacity-100"
        }
      `}
    >
      <div
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.18em]

          text-[#2374B6]
        "
      >
        Current Milestone
      </div>

      <h4
        className="
          mt-3

          text-lg
          font-bold
          leading-snug

          text-[#113358]
        "
      >
        {title}
      </h4>

      <p
        className="
          mt-2

          text-sm
          leading-6

          text-slate-500
        "
      >
        Follow our journey through every milestone and achievement that shaped
        Informatex Tech.
      </p>
    </div>
  );
}
