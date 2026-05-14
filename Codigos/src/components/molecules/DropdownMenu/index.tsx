import DropdownItem, { type DropdownItemProps } from "@/atoms/DropdownItem";

export interface DropdownMenuProps {
  items: DropdownItemProps[];
  className?: string;
}

const DropdownMenu = ({ items, className }: DropdownMenuProps) => {
  return (
    <div className={className || "flex flex-col justify-center items-center p-[14px_12px] gap-2.5 w-94 bg-white dark:bg-[#0A0A0A] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-[5px]"}>
      <div className="flex flex-col items-start gap-1 w-88">
        {items.map((item, index) => (
          <DropdownItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
