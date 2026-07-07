import { motion } from "framer-motion";

import dashboardImage from "@/assets/Laptop.png";
import phoneImage from "@/assets/mobile.png";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: 0.25,
      }}
      className="
        relative
        mx-auto
        flex
        w-full
        max-w-
        items-center
        justify-center
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          -z-10
          rounded-full
          bg-violet-200/40
          blur-[120px]
        "
      />

      {/* Dashboard */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-[32px]
          bg-white
          shadow-[0_40px_80px_rgba(15,23,42,.12)]
        "
      >
        <img
          src={dashboardImage}
          alt="Application Dashboard"
          className="
            h-auto
            w-full
            object-cover
            select-none
          "
          draggable={false}
        />

        {/* Phone */}
        <div
          className="
            absolute
            -bottom-6
            -left-6

            hidden

            w-48

            lg:block
          "
        >
          <img
            src={phoneImage}
            alt="Mobile Application"
            className="
              h-auto
              w-full
              drop-shadow-2xl
              select-none
            "
            draggable={false}
          />
        </div>
      </div>

      {/* Decorative Dots */}
      <div
        className="
          absolute
          -right-8
          top-10
          -z-20

          hidden
          h-44
          w-44

          rounded-full
          border
          border-dashed
          border-violet-300

          lg:block
        "
      />
    </motion.div>
  );
}
