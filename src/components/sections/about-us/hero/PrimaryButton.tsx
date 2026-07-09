import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  title: string;
}

const PrimaryButton = ({ title }: PrimaryButtonProps) => {
  return (
    <button
      className="
        inline-flex
        items-center
        gap-2
        rounded-2xl
        bg-[#2374B6]
        px-8
        py-4
        font-medium
        text-white
        transition-all
        duration-300
        hover:bg-[#16598F]
        hover:shadow-xl
        hover:shadow-blue-300/20
      "
    >
      {title}

      <ArrowRight size={18} />
    </button>
  );
};

export default PrimaryButton;
