import DropdownMenu from "@/molecules/DropdownMenu";
import type { DropdownItemProps } from "@/atoms/DropdownItem";

const DropdownSobre = () => {
  const items: DropdownItemProps[] = [
    {
      href: "/sobre/historia",
      title: "História",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: "star",
    },
    {
      href: "/sobre/metodo",
      title: "Método",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: "star",
    },
    {
      href: "/equipe",
      title: "Equipe",
      description: "Conheça quem constrói cada entrega com estratégia, criação e execução.",
      icon: "star",
    },
    {
      href: "/sobre/causas",
      title: "Causas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: "star",
    },
  ];

  return <DropdownMenu items={items} />;
};

export default DropdownSobre;
