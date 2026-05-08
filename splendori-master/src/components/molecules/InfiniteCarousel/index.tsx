"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface CarouselItem {
  id: string;
  alt: string;
  image: string;
}

export interface InfiniteCarouselProps {
  speed?: number;
  className?: string;
  items: CarouselItem[];
}

const InfiniteCarousel = ({ items, speed = 50, className }: InfiniteCarouselProps) => {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const animationRef = useRef<number>(speed);

  const duplicatedItems = [...items, ...items, ...items, ...items];

  useEffect(() => {
    const animate = () => {
      setOffset((prev) => {
        const newOffset = prev + (isPaused ? 0.2 : 1);
        if (newOffset >= (items.length * (447.2 + 9))) {
          return 0;
        }
        return newOffset;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, items.length]);

  return (
    <div className={className || "flex flex-row items-center overflow-hidden w-full mb-8"}>
      <div
        className="flex flex-row items-center gap-2.25"
        style={{
          transform: `translateX(-${offset}px)`,
          transition: 'none',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-none w-[447.2px] h-115.5 border border-[rgba(114,123,142,0.1)] rounded-[14px] relative overflow-hidden group"
            onMouseEnter={() => {
              setIsPaused(true);
              setHoveredIndex(index);
            }}
            onMouseLeave={() => {
              setIsPaused(false);
              setHoveredIndex(null);
            }}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className={`object-cover transition-transform duration-500 ${
                hoveredIndex === index ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
