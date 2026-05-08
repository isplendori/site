import DropdownMenu from "@/molecules/DropdownMenu";
import type { DropdownItemProps } from "@/atoms/DropdownItem";

const DropdownPortfolio = () => {
  const items: DropdownItemProps[] = [
    {
      href: "/portfolio/projetos",
      title: "Projetos",
      description: "Trabalhos comerciais, marcas, sites e campanhas.",
      icon: "star",
    },
    {
      href: "/portfolio/autorais",
      title: "Autorais",
      description: "Estudos, experimentos e criações independentes.",
      icon: "star",
    },
  ];

  return <DropdownMenu items={items} />;
};

export default DropdownPortfolio;
