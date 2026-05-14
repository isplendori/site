"use client";

import { useState, useMemo } from "react";
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
  { month: "Jun", value: 23 },
  { month: "Jul", value: 32 },
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
  minValue = 0,
  maxValue = 100
}: GrowthChartSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { pathD, points } = useMemo(() => {
    const chartWidth = 1216;
    const chartHeight = 515;
    const padding = 50;
    const bottomPadding = 65; // espaço para labels

    const availableWidth = chartWidth - (padding * 2);
    const availableHeight = chartHeight - padding - bottomPadding;

    const stepX = availableWidth / (data.length - 1);

    const calculatedPoints = data.map((item, index) => {
      const x = padding + (index * stepX);
      const normalizedValue = (item.value - minValue) / (maxValue - minValue);
      const y = chartHeight - bottomPadding - (normalizedValue * availableHeight);

      return { x, y, value: item.value, month: item.month };
    });

    let path = `M ${calculatedPoints[0].x} ${calculatedPoints[0].y}`;

    for (let i = 0; i < calculatedPoints.length - 1; i++) {
      const current = calculatedPoints[i];
      const next = calculatedPoints[i + 1];

      const cpX = (current.x + next.x) / 2;
      const cpY = (current.y + next.y) / 2;

      path += ` Q ${cpX} ${cpY}, ${next.x} ${next.y}`;
    }

    return { pathD: path, points: calculatedPoints };
  }, [data, minValue, maxValue]);

  return (
    <section className={cn("w-full bg-white dark:bg-[#0A0A0A]", className)}>
      <div className="w-full max-w-304 h-174 mx-auto">
        <div className="relative w-full h-128.75">
          <div className="absolute inset-0 flex">
            {data.map((item) => (
              <div key={item.month} className="relative flex-1 flex flex-col items-center">
                <div className="absolute bottom-4 text-[14px] leading-[22.4px] tracking-[-0.28px] text-[#727B8E] dark:text-[#A0A8B8]">
                  {item.month}
                </div>
              </div>
            ))}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-[rgba(114,123,142,0.06)]" />
          </div>

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1216 515" preserveAspectRatio="none">
            {points.map((point, index) => (
              <line
                key={`dashed-${index}`}
                x1={point.x}
                y1={point.y}
                x2={point.x}
                y2={515 - 50}
                stroke="rgba(114, 123, 142, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.3s ease-out ${1.5 + index * 0.1}s forwards`
                }}
              />
            ))}

            <path
              d={pathD}
              stroke="rgba(158, 55, 42, 0.3)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300"
              style={{
                strokeDasharray: 2000,
                strokeDashoffset: 2000,
                animation: "drawPath 2s ease-out forwards"
              }}
            />

            <path
              d={`${pathD} L ${points[points.length - 1].x} 515 L ${points[0].x} 515 Z`}
              fill="rgba(158, 55, 42, 0.05)"
              className="transition-all duration-300"
              style={{
                opacity: 0,
                animation: "fadeIn 1s ease-out 1s forwards"
              }}
            />

            {points.map((point, index) => (
              <g key={index}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={hoveredIndex === index ? 6 : 4}
                  fill="#9E372A"
                  className="transition-all duration-200 cursor-pointer"
                  style={{
                    opacity: 0,
                    animation: `fadeIn 0.3s ease-out ${1.5 + index * 0.1}s forwards`
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />

                {hoveredIndex === index && (
                  <g>
                    <rect
                      x={point.x - 30}
                      y={point.y - 40}
                      width="60"
                      height="30"
                      rx="4"
                      fill="#0C111D"
                      className="transition-opacity duration-200"
                    />
                    <text
                      x={point.x}
                      y={point.y - 20}
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                      fontWeight="600"
                    >
                      {point.value}
                    </text>
                  </g>
                )}
              </g>
            ))}
          </svg>
        </div>

        <div className="w-full h-40 flex border-t border-[rgba(114,123,142,0.06)]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "flex-1 flex flex-col items-center justify-center gap-2",
                index < stats.length - 1 && "border-r border-[rgba(114,123,142,0.06)]"
              )}
            >
              <div className="text-[48px] font-semibold leading-[57.6px] tracking-[-0.96px] text-[#0C111D]">
                {stat.value}
              </div>
              <div className="text-[14px] leading-[22.4px] tracking-[-0.28px] text-[#727B8E] dark:text-[#A0A8B8]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default GrowthChartSection;
