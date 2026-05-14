"use client";

import { useState, useRef, type ReactNode } from "react";
import ChevronDown from "@/atoms/Icon/ChevronDown";

export interface DropdownNavItemProps {
  label: string;
  children: ReactNode;
}

const DropdownNavItem = ({ label, children }: DropdownNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
    <div
      className="relative"
      onFocus={openDropdown}
      onMouseEnter={openDropdown}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className="flex gap-1.5 items-center text-[#727b8e] hover:text-[#9e372a] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-inter font-normal text-[15px] leading-6.5 whitespace-nowrap">
          {label}
        </span>
        <ChevronDown />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-6.5 z-50 animate-dropdown-in pt-3">
          <div onMouseEnter={openDropdown}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownNavItem;
