export interface Stat {
  value: string;
  label: string;
}

export interface MonthData {
  month: string;
  value: number;
}

export interface GrowthChartSectionProps {
  className?: string;
  stats?: Stat[];
  data?: MonthData[];
  minValue?: number;
  maxValue?: number;
}
