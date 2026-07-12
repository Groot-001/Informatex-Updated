import { motion } from "framer-motion";

import { SERVICES } from "./services.data";
import ServiceCard from "./ServiceCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ServiceGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className="
        grid
        gap-8

        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {SERVICES.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </motion.div>
  );
}
