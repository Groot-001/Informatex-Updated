export default function HeroIllustration() {
  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-[#E8E2FF]
          bg-white
          p-4
          shadow-[0_20px_60px_rgba(92,75,199,.12)]
        "
      >
        <img
          src="/images/hero-dashboard.png"
          alt="Dashboard Preview"
          className="
            w-full
            max-w-162.5
            rounded-2xl
            object-cover
          "
        />
      </div>
    </div>
  );
}
