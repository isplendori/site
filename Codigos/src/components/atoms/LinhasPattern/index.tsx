import { useId } from "react";

export interface LinhasPatternProps {
  className?: string;
  fillOpacity?: number;
  strokeTop?: boolean;
  strokeBottom?: boolean;
}

const LinhasPattern = ({
  className,
  fillOpacity = 0.59,
  strokeTop = false,
  strokeBottom = false,
}: LinhasPatternProps) => {
  const id = useId().replace(/:/g, "");
  const patternId = `linhas-pattern-${id}`;
  const imageId = `linhas-image-${id}`;
  const strokeClassName = "stroke-[rgba(114,123,142,0.1)] dark:stroke-[rgba(255,255,255,0.1)]";

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1216 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <rect width="1216" height="100" fill={`url(#${patternId})`} fillOpacity={fillOpacity} />
      {strokeTop && <line x1="0" y1="0.5" x2="1216" y2="0.5" className={strokeClassName} />}
      {strokeBottom && <line x1="0" y1="99.5" x2="1216" y2="99.5" className={strokeClassName} />}
      <defs>
        <pattern id={patternId} patternContentUnits="objectBoundingBox" width="0.00986842" height="0.12">
          <use xlinkHref={`#${imageId}`} transform="scale(0.000822368 0.01)" />
        </pattern>
        <image
          id={imageId}
          width="12"
          height="12"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAwSURBVHgB7cyxDQAwCANBb55snJDINcgbQInE16cHEtnnuo9+jHtwR6wqWHNUsOYB9qJ+JZ0YYfoAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export default LinhasPattern;
