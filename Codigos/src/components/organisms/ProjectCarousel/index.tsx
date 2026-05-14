"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  images: string[];
}

const ProjectCarousel = ({ images }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full flex flex-col gap-6 pt-12 reveal-element">
      {/* Main Image with Navigation Buttons */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[32px] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] bg-[#F8F8FA] dark:bg-[#0A0A0A]">
        <Image
          src={images[currentIndex]}
          alt={`Project Image ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />
        
        {/* Navigation Buttons Overlay */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
            <button
              onClick={prevSlide}
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white transition hover:bg-white/40 hover:scale-105 active:scale-95"
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white transition hover:bg-white/40 hover:scale-105 active:scale-95"
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Thumbnails Navigation */}
      {images.length > 1 && (
        <div className="flex flex-wrap gap-3 justify-center pb-8">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "relative h-16 w-24 overflow-hidden rounded-xl border-2 transition-all duration-300",
                currentIndex === index 
                  ? "border-[#9E372A] scale-105 shadow-lg" 
                  : "border-transparent opacity-50 hover:opacity-100 hover:scale-102"
              )}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
