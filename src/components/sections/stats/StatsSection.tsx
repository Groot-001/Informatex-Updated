import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import { stats } from "./stats.data";
import StatCard from "./StatCards";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  useGSAP(() => {
    gsap.from(".stat-card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 82%",
        once: true,
      },
    });
  });

  return (
    <Section
      spacing="xl"
      className="
        stats-section
        bg-[#F8FBFE]
      "
    >
      <Container size="xl">
        {/* Section Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span
            className="
              inline-flex
              rounded-full
              bg-[#EAF3FB]
              px-4
              py-2

              text-sm
              font-semibold

              tracking-wide

              text-[#2E84D1]
            "
          >
            Our Impact
          </span>

          <h2
            className="
              mt-5

              text-3xl
              font-bold

              tracking-tight

              text-[#113358]

              lg:text-5xl
            "
          >
            Numbers that reflect our commitment.
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl

              text-lg
              leading-8

              text-slate-600
            "
          >
            Every milestone represents successful partnerships, trusted
            relationships, and technology solutions delivered with excellence.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            grid

            grid-cols-1

            gap-6

            sm:grid-cols-2

            xl:grid-cols-4
          "
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
