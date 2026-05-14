"use client";

import { cn } from "@/lib/utils";
import { GrowthChartSectionProps, MonthData } from "./types";

const defaultStats = [
  { value: "10X", label: "Streamlined execution" },
  { value: "90%", label: "Workstream reduced" },
  { value: "24/7", label: "Automated execution" },
  { value: "5+", label: "Automated workflows" }
];

const defaultData: MonthData[] = [
  { month: "Jan", value: 2 },
  { month: "Feb", value: 3 },
  { month: "Mar", value: 5 },
  { month: "Apr", value: 9 },
  { month: "May", value: 15 },
  { month: "June", value: 23 },
  { month: "July", value: 32 },
  { month: "Aug", value: 44 },
  { month: "Sep", value: 57 },
  { month: "Oct", value: 71 },
  { month: "Nov", value: 86 },
  { month: "Dec", value: 102 },
];

const GrowthChartSection = ({
  className,
  stats = defaultStats,
  data = defaultData,
}: GrowthChartSectionProps) => {
  const chartWidth = 1216;
  const baselineY = 451;

  const curvePoints = data.map((item, index) => {
    const x = (chartWidth / (data.length - 1)) * index;
    const progress = index / (data.length - 1);
    const y = baselineY - (Math.pow(progress, 2.18) * 339);

    return { ...item, x, y };
  });

  const curvePath = [
    `M ${curvePoints[0].x} ${curvePoints[0].y}`,
    `C 230 ${baselineY + 4}, 472 397, 650 334`,
    `C 822 273, 980 202, 1115 92`,
    `C 1150 64, 1184 38, 1216 0`
  ].join(" ");

  return (
    <section className={cn("w-full bg-white dark:bg-[#0A0A0A]", className)}>
      <div className="mx-auto w-full max-w-304 bg-white dark:bg-[#0A0A0A]">
        <div className="relative h-[543px] w-full overflow-hidden py-3.5">
          <div className="absolute inset-x-0 top-3.5 h-[515px]">
            <svg
              className="absolute inset-0 size-full"
              viewBox="0 0 1216 515"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {curvePoints.map((point) => (
                <line
                  key={point.month}
                  x1={point.x}
                  y1={point.y}
                  x2={point.x}
                  y2={baselineY}
                  stroke="#E4E7EC"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                  opacity="0.7"
                />
              ))}

              <path
                d={curvePath}
                fill="none"
                stroke="#9E372A"
                strokeWidth="2.67"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="growth-chart-line"
                vectorEffect="non-scaling-stroke"
              />

              <line
                x1="0"
                y1={baselineY}
                x2={chartWidth}
                y2={baselineY}
                stroke="#E4E7EC"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="absolute inset-x-0 bottom-0 grid grid-cols-12">
              {data.map((item) => (
                <div
                  key={item.month}
                  className="flex justify-center font-figtree text-[12px] font-medium leading-[16.44px] text-[#8E90A1]"
                >
                  {item.month}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-40 w-full border-t border-[rgba(114,123,142,0.1)] bg-white dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0A0A0A]">
          <div className="absolute left-3 top-12 flex w-[1192px] items-start justify-center gap-8 overflow-hidden">
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className="flex w-[241px] flex-col items-center justify-center gap-2"
              >
                <div
                  className={cn(
                    "font-figtree font-medium leading-[35.2px] text-[#27272A] dark:text-[#FAFAFA]",
                    index === 1 ? "text-[31.6px]" : index === 2 ? "text-[29.8px]" : index === 3 ? "text-[30.1px]" : "text-[29px]"
                  )}
                >
                  {stat.value}
                </div>
                <div className="font-sans text-[14px] leading-[19.6px] text-[#8E90A1] dark:text-[#A0A8B8]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .growth-chart-line {
          stroke-dasharray: 1800;
          stroke-dashoffset: 1800;
          animation: drawGrowthChart 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes drawGrowthChart {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default GrowthChartSection;
