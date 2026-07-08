import SectionHeading from "../development-services/SectionHeading";
import WhyChooseGrid from "./WhyChooseGrid";

export default function WhyBusinessChooseSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Why Businesses Choose Our App Development" />

        <WhyChooseGrid />
      </div>
    </section>
  );
}
