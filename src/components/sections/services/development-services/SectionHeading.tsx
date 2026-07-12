import { motion } from "framer-motion";
import type { ReactNode } from "react";
import SectionEyebrow from "../../ourpurpose/SectionEyeBrow";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`
        mx-auto
        mb-20
        max-w-3xl
        text-center
        ${className ?? ""}
      `}
    >
      {/* ================================================= */}
      {/* Eyebrow */}
      {/* ================================================= */}

      {eyebrow && <SectionEyebrow align="center">{eyebrow}</SectionEyebrow>}

      {/* ================================================= */}
      {/* Heading */}
      {/* ================================================= */}

      <h2
        className="
          mt-5

          text-4xl
          font-bold
          leading-tight
          tracking-tight

          text-[#113358]

          md:text-5xl
        "
      >
        {title}
      </h2>

      {/* ================================================= */}
      {/* Description */}
      {/* ================================================= */}

      {description && (
        <div
          className="
            mx-auto
            mt-6

            max-w-2xl

            text-lg
            leading-8

            text-slate-600
          "
        >
          {description}
        </div>
      )}

      {/* ================================================= */}
      {/* Divider */}
      {/* ================================================= */}

      <div
        className="
          mx-auto
          mt-10

          h-[3px]
          w-24

          rounded-full

          bg-gradient-to-r
          from-transparent
          via-[#2374B6]
          to-transparent
        "
      />
    </motion.div>
  );
}
