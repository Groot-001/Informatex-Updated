import SectionHeading from "../development-services/SectionHeading";
import ProcessTimeline from "./ProcessTimeline";

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Our App Development Process" />

        <ProcessTimeline />
      </div>
    </section>
  );
}
