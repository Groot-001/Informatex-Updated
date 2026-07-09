interface SectionTitleProps {
  badge?: string;
  title: string;
  description: string;
}

export default function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {badge && (
        <span
          className="
            inline-flex
            rounded-full
            bg-[#EDF5FD]
            px-4
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.15em]
            text-[#2374B6]
          "
        >
          {badge}
        </span>
      )}

      <h2
        className="
          mt-6
          text-4xl
          font-bold
          leading-tight
          text-[#093254]

          md:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mx-auto
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-[#546577]
        "
      >
        {description}
      </p>
    </div>
  );
}
