import { BrandIconProps } from "./types";

const Icon = ({
  width,
  height,
  viewBox,
  paths,
  fillColor = "#727B8E",
  fillOpacity = 0.1,
  className,
}: BrandIconProps & { width: number; height: number }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {paths.map((path, index) => (
        <path
          key={index}
          d={path.d}
          fill={path.fill || fillColor}
          fillOpacity={path.fillOpacity ?? fillOpacity}
          stroke={path.stroke}
          strokeWidth={path.strokeWidth}
          strokeLinecap={path.strokeLinecap}
          strokeLinejoin={path.strokeLinejoin}
        />
      ))}
    </svg>
  );
};

export default Icon;
