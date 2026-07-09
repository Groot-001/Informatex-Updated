interface SectionTitleProps {
  badge?: string;
  title: string;
  description: string;
}

import SectionBadge from "./SectionBadge";

const SectionTitle = ({ badge, title, description }: SectionTitleProps) => {
  return (
    <div className="max-w-2xl">
      {badge && <SectionBadge title={badge} />}

      <h2
        className="
          mt-6
          text-4xl
          font-bold
          leading-tight
          text-[#0E2439]
          md:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-6
          text-lg
          leading-8
          text-[#546577]
        "
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
