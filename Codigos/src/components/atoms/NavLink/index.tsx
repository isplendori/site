import Link from "next/link";
import { cn } from "@/lib/utils";

export interface NavLinkProps {
  href: string;
  children: string;
  active?: boolean;
  className?: string;
}

const NavLink = ({ href, children, active = false, className }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "font-sans text-[15px] not-italic leading-6.5 whitespace-nowrap transition-colors hover:text-[#9e372a]",
        active ? "font-medium text-[#202026] dark:text-[#F1F2F4]" : "font-normal text-[#727b8e]",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
