"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const scrollToPageTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
};

export default function ScrollToTop() {
  const pathname = usePathname();
  const hasMounted = useRef(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    scrollToPageTop();
  }, [pathname]);

  return null;
}
