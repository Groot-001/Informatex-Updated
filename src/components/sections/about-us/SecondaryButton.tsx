interface SecondaryButtonProps {
  title: string;
}

const SecondaryButton = ({ title }: SecondaryButtonProps) => {
  return (
    <button
      className="
        rounded-2xl
        border
        border-[#D7E5F3]
        bg-white
        px-8
        py-4
        font-medium
        text-[#093254]
        transition-all
        duration-300
        hover:border-[#2374B6]
        hover:bg-[#F7F9FC]
      "
    >
      {title}
    </button>
  );
};

export default SecondaryButton;
