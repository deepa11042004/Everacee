"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-red-600">
      {/* Background Image with Parallax */}
      <div
        className="absolute top-0 left-0 w-full h-[120%] overflow-hidden"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`, // adjust speed here
        }}
      >
        <Image
          src="/img/hero.jpeg"
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay Content (optional) */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">Hero Section</h1>
      </div>
    </div>
  );
};

export default Hero;