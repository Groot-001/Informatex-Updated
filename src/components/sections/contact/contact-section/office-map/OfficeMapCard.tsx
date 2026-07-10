import OfficeCommitment from "./OfficeCommitment";
import OfficeMap from "./OfficeMap";

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
      <OfficeMap />

      <OfficeCommitment />
    </div>
  );
}
