import DropdownMenu from "@/molecules/DropdownMenu";
import type { DropdownItemProps } from "@/atoms/DropdownItem";

const DropdownPortfolio = () => {
  const items: DropdownItemProps[] = [
    {
      href: "/portfolio/projetos",
      title: "Projetos",
      description: "Marcas, sites e campanhas criados para resolver presença com critério.",
      icon: "star",
    },
    {
      href: "/portfolio/autorais",
      title: "Autorais",
      description: "Ensaios visuais onde testamos linguagem, ritmo e direção de marca.",
      icon: "star",
    },
  ];

  return <DropdownMenu items={items} />;
};

export default DropdownPortfolio;
