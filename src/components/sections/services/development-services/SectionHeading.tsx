import { motion } from "framer-motion";

type Props = {
  title: string;
};

export default function SectionHeading({ title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-14 text-center"
    >
      <h2
        className="
        text-3xl
        font-bold
        text-slate-900

        md:text-4xl
      "
      >
        {title}
      </h2>

      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-violet-600" />
    </motion.div>
  );
}
