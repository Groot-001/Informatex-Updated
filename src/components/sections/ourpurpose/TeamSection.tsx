import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { typography } from "@/design-system/typography";

import AvatarStack from "./AvatarStack";
import SectionEyebrow from "./SectionEyeBrow";
import { expertsCount, teamMembers } from "./Team.data";

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".team-section",
        start: "top 75%",
        once: true,
      },
    });

    tl.from(".team-content > *", {
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: "power3.out",
    }).from(
      ".avatar-item",
      {
        scale: 0.7,
        opacity: 0,
        stagger: 0.08,
        duration: 0.45,
        ease: "back.out(1.7)",
      },
      "-=0.2",
    );
  });

  return (
    <section className="team-section py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="team-content lg:col-span-4">
            <SectionEyebrow>Our Team</SectionEyebrow>

            <h2 className={typography.section.title}>
              A team of <span className="text-[#4F46C8]">passionate</span>
              <br />
              problem <span className="text-[#4F46C8]">solvers.</span>
            </h2>

            <p className={typography.section.description}>
              Our strength lies in our people. Developers, designers,
              strategists and innovators building meaningful digital experiences
              together.
            </p>
          </div>

          <div className="lg:col-span-8">
            <AvatarStack members={teamMembers} count={expertsCount} />
          </div>
        </div>
      </div>
    </section>
  );
}
