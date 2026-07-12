import { Button } from "@/components/ui/button";

interface SecondaryButtonProps {
  title: string;
}

export default function SecondaryButton({ title }: SecondaryButtonProps) {
  return (
    <Button
      variant="outline"
      className="
        h-12

        rounded-full

        border-[#DCEAF6]

        bg-white

        px-7

        text-sm
        font-semibold

        text-[#113358]

        shadow-sm

        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:border-[#2374B6]
        hover:bg-[#F8FBFE]
        hover:text-[#2374B6]
        hover:shadow-[0_12px_30px_rgba(17,51,88,.08)]
      "
    >
      {title}
    </Button>
  );
}
