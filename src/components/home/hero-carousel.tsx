"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CAROUSEL_IMAGES = [
  { src: "/images/hero_botswana_training.png", alt: "Botswana corporate leadership workshop" },
  { src: "/images/industry_retail.png", alt: "Retail operations and management" },
  { src: "/images/industry_logistics.png", alt: "Logistics and warehousing" },
  { src: "/images/industry_hospitality.png", alt: "Hospitality and tourism training" },
  { src: "/images/industry_admin.png", alt: "Corporate administration" },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % CAROUSEL_IMAGES.length);
    }, 6000); // 6 seconds transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {CAROUSEL_IMAGES.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark-900)]/80 via-[var(--color-dark-900)]/60 to-[var(--color-dark-900)]/95"></div>
    </div>
  );
}
