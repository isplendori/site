"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface FloatingMessageProps {
  messages: string[];
  isVisible?: boolean;
  className?: string;
}

const FloatingMessage = ({ messages, isVisible = false, className }: FloatingMessageProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (isVisible) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && messages.length > 1) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible, messages.length]);

  return (
    <div
      className={cn(
        "fixed pointer-events-none z-50 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        left: `${position.x + 20}px`,
        top: `${position.y + 20}px`,
      }}
    >
      <div className="flex flex-row justify-center items-center p-3 gap-2.5 bg-[#9E372A] border-2 border-white rounded-sm shadow-lg">
        <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-white flex items-center">
          {messages[currentMessage]}
        </span>
      </div>
    </div>
  );
};

export default FloatingMessage;
