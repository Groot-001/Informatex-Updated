import { FaGlobeAmericas } from "react-icons/fa";

type StatCardProps = {
  value: string;
  title: string;
  icon?: "globe";
};

export default function StatCard({ value, title, icon }: StatCardProps) {
  return (
    <div
      className="
        relative
        w-55
        overflow-hidden
        rounded-xl
        border
        border-[#E8E2FF]
        bg-white
        px-5
        py-4
        shadow-[0_10px_30px_rgba(92,75,199,.08)]
      "
    >
      {icon === "globe" && (
        <FaGlobeAmericas
          className="
            absolute
            -right-6
            -top-5
            text-[90px]
            text-[#2E84D1]
          "
        />
      )}

      <h3 className="text-[34px] font-bold  text-[#2E84D1]">{value}</h3>

      <p className="mt-1 text-[18px] font-medium text-[#222]">{title}</p>
    </div>
  );
}
