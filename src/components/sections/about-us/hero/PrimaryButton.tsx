import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface PrimaryButtonProps {
  title: string;
}

export default function PrimaryButton({ title }: PrimaryButtonProps) {
  return (
    <Button
      className="
        group

        h-12

        rounded-full

       bg-[#2374B6]

        px-7

        text-sm
        font-semibold
        text-white

        shadow-[0_10px_30px_rgba(17,51,88,.12)]

        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:bg-[#16598F]
        hover:shadow-[0_16px_40px_rgba(17,51,88,.18)]
      "
    >
      {title}

      <ArrowRight
        className="
          ml-2

          h-4
          w-4

          transition-transform
          duration-300

          group-hover:translate-x-1
        "
      />
    </Button>
  );
}
