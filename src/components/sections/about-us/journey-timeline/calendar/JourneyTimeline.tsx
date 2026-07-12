import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Calendar from "./Calendar";
import TimelineConnector from "./TimelineConnector";
import TimelineEntry from "./TimelineEntry";

import { usePrefersReducedMotion } from "../hooks";
import { MILESTONES } from "../journey.data";
import type { CalendarState } from "../types";
import { getGridData } from "../utils";

export default function JourneyTimeline() {
  const reduceMotion = usePrefersReducedMotion();

  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const connectorRefs = useRef<(HTMLDivElement | null)[]>([]);

  const flipEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const footerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prevLitCountsRef = useRef<number[]>(
    new Array(MILESTONES.length - 1).fill(0),
  );

  const [focusValues, setFocusValues] = useState(() =>
    new Array(MILESTONES.length).fill(0),
  );

  const [connectorLitCounts, setConnectorLitCounts] = useState(() =>
    new Array(MILESTONES.length - 1).fill(0),
  );

  const [connectorPulsingDots, setConnectorPulsingDots] = useState<
    Set<number>[]
  >(() =>
    Array.from({ length: MILESTONES.length - 1 }, () => new Set<number>()),
  );

  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleActiveChange = useCallback(
    (newIndex: number) => {
      if (newIndex === calendarState.activeIndex) return;

      const previous = calendarState.activeIndex;

      const { markedDay, leadBlanks } = getGridData(previous);

      setCalendarState((prev) => ({
        ...prev,
        activeIndex: newIndex,
        isFlipping: true,
        isFooterSwapping: true,
        previousMonth: MILESTONES[previous].month,
        previousYear: MILESTONES[previous].year,
        previousGrid: Array.from({ length: 30 }, (_, i) => i + 1),
        previousMarkedDay: markedDay,
        previousLeadBlanks: leadBlanks,
      }));

      if (flipEndTimer.current) {
        clearTimeout(flipEndTimer.current);
      }

      flipEndTimer.current = setTimeout(() => {
        setCalendarState((prev) => ({
          ...prev,
          isFlipping: false,
        }));
      }, 760);

      if (footerTimer.current) {
        clearTimeout(footerTimer.current);
      }

      footerTimer.current = setTimeout(() => {
        setCalendarState((prev) => ({
          ...prev,
          isFooterSwapping: false,
        }));
      }, 140);
    },
    [calendarState.activeIndex],
  );

  useEffect(() => {
    let rafId: number;

    const tick = () => {
      const referenceY = window.innerHeight * 0.5;
      const falloff = window.innerHeight * 0.6;

      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      const nextFocusValues: number[] = [];

      entryRefs.current.forEach((element, index) => {
        if (!element) {
          nextFocusValues.push(0);
          return;
        }

        const rect = element.getBoundingClientRect();

        const centerY = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - referenceY);

        const focus = Math.max(0, 1 - distance / falloff);

        nextFocusValues.push(Number(focus.toFixed(3)));

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      const nextConnectorLit: number[] = [];
      const nextConnectorPulse: Set<number>[] = [];

      connectorRefs.current.forEach((element, index) => {
        if (!element) {
          nextConnectorLit.push(0);
          nextConnectorPulse.push(new Set());

          return;
        }

        const rect = element.getBoundingClientRect();

        let progress =
          rect.height > 0 ? (referenceY - rect.top) / rect.height : 0;

        progress = Math.max(0, Math.min(1, progress));

        const litCount = Math.round(progress * 5);

        nextConnectorLit.push(litCount);

        const previous = prevLitCountsRef.current[index] ?? 0;

        const pulse = new Set<number>();

        if (litCount > previous && !reduceMotion) {
          for (let dot = previous; dot < litCount; dot++) {
            pulse.add(dot);
          }
        }

        nextConnectorPulse.push(pulse);
      });

      prevLitCountsRef.current = nextConnectorLit;

      setFocusValues((previous) =>
        previous.some((value, index) => value !== nextFocusValues[index])
          ? nextFocusValues
          : previous,
      );

      setConnectorLitCounts((previous) =>
        previous.some((value, index) => value !== nextConnectorLit[index])
          ? nextConnectorLit
          : previous,
      );

      setConnectorPulsingDots(nextConnectorPulse);

      setActiveIndex((previous) =>
        previous !== closestIndex ? closestIndex : previous,
      );

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [reduceMotion]);

  useEffect(() => {
    handleActiveChange(activeIndex);
  }, [activeIndex, handleActiveChange]);

  useEffect(() => {
    return () => {
      if (flipEndTimer.current) {
        clearTimeout(flipEndTimer.current);
      }

      if (footerTimer.current) {
        clearTimeout(footerTimer.current);
      }
    };
  }, []);

  const entryStates = useMemo(
    () =>
      MILESTONES.map((_, index) => {
        if (index < activeIndex) return "passed" as const;

        if (index === activeIndex) return "active" as const;

        return "idle" as const;
      }),
    [activeIndex],
  );

  return (
    <div className="grid gap-16 lg:grid-cols-[360px_1fr]">
      <div className="h-fit lg:sticky lg:top-28">
        <Calendar calendarState={calendarState} milestones={MILESTONES} />
      </div>

      <div>
        {MILESTONES.map((milestone, index) => (
          <div
            key={milestone.year}
            ref={(element) => {
              entryRefs.current[index] = element;
            }}
          >
            <TimelineEntry
              milestone={milestone}
              focus={focusValues[index] ?? 0}
              state={entryStates[index]}
              reduceMotion={reduceMotion}
            />

            {index !== MILESTONES.length - 1 && (
              <TimelineConnector
                connectorRef={(element) => {
                  connectorRefs.current[index] = element;
                }}
                litCount={connectorLitCounts[index] ?? 0}
                pulsingDots={connectorPulsingDots[index] ?? new Set<number>()}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
