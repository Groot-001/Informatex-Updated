import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";

const icons = [
  {
    id: "react",
    position: "left-[5%] top-[42%]",
    rotation: -8,
    icon: <FaReact className="text-[32px] text-[#2E84D1]" />,
  },
  {
    id: "code",
    position: "right-[5%] top-[40%]",
    rotation: 8,
    icon: <LuCodeXml className="text-[32px] text-[#2E84D1]" />,
  },
];

export default function HeroFloatingIcons() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {icons.map(({ id, position, rotation, icon }, index) => (
        <motion.div
          key={id}
          className={`absolute z-20 ${position}`}
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
            rotate: [rotation, rotation + 2, rotation],
          }}
          transition={{
            opacity: {
              duration: 0.6,
              delay: index * 0.2,
            },
            scale: {
              duration: 0.6,
              delay: index * 0.2,
            },
            y: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.8,
            },
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.8,
            },
          }}
        >
          <FloatingIcon>{icon}</FloatingIcon>
        </motion.div>
      ))}
    </div>
  );
}

type FloatingIconProps = {
  children: React.ReactNode;
};

function FloatingIcon({ children }: FloatingIconProps) {
  return (
    <div className="relative">
      {/* Ambient Glow */}
      <div
        className="
          absolute
          inset-0
          -z-10
          rounded-3xl
          bg-[#2E84D1]/15
          blur-2xl
        "
      />

      {/* Glass Card */}
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center

          rounded-2xl

          border
          border-white/40

          bg-white/70

          backdrop-blur-xl

          shadow-[0_12px_30px_rgba(17,51,88,.08)]

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-[0_16px_35px_rgba(17,51,88,.14)]
        "
      >
        {children}
      </div>
    </div>
  );
}
