"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { GrowthChartSectionProps, MonthData } from "./types";

const defaultStats = [
  { value: "10X", label: "Mais clareza na presença" },
  { value: "90%", label: "Menos retrabalho visual" },
  { value: "24/7", label: "Marca pronta para vender" },
  { value: "5+", label: "Frentes conectadas" }
];

const defaultData: MonthData[] = [
  { month: "Jan", value: 2 },
  { month: "Fev", value: 3 },
  { month: "Mar", value: 5 },
  { month: "Abr", value: 9 },
  { month: "Mai", value: 15 },
  { month: "Jun", value: 23 },
  { month: "Jul", value: 32 },
  { month: "Ago", value: 44 },
  { month: "Set", value: 57 },
  { month: "Out", value: 71 },
  { month: "Nov", value: 86 },
  { month: "Dez", value: 102 },
];

const createSmoothPath = (points: Array<MonthData & { x: number; y: number }>) => {
  if (!points.length) {
    return "";
  }

  return points.reduce((path, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }

    const previous = points[index - 1];
    const controlOffset = (point.x - previous.x) * 0.45;

    return [
      path,
      `C ${previous.x + controlOffset} ${previous.y}, ${point.x - controlOffset} ${point.y}, ${point.x} ${point.y}`
    ].join(" ");
  }, "");
};

const parseCountValue = (value: string) => {
  const match = value.match(/^(\d+)(.*)$/);

  if (!match) {
    return null;
  }

  return {
    target: Number(match[1]),
    suffix: match[2],
  };
};

const CountUpValue = ({ value }: { value: string }) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(() => {
    const parsed = parseCountValue(value);

    return parsed ? `0${parsed.suffix}` : value;
  });

  useEffect(() => {
    const parsed = parseCountValue(value);

    if (!parsed || !elementRef.current) {
      setDisplayValue(value);
      return;
    }

    let animationFrame = 0;
    let startTime: number | null = null;
    const duration = 1300;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(parsed.target * easedProgress);

      setDisplayValue(`${current}${parsed.suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(animationFrame);
        startTime = null;

        if (entry.isIntersecting) {
          setDisplayValue(`0${parsed.suffix}`);
          animationFrame = requestAnimationFrame(animate);
        } else {
          setDisplayValue(`0${parsed.suffix}`);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(elementRef.current);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [value]);

  return <span ref={elementRef}>{displayValue}</span>;
};

const GrowthChartSection = ({
  className,
  stats = defaultStats,
  data = defaultData,
}: GrowthChartSectionProps) => {
  const chartWidth = 1216;
  const baselineY = 485;
  const chartRise = baselineY;

  const curvePoints = data.map((item, index) => {
    const x = (chartWidth / (data.length - 1)) * index;
    const progress = index / (data.length - 1);
    const y = baselineY - (Math.pow(progress, 2.18) * chartRise);

    return { ...item, x, y };
  });

  const curvePath = createSmoothPath(curvePoints);

  return (
    <section className={cn("growth-chart-section w-full bg-white dark:bg-[#0A0A0A]", className)}>
      <div className="mx-auto w-full max-w-304 bg-white dark:bg-[#0A0A0A]">
        <div className="relative h-[300px] w-full overflow-hidden py-3.5 sm:h-[400px] lg:h-[543px]">
          <div className="absolute inset-x-0 top-3.5 h-[272px] sm:h-[372px] lg:h-[515px]">
            <svg
              className="absolute inset-0 size-full"
              viewBox="0 0 1216 515"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <clipPath id="growth-chart-reveal" clipPathUnits="userSpaceOnUse">
                  <rect className="growth-chart-clip" x="0" y="0" width={chartWidth} height="515" />
                </clipPath>
              </defs>

              {curvePoints.map((point, index) => (
                <line
                  key={point.month}
                  className="growth-chart-guide"
                  x1={point.x}
                  y1={point.y}
                  x2={point.x}
                  y2={baselineY}
                  stroke="#606473"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                  opacity="0.42"
                  style={{ animationDelay: `${180 + index * 55}ms` }}
                  vectorEffect="non-scaling-stroke"
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
                clipPath="url(#growth-chart-reveal)"
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

        <div className="relative w-full border-t border-[rgba(114,123,142,0.1)] bg-white py-8 dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0A0A0A] lg:h-40 lg:py-0">
          <div className="grid w-full grid-cols-2 gap-y-8 px-6 sm:grid-cols-4 lg:absolute lg:left-3 lg:top-12 lg:flex lg:w-[1192px] lg:items-start lg:justify-center lg:gap-8 lg:overflow-hidden lg:px-0">
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className="growth-stat flex w-full flex-col items-center justify-center gap-2 lg:w-[241px]"
                style={{ animationDelay: `${420 + index * 120}ms` }}
              >
                <div
                  className={cn(
                    "font-figtree font-medium leading-[35.2px] text-[#27272A] dark:text-[#FAFAFA]",
                    index === 1 ? "text-[31.6px]" : index === 2 ? "text-[29.8px]" : index === 3 ? "text-[30.1px]" : "text-[29px]"
                  )}
                >
                  <CountUpValue value={stat.value} />
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
        .growth-chart-guide {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: bottom;
          transform: scaleY(0);
          filter: blur(6px);
        }

        .growth-chart-line {
          stroke-dasharray: 1800;
          stroke-dashoffset: 1800;
          filter: blur(10px);
        }

        .growth-chart-clip {
          transform-box: fill-box;
          transform-origin: bottom;
          transform: scaleY(0);
        }

        .growth-stat {
          opacity: 0;
          transform: translateY(18px) scale(0);
          filter: blur(12px);
          will-change: opacity, transform, filter;
        }

        .growth-chart-section.is-revealed .growth-chart-guide {
          animation: growGuideLine 1.15s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .growth-chart-section.is-revealed .growth-chart-line {
          animation: drawGrowthChart 1.8s cubic-bezier(0.16, 1, 0.3, 1) 180ms forwards,
            clarifyGrowthChart 1.2s cubic-bezier(0.16, 1, 0.3, 1) 180ms forwards;
        }

        .growth-chart-section.is-revealed .growth-chart-clip {
          animation: revealGrowthChart 1.65s cubic-bezier(0.16, 1, 0.3, 1) 120ms forwards;
        }

        .growth-chart-section.is-revealed .growth-stat {
          animation: revealGrowthStat 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes drawGrowthChart {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes clarifyGrowthChart {
          to {
            filter: blur(0);
          }
        }

        @keyframes revealGrowthChart {
          to {
            transform: scaleY(1);
          }
        }

        @keyframes growGuideLine {
          to {
            opacity: 0.42;
            transform: scaleY(1);
            filter: blur(0);
          }
        }

        @keyframes revealGrowthStat {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
};

export default GrowthChartSection;
