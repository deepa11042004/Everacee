"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Mockup = () => {
  return (
    <div className="h-full md:h-[80vh] w-full ">
      <Image
        src="/img/mockup.jpeg"
        height={900}
        width={900}
        className="w-full h-auto object-contain "
        alt="Mockup Image"
      />
    </div>
  );
};

export default Mockup;


