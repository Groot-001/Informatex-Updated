import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <section className="stats-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
