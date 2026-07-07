import FeatureItem from "./FeatureItem";
import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyeBrow";
import { whyChooseFeatures } from "./WhyChooseus.data";


export default function WhyChooseSection() {
  return (
    <section className="w-full bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <SectionEyebrow align="center">
            Why Choose Informatex Tech
          </SectionEyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            More than a vendor. Your{" "}
            <span className="text-indigo-600">growth partner.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <FeatureItem {...feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
