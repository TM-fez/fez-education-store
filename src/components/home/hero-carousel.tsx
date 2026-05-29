"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CAROUSEL_IMAGES = [
  { src: "/images/gaborone_cbd.png", alt: "Modern Gaborone CBD skyline representing the Botswana business environment" },
  { src: "/images/hero_botswana_training.png", alt: "Corporate workforce development and training" },
  { src: "/images/cover_leadership_p1.png", alt: "Leadership and management excellence" },
  { src: "/images/cover_customer_service_p2.png", alt: "Customer service excellence and client relations" },
  { src: "/images/cover_qa_p8.png", alt: "Operational performance improvement and quality assurance" },
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
