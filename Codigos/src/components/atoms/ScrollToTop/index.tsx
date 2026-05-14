"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const scrollToPageTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
};

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    scrollToPageTop();
  }, [pathname]);

  useEffect(() => {
    const handlePageShow = () => {
      scrollToPageTop();
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return null;
}
