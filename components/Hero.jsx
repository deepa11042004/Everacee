"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother performance during scroll
      window.requestAnimationFrame(() => {
        setOffsetY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative  h-screen w-full overflow-hidden">
      {/* Background Image Container 
          - We use a negative translateY to make it move UP while scrolling DOWN.
          - We use 'will-change-transform' to hint the browser for better performance.
      */}
      <div
        className="absolute top-0 left-0 w-full h-[130%] will-change-transform"
        style={{
          transform: `translateY(${offsetY * -0.3}px)`, // Negative value = moves up
        }}
      >
        <Image
          src="/img/hero.jpeg"
          alt="Hero Image"
          fill
          priority // Ensures the hero image loads immediately
          className="object-cover"
        />
      </div>

       
    </div>
  );
};

export default Hero;