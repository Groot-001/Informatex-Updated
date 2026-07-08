import { PROCESS_STEPS } from "./process.data";
import ProcessCard from "./ProcessCard";
import ProcessStep from "./ProcessStep";

export default function ProcessGrid() {
  return (
    <div
      className="
        grid
        gap-8

        sm:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-5
      "
    >
      {PROCESS_STEPS.map((step) => (
        <div key={step.id} className="relative flex flex-col items-center">
          {/* Timeline Step */}
          <ProcessStep number={step.number} />

          {/* Card */}
          <ProcessCard step={step} />
        </div>
      ))}
    </div>
  );
}
