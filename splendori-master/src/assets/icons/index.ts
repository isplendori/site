import star from "./star.png";
import cursor from "./cursor.png";
import star_green from "./star_green.png";
import fallback from "../images/placeholder.svg";

export const icons = {
  star,
  cursor,
  fallback,
  star_green,
};

type IIcon = keyof typeof icons;

export const getIcon = (id: IIcon) => {
  return icons[id] ?? icons.fallback;
};
