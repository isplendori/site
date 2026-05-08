import logo from "./logo.png";
import made from "./made.png";
import fallback from "./placeholder.svg";
import four_cubes from "./four_cubes.png";
import white_rocket from "./white_rocket.png"; 
import white_cube_supporting from "./white_cube_supporting.png";
import background_card_metodo from "./background_card_metodo.png"; 

export const images = {
  logo,
  made,
  fallback,
  four_cubes,
  white_rocket,
  white_cube_supporting,
  background_card_metodo,
};

type IImage = keyof typeof images;

export const getImage = (id: IImage) => {
  return images[id] ?? images.fallback;
};
