"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Mockup = () => {
  return (
    <div className="relative h-[90vh]    w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[130%] will-change-transform">
        <Image
          src="/img/mockup.jpeg"
          fill
          className="object-cover"
          alt="Mockup Image"
          priority
        />
      </div>
    </div>
  );
};

export default Mockup;
