import { valueCards } from "./About.data";
import DotGrid from "./Dotgrid";
import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyeBrow";
import ValueCard from "./ValueCard";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <SectionEyebrow>Our Purpose</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Technology with purpose.{" "}
            <span className="text-indigo-600">Impact that lasts.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-500">
            We empower organizations with innovative technology solutions that
            drive growth, efficiency, and meaningful impact. Guided by our
            values and delivered by our people, we build partnerships that last.
          </p>
          <DotGrid />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-8">
          {valueCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <ValueCard {...card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
