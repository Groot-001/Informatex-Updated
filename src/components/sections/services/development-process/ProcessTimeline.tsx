import ProgressLine from "./ProgressLine";
import ProcessGrid from "./ProcessGrid";

export default function ProcessTimeline() {
  return (
    <div className="relative mt-16">
      <ProgressLine />

      <ProcessGrid />
    </div>
  );
}
