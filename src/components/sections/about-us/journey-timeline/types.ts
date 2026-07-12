export interface Milestone {
  year: number;
  month: string;
  day: number;
  title: string;
  body: string;
}

export interface CalendarState {
  activeIndex: number;
  isFlipping: boolean;
  isFooterSwapping: boolean;
  previousMonth: string;
  previousYear: number;
  previousGrid: number[];
  previousMarkedDay: number;
  previousLeadBlanks: number;
}
