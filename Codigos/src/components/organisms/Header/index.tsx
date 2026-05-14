"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "@/atoms/Logo";
import NavLink from "@/atoms/NavLink";
import ArrowUpRight from "@/atoms/Icon/ArrowUpRight";
import DropdownNavItem from "@/molecules/DropdownNavItem";
import DropdownSobre from "@/molecules/DropdownSobre";
import DropdownPortfolio from "@/molecules/DropdownPortfolio";
import ThemeToggle from "@/atoms/ThemeToggle";

export interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        "flex flex-col justify-center items-center w-full h-20 bg-white dark:bg-[#0A0A0A] border-b border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] px-4 md:px-6.25 py-3.75",
        className
      )}
    >
      <div className="flex flex-row items-center justify-between w-full max-w-302.5">
        <div className="flex flex-row items-center gap-6">
          <Logo />

          <div className="hidden lg:block w-px h-5.25 bg-[rgba(114,123,142,0.1)]" />

          <nav className="hidden lg:flex flex-row items-center gap-5.25">
            <NavLink href="/">
              Inicio
            </NavLink>

            <DropdownNavItem label="Sobre">
              <DropdownSobre />
            </DropdownNavItem>

            <NavLink href="/planos">
              Planos
            </NavLink>

            <DropdownNavItem label="Portfolio">
              <DropdownPortfolio />
            </DropdownNavItem>
          </nav>
        </div>

        <div className="flex flex-row items-center gap-4 h-10">
          <ThemeToggle />

          <Link
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex flex-col items-start p-[7px_16px] gap-2.5 bg-white dark:bg-[#0A0A0A] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-md hover:bg-[#9e372a] hover:border-[#9e372a] transition-colors group"
          >
            <div className="flex flex-row items-center gap-1.5 w-34 h-6.5">
              <span className="flex items-center w-30.5 h-6.5 font-inter font-normal text-[15px] leading-6.5 text-[#202026] dark:text-[#F1F2F4] group-hover:text-white dark:group-hover:text-[#12141B] dark:text-[#12141B] transition-colors">
                Entre em contato
              </span>
              <div className="w-2 h-2 -100 [&_path]:group-hover:stroke-white [&_path]:transition-colors">
                <ArrowUpRight stroke="#1A1A20" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
