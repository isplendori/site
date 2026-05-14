"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex items-center justify-center w-10 h-10 rounded-full transition-colors",
        "border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] bg-white dark:bg-[#0A0A0A] hover:bg-gray-100",
        "dark:bg-[#12141B] dark:bg-[#F1F2F4] dark:border-[rgba(255,255,255,0.1)] dark:hover:bg-gray-800",
        className
      )}
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F1F2F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#202026" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
        </svg>
      )}
    </button>
  );
}
