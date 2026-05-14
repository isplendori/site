import Link from "next/link";
import Image from "next/image";
import { getIcon, icons } from "@/assets/icons";

export interface DropdownItemProps {
  href: string;
  title: string;
  active?: boolean;
  description: string;
  icon: keyof typeof icons;
}

const DropdownItem = ({ href, title, description, icon, active = false }: DropdownItemProps) => {
  return (
    <Link
      href={href}
      className={`flex flex-col justify-center items-center p-3.5 gap-6.75 w-full h-22.5 rounded-lg transition-colors ${
        active
          ? "bg-[rgba(230,144,144,0.14)] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] hover:bg-[rgba(230,144,144,0.2)]"
          : "bg-white dark:bg-[#0A0A0A] hover:bg-[rgba(0,0,0,0.05)]"
      }`}
    >
      <div className="flex flex-row items-start gap-4.5 w-81 h-15.5">
        <div className={`flex flex-row justify-center items-center w-11 h-11 border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-sm ${
          active ? "bg-[rgba(230,144,144,0.24)]" : "bg-white dark:bg-[#0A0A0A]"
        }`}>
          <Image
            src={getIcon(icon).src}
            alt=""
            width={18}
            height={18}
            className="w-4.5 h-4.5"
          />
        </div>
        <div className="flex flex-col items-start gap-1.25 w-65.5 h-15.5">
          <div className="font-figtree font-medium text-[16px] leading-4.75 text-[#434A57] w-full h-4.75 flex items-center">
            {title}
          </div>
          <p className="font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1] w-65.5 h-9.5">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DropdownItem;
