interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-[#D7E5F3]
        bg-white
        p-6
        text-center
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <h3
        className="
          text-4xl
          font-bold
          text-[#093254]
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-2
          text-sm
          uppercase
          tracking-widest
          text-[#546577]
        "
      >
        {label}
      </p>
    </div>
  );
};

export default StatCard;
