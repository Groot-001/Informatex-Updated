import { PROCESS_STEPS } from "./process.data";
import ProcessCard from "./ProcessCard";
import ProcessStep from "./ProcessStep";
import ProgressLine from "./ProgressLine";

export default function ProcessGrid() {
  return (
    <div className="relative">
      {/* Desktop Progress Line */}

      <ProgressLine />

      <div
        className="
          relative
          z-10

          grid
          gap-10

          md:grid-cols-2
          xl:grid-cols-5
        "
      >
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.id}
            className="
              flex
              flex-col
              items-stretch
            "
          >
            {/* Step */}

            <ProcessStep number={step.number} />

            {/* Card */}

            <ProcessCard step={step} />
          </div>
        ))}
      </div>
    </div>
  );
}
