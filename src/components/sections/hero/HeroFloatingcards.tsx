import { motion } from "framer-motion";

import ProfileCard from "./ProfileCard";
import StatCard from "./StatCards";

const floatingCards = [
  {
    id: "countries",
    position: "left-8 top-28 xl:left-16 2xl:left-24",
    component: <StatCard value="20+" title="Countries Served" icon="globe" />,
  },
  {
    id: "projects",
    position: "right-8 top-32 xl:right-16 2xl:right-24",
    component: <StatCard value="100+" title="Projects Delivered" />,
  },
  {
    id: "experience",
    position: "left-4 top-[58%] xl:left-12 2xl:left-20",
    component: (
      <ProfileCard
        value="7+"
        title="Years of Experience"
        image="/images/team/member-1.jpg"
      />
    ),
  },
  {
    id: "engineers",
    position: "right-4 top-[58%] xl:right-12 2xl:right-20",
    component: (
      <ProfileCard
        value="100+"
        title="IT Engineers"
        image="/images/team/member-2.jpg"
      />
    ),
  },
];

export default function HeroFloatingCards() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {floatingCards.map(({ id, position, component }, index) => (
        <motion.div
          key={id}
          className={`pointer-events-auto absolute z-20 ${position}`}
          initial={{
            opacity: 0,
            y: 24,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
            rotate: [0, index % 2 === 0 ? -1 : 1, 0],
          }}
          transition={{
            opacity: {
              duration: 0.6,
              delay: index * 0.15,
            },
            scale: {
              duration: 0.6,
              delay: index * 0.15,
            },
            y: {
              duration: 7,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: index * 0.8,
            },
            rotate: {
              duration: 9,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: index * 0.8,
            },
          }}
        >
          {/* Ambient Glow */}
          <motion.div
            className="
              absolute
              inset-0
              -z-10
              rounded-3xl
              bg-[#2B74B8]/10
              blur-3xl
            "
            animate={{
              opacity: [0.18, 0.32, 0.18],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.6,
            }}
          />

          {component}
        </motion.div>
      ))}
    </div>
  );
}
