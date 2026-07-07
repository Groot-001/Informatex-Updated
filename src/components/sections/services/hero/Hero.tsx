import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";



export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="relative overflow-hidden py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="
            grid
            items-center
            gap-14

            lg:grid-cols-2
            xl:gap-16
          "
        >
          <HeroContent />

          <HeroImage />
        </div>
      </div>
    </motion.section>
  );
}
