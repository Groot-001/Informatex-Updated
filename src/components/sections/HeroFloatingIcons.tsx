import { FaReact } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";

export default function HeroFloatingIcons() {
  return (
    <>
      {/* React Icon */}
      <div className="absolute left-[6%] top-[38%]">
        <FloatingIcon>
          <FaReact className="text-[32px] text-[#5C4BC7]" />
        </FloatingIcon>
      </div>

      {/* Code Icon */}
      <div className="absolute right-[7%] top-[34%]">
        <FloatingIcon>
          <LuCodeXml className="text-[32px] text-[#5C4BC7]" />
        </FloatingIcon>
      </div>
    </>
  );
}

type FloatingIconProps = {
  children: React.ReactNode;
};

function FloatingIcon({ children }: FloatingIconProps) {
  return (
    <div
      className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-xl
        border
        border-[#E8E2FF]
        bg-[#F6F3FF]
        shadow-[0_12px_30px_rgba(92,75,199,.08)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:rotate-6
      "
    >
      {children}
    </div>
  );
}
