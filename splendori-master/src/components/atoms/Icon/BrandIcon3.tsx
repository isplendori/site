import Icon from "./Icon";
import { IconProps } from "./types";
import { brandIcons } from "./icons.data";

const BrandIcon3 = ({
  width,
  height,
  fillColor,
  fillOpacity,
  className,
}: IconProps) => {
  const iconData = brandIcons.brand3;
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

export default BrandIcon3;
