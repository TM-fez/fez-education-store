"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CAROUSEL_IMAGES = [
  { src: "/images/gaborone_cbd.png", alt: "Modern Gaborone CBD skyline" },
  { src: "/images/hero_botswana_training.png", alt: "Corporate workforce development" },
  { src: "/images/cap_leadership_bg.png", alt: "Executive leadership in action" },
  { src: "/images/cap_customer_service_bg.png", alt: "Customer service excellence" },
  { src: "/images/cap_operations_bg.png", alt: "Operational performance" },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % CAROUSEL_IMAGES.length);
    }, 6000);
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
          className={`object-cover transition-opacity duration-1500 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Multi-layer overlay for guaranteed white text readability */}
      {/* Layer 1: Hard dark base to kill image brightness */}
      <div className="absolute inset-0 bg-slate-950/60" />
      {/* Layer 2: Left-to-right gradient — text sits on darkest side */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
      {/* Layer 3: Bottom vignette for content blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/30" />
    </div>
  );
}
