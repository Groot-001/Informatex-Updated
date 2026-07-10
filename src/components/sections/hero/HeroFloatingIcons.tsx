import { FaReact } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";

export default function HeroFloatingIcons() {
  return (
    <div className="hidden lg:block">
      {/* React */}
      <div
        className="
          absolute
          left-[4%]
          top-[42%]
          z-20
          -rotate-6
        "
      >
        <FloatingIcon>
          <FaReact className="text-[34px] text-primary" />
        </FloatingIcon>
      </div>

      {/* Code */}
      <div
        className="
          absolute
          right-[5%]
          top-[40%]
          z-20
          rotate-6
        "
      >
        <FloatingIcon>
          <LuCodeXml className="text-[34px] text-primary" />
        </FloatingIcon>
      </div>
    </div>
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
        h-18
        w-18
        items-center
        justify-center
        rounded-2xl
        border
        border-[#E8E7F3]
        bg-[#DAD2FF]
        shadow-[0_10px_35px_rgba(79,70,200,0.08)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1.5
        hover:scale-105
      "
    >
      {children}
    </div>
  );
}
