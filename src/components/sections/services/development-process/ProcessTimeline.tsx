import ProcessGrid from "./ProcessGrid";
import ProgressLine from "./ProgressLine";

export default function ProcessTimeline() {
  return (
    <div
      className="
        relative

        mt-20
        lg:mt-24
      "
    >
      {/* ================================================= */}
      {/* Timeline Progress */}
      {/* ================================================= */}

      <ProgressLine />

      {/* ================================================= */}
      {/* Process Steps */}
      {/* ================================================= */}

      <div className="relative z-10">
        <ProcessGrid />
      </div>
    </div>
  );
}
