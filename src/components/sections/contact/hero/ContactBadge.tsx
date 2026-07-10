import { MessageCircleMore } from "lucide-react";

export default function ContactBadge() {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-[#D6E7F6]
        bg-white
        px-5
        py-2
      "
    >
      <MessageCircleMore className="h-4 w-4 text-[#216FAE]" />

      <span
        className="
          text-sm
          font-semibold
          text-[#216FAE]
        "
      >
        CONTACT WITH US
      </span>
    </div>
  );
}
