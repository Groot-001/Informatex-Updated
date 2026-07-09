interface SectionBadgeProps {
  title: string;
}

const SectionBadge = ({ title }: SectionBadgeProps) => {
  return (
    <div
      className="
        inline-flex
        rounded-full
        border
        border-[#D7E5F3]
        bg-[#EDF5FD]
        px-5
        py-2
        text-sm
        font-medium
        text-[#2374B6]
      "
    >
      {title}
    </div>
  );
};

export default SectionBadge;
