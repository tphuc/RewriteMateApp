"use client";

import { useState, useEffect } from "react";

const images = ["step_1", "step_2", "step_3"];

export default function PhoneCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-sm">
     
       
        {images.map((img, i) => (
          <img
            key={img}
            src={`/${img}.avif`}
            alt={`RewriteMate step ${i + 1}`}
            className={`max-w-sm rounded-[1.8rem] w-full     brightness-110 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0 absolute inset-0"}`}
            style={i === index ? { position: "relative" } : undefined}
          />
        ))}
     
    </div>
  );
}
