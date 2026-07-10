import NepalMap from "./NepalMap";
// import OfficeConnection from "./OfficeConnection";
import OfficeMarker from "./OfficeMarker";

import { offices } from "./OfficeMap.data";
import OfficeCommitment from "./OfficeCommitment";

export default function OfficeMap() {
  return (
    <div
      className="
        relative

        h-[520px]

        overflow-hidden

        bg-soft
      "
    >
      {/* ================= Background ================= */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br

          from-background
          via-soft
          to-background
        "
      />

      {/* Glow */}

      <div
        className="
          absolute

          left-1/2
          top-1/2

          h-[420px]
          w-[420px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-secondary/10

          blur-[120px]
        "
      />

      {/* Nepal */}

      <NepalMap />

      {/* Connection */}

      {/* <OfficeConnection /> */}
      <OfficeCommitment />

      {/* Offices */}

      {offices.map((office) => (
        <OfficeMarker key={office.id} office={office} />
      ))}
    </div>
  );
}
