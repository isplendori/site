"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Timeout garante que o navegador renderizou o estado opaco antes de disparar a transição
            setTimeout(() => {
              entry.target.classList.add("is-revealed");
            }, 50);
          } else {
            // Remove class to animate out when scrolling past
            entry.target.classList.remove("is-revealed");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    const observeNodes = (nodes: NodeList) => {
      nodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          if (node.tagName === "SECTION" || node.classList.contains("reveal-element")) {
            if (!node.classList.contains("reveal-target")) {
              node.classList.add("reveal-target");
              observer.observe(node);
            }
          }
          const children = node.querySelectorAll("section, .reveal-element");
          children.forEach((child) => {
            if (!child.classList.contains("reveal-target")) {
              child.classList.add("reveal-target");
              observer.observe(child);
            }
          });
        }
      });
    };

    // Initial check
    const initialElements = document.querySelectorAll("section, .reveal-element");
    initialElements.forEach((el) => {
      if (!el.classList.contains("reveal-target")) {
        el.classList.add("reveal-target");
        observer.observe(el);
      }
    });

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        observeNodes(mutation.addedNodes);
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
