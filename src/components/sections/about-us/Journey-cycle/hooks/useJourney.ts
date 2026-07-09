import { useEffect, useRef, useState } from "react";

export function useJourney(totalItems: number) {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.getAttribute("data-index"));

          setActiveIndex(index);
        });
      },
      {
        threshold: 0.55,
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [totalItems]);

  return {
    activeIndex,
    itemRefs,
  };
}
