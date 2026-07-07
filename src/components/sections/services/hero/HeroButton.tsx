import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const actions = [
  {
    label: "Start Your App Project",
    variant: "default" as const,
  },
  {
    label: "Talk to an Expert",
    variant: "secondary" as const,
  },
];

export default function HeroButtons() {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        gap-4

        sm:w-auto
        sm:flex-row
        sm:items-center
      "
    >
      {actions.map((action) => (
        <motion.div
          key={action.label}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        >
          <Button
            variant={action.variant}
            size="lg"
            className="
              w-full

              rounded-xl

              px-8
              py-6

              text-base
              font-semibold

              shadow-sm

              sm:w-auto
            "
          >
            {action.label}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
