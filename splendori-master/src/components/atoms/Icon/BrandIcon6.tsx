import Icon from "./Icon";
import { IconProps } from "./types";
import { brandIcons } from "./icons.data";

const BrandIcon6 = ({
  width,
  height,
  fillColor,
  fillOpacity,
  className,
}: IconProps) => {
  const iconData = brandIcons.brand6;
  return (
    <Icon
      width={width || iconData.defaultWidth}
      height={height || iconData.defaultHeight}
      viewBox={iconData.viewBox}
      paths={iconData.paths}
      fillColor={fillColor}
      fillOpacity={fillOpacity}
      className={className}
    />
  );
};

export default BrandIcon6;
