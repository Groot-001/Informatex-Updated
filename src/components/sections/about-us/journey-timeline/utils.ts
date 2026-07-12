export function getGridData(index: number): {
  days: number[];
  markedDay: number;
  leadBlanks: number;
} {
  const markedDay = ((index * 5) % 27) + 3;
  const leadBlanks = (index * 2) % 7;

  return {
    days: Array.from({ length: 30 }, (_, i) => i + 1),
    markedDay,
    leadBlanks,
  };
}
