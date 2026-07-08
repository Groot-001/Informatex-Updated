import SectionHeading from "./SectionHeading";
import ServiceGrid from "./ServiceGrid";

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Our App Development Services" />

        <ServiceGrid />
      </div>
    </section>
  );
}
