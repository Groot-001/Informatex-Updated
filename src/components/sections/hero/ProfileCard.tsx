type ProfileCardProps = {
  value: string;
  title?: string;
  image: string;
};

export default function ProfileCard({ value, title, image }: ProfileCardProps) {
  return (
    <div
      className="
        w-52.5
        rounded-xl
        border
        border-[#E8E2FF]
        bg-white
        p-3
        shadow-[0_10px_30px_rgba(92,75,199,.08)]
      "
    >
      <p className="mb-2 text-sm font-semibold  text-[#2E84D1]">
        {value} {title}
      </p>

      <img
        src={image}
        alt={title}
        className="
          h-24
          w-full
          rounded-lg
          object-cover
        "
      />
    </div>
  );
}
