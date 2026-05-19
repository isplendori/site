import DropdownMenu from "@/molecules/DropdownMenu";
import type { DropdownItemProps } from "@/atoms/DropdownItem";

const DropdownSobre = () => {
  const items: DropdownItemProps[] = [
    {
      href: "/sobre/historia",
      title: "História",
      description: "De onde vem nossa forma de unir marca, tecnologia e direção criativa.",
      icon: "star",
    },
    {
      href: "/sobre/metodo",
      title: "Método",
      description: "Como transformamos intenção em sistema visual, conteúdo e execução.",
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
      description: "Projetos e instituições que ampliam o sentido do que escolhemos apoiar.",
      icon: "star",
    },
  ];

  return <DropdownMenu items={items} />;
};

export default DropdownSobre;
