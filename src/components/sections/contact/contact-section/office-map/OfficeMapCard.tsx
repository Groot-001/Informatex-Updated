export default function OfficeMapCard() {
  return (
    <div
      className="
        overflow-hidden

        rounded-[32px]

        border
        border-soft

        bg-surface

        shadow-brand
      "
    >
      {/* Map */}

      <div
        className="
          flex
          h-[520px]
          items-center
          justify-center

          bg-soft
        "
      >
        Map
      </div>

      {/* Bottom Info */}

      <div
        className="
          border-t
          border-soft

          p-6
        "
      >
        Office Commitment
      </div>
    </div>
  );
}
