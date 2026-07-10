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
      y: 60,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 80%",
        once: true,
      },
    });
  });

  return (
    <Section
      spacing="lg"
      className="
        stats-section
        bg-[#F7F9FC]
      "
    >
      <Container size="xl">
        <div
          className="
            grid

            grid-cols-1

            gap-5

            sm:grid-cols-2

            lg:grid-cols-4

            items-stretch
          "
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
