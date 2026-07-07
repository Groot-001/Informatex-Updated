export interface MetricData {
  id: string;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface ChartMonth {
  name: string;
  value: number;
}

export const HERO_METRICS: MetricData[] = [
  {
    id: "m1",
    label: "Total Users",
    value: "12,540",
    change: "12.9%",
    isPositive: true,
  },
  {
    id: "m2",
    label: "Active Users",
    value: "8,230",
    change: "8.3%",
    isPositive: true,
  },
  {
    id: "m3",
    label: "Revenue",
    value: "$48,750",
    change: "15.7%",
    isPositive: true,
  },
];

export const CHART_DATA: ChartMonth[] = [
  { name: "Jan", value: 22 },
  { name: "Feb", value: 34 },
  { name: "Mar", value: 29 },
  { name: "Apr", value: 48 },
  { name: "May", value: 58 },
  { name: "Jul", value: 85 },
];
