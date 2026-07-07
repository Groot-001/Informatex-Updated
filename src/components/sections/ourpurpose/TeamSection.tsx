import AvatarStack from "./AvatarStack";
import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyeBrow";
import { expertsCount, teamMembers } from "./Team.data";

export default function TeamSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionEyebrow>Our Team</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            A team of <span className="text-indigo-600">passionate</span>{" "}
            problem <span className="text-indigo-600">solvers</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-500">
            Our strength lies in our people. Developers, designers, strategists,
            and thinkers working together to turn ideas into impactful digital
            solutions.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-8">
          <AvatarStack members={teamMembers} count={expertsCount} />
        </Reveal>
      </div>
    </section>
  );
}
