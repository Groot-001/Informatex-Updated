import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Milestone {
  year: number;
  month: string;
  day: number;
  title: string;
  body: string;
}

interface CalendarState {
  activeIndex: number;
  isFlipping: boolean;
  isFooterSwapping: boolean;
  previousMonth: string;
  previousYear: number;
  previousGrid: number[];
  previousMarkedDay: number;
  previousLeadBlanks: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const MILESTONES: Milestone[] = [
  {
    year: 2018,
    month: "January",
    day: 8,
    title: "Founded in Kathmandu",
    body: "A team of 5 engineers and designers launched Informatex Tech with a singular mission: to build world-class digital products from South Asia for the world.",
  },
  {
    year: 2019,
    month: "May",
    day: 13,
    title: "First Enterprise Client",
    body: "Secured our first Fortune 500 partnership, delivering a cloud-native SaaS platform that served 300,000 users at launch.",
  },
  {
    year: 2020,
    month: "September",
    day: 18,
    title: "Expanded to London & Singapore",
    body: "Opened regional offices to serve European and Southeast Asian markets, growing the team to 45 professionals.",
  },
  {
    year: 2021,
    month: "February",
    day: 23,
    title: "Launched Trustly VPN",
    body: "Released our first proprietary cybersecurity product, reaching 100,000 enterprise users within 8 months of launch.",
  },
  {
    year: 2022,
    month: "June",
    day: 28,
    title: "Series A — $12M Raised",
    body: "Closed our Series A funding round, enabling rapid expansion into AI-powered product development and data engineering.",
  },
  {
    year: 2023,
    month: "October",
    day: 6,
    title: "Sajilo Renew Launch",
    body: "Launched our AI energy optimization platform, reducing industrial energy costs by 35% for clients across 12 countries.",
  },
  {
    year: 2024,
    month: "March",
    day: 11,
    title: "150+ Projects Delivered",
    body: "Surpassed the milestone of 150 enterprise projects delivered, with a 98% client retention rate and offices on 3 continents.",
  },
];

const DAYS_OF_WEEK = ["S", "M", "T", "W", "T", "F", "S"] as const;
const DOTS_PER_CONNECTOR = 5;

// ─── Utility Hooks ────────────────────────────────────────────────────────────
function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mql.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}

// ─── Calendar Grid Helpers ────────────────────────────────────────────────────
function getGridData(index: number): {
  days: number[];
  markedDay: number;
  leadBlanks: number;
} {
  const markedDay = ((index * 5) % 27) + 3;
  const leadBlanks = (index * 2) % 7;
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  return { days, markedDay, leadBlanks };
}

// ─── Sub-Components ───────────────────────────────────────────────────────────

/** Calendar day grid */
const CalendarGrid: React.FC<{
  days: number[];
  markedDay: number;
  leadBlanks: number;
}> = React.memo(({ days, markedDay, leadBlanks }) => (
  <div className="grid grid-cols-7 gap-[5px]">
    {DAYS_OF_WEEK.map((d, i) => (
      <div
        key={`dow-${i}`}
        className="text-center font-[Geist,sans-serif] text-[9.5px] text-[var(--on-surface-variant)] opacity-40 mb-[3px]"
      >
        {d}
      </div>
    ))}
    {Array.from({ length: leadBlanks }).map((_, i) => (
      <div key={`blank-${i}`} className="h-[21px]" />
    ))}
    {days.map((d) => (
      <div
        key={d}
        className={`font-[Geist,sans-serif] text-[11px] text-center h-[21px] leading-[21px] rounded-[6px] ${
          d === markedDay
            ? "bg-[rgba(192,193,255,0.16)] text-[var(--primary)] opacity-100 font-bold shadow-[inset_0_0_0_1px_rgba(192,193,255,0.4)]"
            : "text-[var(--on-surface-variant)] opacity-[0.35]"
        }`}
      >
        {d}
      </div>
    ))}
  </div>
));
CalendarGrid.displayName = "CalendarGrid";

/** Entire desk calendar widget */
const DeskCalendar: React.FC<{
  calendarState: CalendarState;
  milestones: Milestone[];
}> = React.memo(({ calendarState, milestones }) => {
  const {
    activeIndex,
    isFlipping,
    isFooterSwapping,
    previousMonth,
    previousYear,
    previousGrid: _prevGrid,
    previousMarkedDay,
    previousLeadBlanks,
  } = calendarState;

  const current = milestones[activeIndex];
  const { days, markedDay, leadBlanks } = getGridData(activeIndex);
  const previousDays = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="w-[252px] max-[480px]:w-[216px]">
      <div
        className={`relative rounded-[22px] overflow-hidden border border-[var(--border-glass)] backdrop-blur-[18px] transition-[box-shadow,border-color] duration-500 ease-out ${
          isFlipping
            ? "shadow-[0_32px_84px_-18px_rgba(192,193,255,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] border-[rgba(192,193,255,0.3)]"
            : "shadow-[0_32px_70px_-28px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.06)]"
        }`}
        style={{
          background:
            "linear-gradient(165deg, rgba(255,255,255,0.055), rgba(255,255,255,0.012) 55%)",
        }}
      >
        {/* Accent bar */}
        <div
          className="h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, var(--primary), var(--secondary))",
          }}
        />

        {/* Brand row */}
        <div className="flex items-center justify-between px-5 pt-4">
          <div className="flex items-center gap-[7px] font-[Geist,sans-serif] text-[10px] font-semibold tracking-[0.16em] uppercase text-[var(--on-surface-variant)] opacity-75">
            <span
              className="w-[14px] h-[14px] rounded flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary), var(--secondary))",
              }}
            />
            Informatex
          </div>
          <span className="inline-flex items-center gap-[6px] px-[10px] py-1 rounded-full bg-[rgba(192,193,255,0.12)] border border-[rgba(192,193,255,0.24)] font-[Geist,sans-serif] text-[10px] font-semibold tracking-[0.06em] text-[var(--primary)]">
            <span className="w-[5px] h-[5px] rounded-full bg-[var(--primary)] shadow-[0_0_8px_rgba(192,193,255,0.75)]" />
            {String(activeIndex + 1).padStart(2, "0")} / {milestones.length}
          </span>
        </div>

        {/* Hairline */}
        <div
          className="mx-5 mt-[14px] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--border-glass) 20%, var(--border-glass) 80%, transparent)",
          }}
        />

        {/* Calendar stage with flip */}
        <div className="relative" style={{ perspective: "1300px" }}>
          {/* Base layer (new content) */}
          <div className="px-6 pt-[18px] pb-1">
            <div className="text-center font-[Geist,sans-serif] text-[13px] font-semibold tracking-[0.22em] uppercase text-[var(--secondary)] opacity-85">
              {current.month}
            </div>
            <div className="font-['Space_Grotesk',sans-serif] text-[92px] max-[480px]:text-[68px] font-bold text-[var(--primary)] text-center leading-none my-[6px] mb-4 tracking-tight">
              {current.year}
            </div>
            <CalendarGrid
              days={days}
              markedDay={markedDay}
              leadBlanks={leadBlanks}
            />
          </div>

          {/* Overlay layer (old content, flips away) */}
          <div
            className={`absolute inset-0 px-6 pt-[18px] pb-1 origin-top transition-transform duration-[720ms] z-[3] ${
              isFlipping ? "cal-overlay-flip" : ""
            }`}
            style={{
              backfaceVisibility: "hidden",
              background:
                "linear-gradient(165deg, rgba(255,255,255,0.055), rgba(255,255,255,0.012) 55%), var(--surface-container-low)",
              transform: isFlipping ? "rotateX(-180deg)" : "rotateX(0deg)",
              transitionTimingFunction: "cubic-bezier(.6,0.02,.28,1)",
              boxShadow: isFlipping
                ? "0 30px 46px -12px rgba(0,0,0,0.55)"
                : "none",
            }}
          >
            {isFlipping && (
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-[350ms]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.1), transparent 45%)",
                  opacity: isFlipping ? 1 : 0,
                }}
              />
            )}
            <div className="text-center font-[Geist,sans-serif] text-[13px] font-semibold tracking-[0.22em] uppercase text-[var(--secondary)] opacity-85">
              {previousMonth}
            </div>
            <div className="font-['Space_Grotesk',sans-serif] text-[92px] max-[480px]:text-[68px] font-bold text-[var(--primary)] text-center leading-none my-[6px] mb-4 tracking-tight">
              {previousYear}
            </div>
            <CalendarGrid
              days={previousDays}
              markedDay={previousMarkedDay}
              leadBlanks={previousLeadBlanks}
            />
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-[6px] font-[Geist,sans-serif] text-[9.5px] tracking-[0.05em] text-[var(--on-surface-variant)] opacity-50 py-[10px] pb-4">
          <span className="w-[6px] h-[6px] rounded-full bg-[var(--primary)] shadow-[0_0_6px_rgba(192,193,255,0.65)]" />
          Milestone recorded
        </div>

        {/* Footer */}
        <div
          className={`px-5 py-[14px] pb-5 border-t border-[var(--border-glass)] font-['Plus_Jakarta_Sans',sans-serif] text-[12.5px] leading-[1.4] text-[var(--on-surface)] text-center min-h-[2.6em] transition-opacity duration-[280ms] ${
            isFooterSwapping ? "opacity-0" : "opacity-85"
          }`}
        >
          {current.title}
        </div>
      </div>
    </div>
  );
});
DeskCalendar.displayName = "DeskCalendar";

/** Single timeline entry row */
const TimelineEntry: React.FC<{
  milestone: Milestone;
  index: number;
  focus: number;
  state: "idle" | "passed" | "active";
  reduceMotion: boolean;
}> = React.memo(({ milestone, index: _index, focus, state, reduceMotion }) => {
  const isActive = state === "active";
  const isPassed = state === "passed";

  const nodeClasses = [
    "w-5 h-5 rounded-full flex-shrink-0 relative transition-all duration-[400ms]",
    isPassed
      ? "bg-[rgba(192,193,255,0.12)] border-2 border-[var(--primary)]"
      : isActive
        ? "bg-[var(--primary)] border-2 border-[var(--primary)] shadow-[0_0_0_6px_rgba(192,193,255,0.18)]"
        : "bg-[var(--surface-container-low)] border-2 border-[var(--border-glass)]",
  ].join(" ");

  const leaderClasses = [
    "w-16 max-[480px]:w-7 h-[2px] flex-shrink-0 origin-left transition-all duration-[400ms]",
    isPassed
      ? "bg-[var(--primary)] opacity-50"
      : isActive
        ? "bg-[var(--primary)] opacity-100 scale-x-[1.06] shadow-[0_0_8px_rgba(192,193,255,0.4)]"
        : "bg-[var(--border-glass)]",
  ].join(" ");

  return (
    <div className="flex items-center gap-0">
      {/* Year label */}
      <div
        className="w-[172px] max-[480px]:w-24 flex-shrink-0 text-right pr-[6px] max-[480px]:pr-1 font-['Space_Grotesk',sans-serif] font-bold leading-none whitespace-nowrap transition-all duration-[400ms]"
        style={{
          fontSize: `${50 + focus * 14}px`,
          color:
            isPassed || isActive
              ? "var(--primary)"
              : "var(--on-surface-variant)",
          opacity: 0.28 + focus * 0.72,
        }}
      >
        {milestone.year}
      </div>

      {/* Leader line */}
      <div className={leaderClasses} />

      {/* Node */}
      <div className="w-[74px] max-[480px]:w-[50px] flex-shrink-0 flex justify-center">
        <div className={nodeClasses}>
          {isActive && !reduceMotion && (
            <span className="absolute -inset-2 rounded-full border-[1.5px] border-[var(--primary)] animate-[nodeRing_1.8s_ease-out_infinite]" />
          )}
        </div>
      </div>

      {/* Card */}
      <div
        className={`flex-1 rounded-[1.4rem] p-[2.1rem_2.3rem] ml-[1.15rem] backdrop-blur-[16px] border transition-[border-color,box-shadow] duration-[400ms] ${
          isActive
            ? "border-[rgba(192,193,255,0.42)] shadow-[0_16px_46px_-18px_rgba(192,193,255,0.38),inset_0_0_0_1px_rgba(192,193,255,0.14)]"
            : "border-[var(--border-glass)]"
        }`}
        style={{
          background: "rgba(255,255,255,0.03)",
          opacity: 0.4 + focus * 0.6,
          transform: `translateY(${(1 - focus) * 10}px) scale(${0.985 + focus * 0.015})`,
        }}
      >
        <h4 className="font-['Space_Grotesk',sans-serif] text-[26px] font-semibold mb-[0.6rem] tracking-tight text-[var(--on-surface)]">
          {milestone.title}
        </h4>
        <p className="text-[var(--on-surface-variant)] text-[16.5px]">
          {milestone.body}
        </p>
      </div>
    </div>
  );
});
TimelineEntry.displayName = "TimelineEntry";

/** Connector dots between entries */
const ConnectorDots: React.FC<{
  connectorRef: (el: HTMLDivElement | null) => void;
  litCount: number;
  pulsingDots: Set<number>;
}> = React.memo(({ connectorRef, litCount, pulsingDots }) => (
  <div ref={connectorRef} className="relative h-[136px] max-[480px]:h-[100px]">
    <div className="absolute left-[273px] max-[480px]:left-[149px] top-0 bottom-0 -translate-x-1/2 flex flex-col items-center justify-evenly">
      {Array.from({ length: DOTS_PER_CONNECTOR }).map((_, i) => (
        <div
          key={i}
          className={`w-[7px] h-[7px] rounded-full transition-all duration-[400ms] ${
            i < litCount
              ? "bg-[var(--primary)] shadow-[0_0_10px_rgba(192,193,255,0.55)]"
              : "bg-[var(--border-glass)]"
          } ${pulsingDots.has(i) ? "animate-[dotPulse_0.55s_cubic-bezier(.3,1.6,.4,1)]" : ""}`}
        />
      ))}
    </div>
  </div>
));
ConnectorDots.displayName = "ConnectorDots";

// ─── Main Component ───────────────────────────────────────────────────────────
const JourneyTimeline: React.FC = () => {
  const reduceMotion = usePrefersReducedMotion();

  // Refs for measuring scroll positions
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const connectorRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-driven state
  const [focusValues, setFocusValues] = useState<number[]>(() =>
    new Array(MILESTONES.length).fill(0),
  );
  const [connectorLitCounts, setConnectorLitCounts] = useState<number[]>(() =>
    new Array(MILESTONES.length - 1).fill(0),
  );
  const [connectorPulsingDots, setConnectorPulsingDots] = useState<
    Set<number>[]
  >(() => new Array(MILESTONES.length - 1).fill(null).map(() => new Set()));
  const [activeIndex, setActiveIndex] = useState(0);

  // Calendar flip state
  const [calendarState, setCalendarState] = useState<CalendarState>(() => {
    const { markedDay, leadBlanks } = getGridData(0);
    return {
      activeIndex: 0,
      isFlipping: false,
      isFooterSwapping: false,
      previousMonth: MILESTONES[0].month,
      previousYear: MILESTONES[0].year,
      previousGrid: Array.from({ length: 30 }, (_, i) => i + 1),
      previousMarkedDay: markedDay,
      previousLeadBlanks: leadBlanks,
    };
  });

  const flipEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const footerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevLitCountsRef = useRef<number[]>(
    new Array(MILESTONES.length - 1).fill(0),
  );

  // Handle calendar flip when active index changes
  const handleActiveChange = useCallback(
    (newIndex: number) => {
      if (newIndex === calendarState.activeIndex) return;

      const prevIdx = calendarState.activeIndex;
      const { markedDay: prevMarked, leadBlanks: prevBlanks } =
        getGridData(prevIdx);

      setCalendarState((prev) => ({
        ...prev,
        activeIndex: newIndex,
        isFlipping: true,
        isFooterSwapping: true,
        previousMonth: MILESTONES[prevIdx].month,
        previousYear: MILESTONES[prevIdx].year,
        previousGrid: Array.from({ length: 30 }, (_, i) => i + 1),
        previousMarkedDay: prevMarked,
        previousLeadBlanks: prevBlanks,
      }));

      if (flipEndTimer.current) clearTimeout(flipEndTimer.current);
      flipEndTimer.current = setTimeout(() => {
        setCalendarState((prev) => ({ ...prev, isFlipping: false }));
      }, 760);

      if (footerTimer.current) clearTimeout(footerTimer.current);
      footerTimer.current = setTimeout(() => {
        setCalendarState((prev) => ({ ...prev, isFooterSwapping: false }));
      }, 140);
    },
    [calendarState.activeIndex],
  );

  useEffect(() => {
    handleActiveChange(activeIndex);
  }, [activeIndex, handleActiveChange]);

  // Main scroll loop
  useEffect(() => {
    let rafId: number;

    const tick = () => {
      const refY = window.innerHeight * 0.5;
      const falloff = window.innerHeight * 0.6;
      let bestIdx = 0;
      let bestDist = Infinity;

      const newFocus: number[] = [];

      entryRefs.current.forEach((el, i) => {
        if (!el) {
          newFocus.push(0);
          return;
        }
        const rect = el.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const dist = Math.abs(centerY - refY);
        const f = Math.max(0, 1 - dist / falloff);
        newFocus.push(parseFloat(f.toFixed(3)));
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });

      // Connector dot progress
      const newLitCounts: number[] = [];
      const newPulsing: Set<number>[] = [];

      connectorRefs.current.forEach((el, i) => {
        if (!el) {
          newLitCounts.push(0);
          newPulsing.push(new Set());
          return;
        }
        const rect = el.getBoundingClientRect();
        let progress = rect.height > 0 ? (refY - rect.top) / rect.height : 0;
        progress = Math.max(0, Math.min(1, progress));
        const litCount = Math.round(progress * DOTS_PER_CONNECTOR);
        newLitCounts.push(litCount);

        const prevLit = prevLitCountsRef.current[i] ?? 0;
        const pulsing = new Set<number>();
        if (litCount > prevLit && !reduceMotion) {
          for (let d = prevLit; d < litCount; d++) {
            pulsing.add(d);
          }
        }
        newPulsing.push(pulsing);
      });

      prevLitCountsRef.current = newLitCounts;

      setFocusValues((prev) => {
        const changed = prev.some((v, i) => v !== newFocus[i]);
        return changed ? newFocus : prev;
      });

      setConnectorLitCounts((prev) => {
        const changed = prev.some((v, i) => v !== newLitCounts[i]);
        return changed ? newLitCounts : prev;
      });

      setConnectorPulsingDots(newPulsing);

      setActiveIndex((prev) => (prev !== bestIdx ? bestIdx : prev));

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [reduceMotion]);

  // Cleanup timers
  useEffect(() => {
    return () => {
      if (flipEndTimer.current) clearTimeout(flipEndTimer.current);
      if (footerTimer.current) clearTimeout(footerTimer.current);
    };
  }, []);

  const entryStates = useMemo(() => {
    return MILESTONES.map((_, i) => {
      if (i < activeIndex) return "passed" as const;
      if (i === activeIndex) return "active" as const;
      return "idle" as const;
    });
  }, [activeIndex]);

  return (
    <div
      className="min-h-screen"
      style={
        {
          "--surface-deep": "#020617",
          "--surface-container-low": "#131b2e",
          "--on-surface": "#dae2fd",
          "--on-surface-variant": "#c7c4d7",
          "--primary": "#c0c1ff",
          "--secondary": "#ddb7ff",
          "--border-glass": "rgba(255,255,255,0.1)",
          background:
            "radial-gradient(60% 50% at 12% 0%, rgba(192,193,255,0.07), transparent 60%), var(--surface-deep)",
          color: "var(--on-surface)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          lineHeight: 1.6,
          padding: "4rem 1.5rem 40vh",
        } as React.CSSProperties
      }
    >
      {/* Keyframe animations */}
      <style>{`
        @keyframes nodeRing {
          0% { opacity: 0.55; transform: scale(0.6); }
          70% { opacity: 0; transform: scale(1.5); }
          100% { opacity: 0; transform: scale(1.5); }
        }
        @keyframes dotPulse {
          0% { transform: scale(1); }
          45% { transform: scale(1.9); box-shadow: 0 0 16px rgba(192,193,255,0.8); }
          100% { transform: scale(1); }
        }
      `}</style>

      {/* Intro */}
      <div className="max-w-[640px] mx-auto mb-[4.5rem] text-center">
        <h1 className="font-['Space_Grotesk',sans-serif] text-[28px] font-bold mb-3">
          Our <span className="text-[var(--primary)]">Journey</span>
        </h1>
        <p className="text-[var(--on-surface-variant)] text-[15px]">
          A desk calendar tracks the timeline from 2018 through 2024 as you
          scroll — the page turns like paper with each milestone, and the entry
          in focus stays sharp while the rest settle back.
        </p>
      </div>

      {/* Main layout */}
      <div className="max-w-[1140px] mx-auto grid grid-cols-[270px_1fr] max-[700px]:grid-cols-1 gap-12">
        {/* Calendar column */}
        <div className="relative">
          <div className="sticky top-10 flex flex-col items-center gap-4 max-[700px]:static max-[700px]:mb-10">
            <DeskCalendar
              calendarState={calendarState}
              milestones={MILESTONES}
            />
            <div className="font-[Geist,sans-serif] text-[10.5px] tracking-[0.12em] uppercase text-[var(--on-surface-variant)] text-center opacity-50">
              Scroll to move through time
            </div>
          </div>
        </div>

        {/* Timeline column */}
        <div className="relative">
          {/* Spine */}
          <div className="absolute left-[273px] max-[480px]:left-[149px] top-[30px] bottom-[30px] w-[2px] bg-[var(--border-glass)]" />

          {/* Entries + connectors */}
          <div>
            {MILESTONES.map((milestone, i) => (
              <React.Fragment key={milestone.year}>
                <div
                  ref={(el) => {
                    entryRefs.current[i] = el;
                  }}
                >
                  <TimelineEntry
                    milestone={milestone}
                    index={i}
                    focus={focusValues[i] ?? 0}
                    state={entryStates[i]}
                    reduceMotion={reduceMotion}
                  />
                </div>
                {i < MILESTONES.length - 1 && (
                  <ConnectorDots
                    connectorRef={(el) => {
                      connectorRefs.current[i] = el;
                    }}
                    litCount={connectorLitCounts[i] ?? 0}
                    pulsingDots={connectorPulsingDots[i] ?? new Set()}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;
