import React from "react";
import Image from "next/image";

const NutShowcase = () => {
  return (
    <section className="w-full flex flex-col md:grid md:grid-cols-2">
      
      {/* LEFT */}
      <div className="bg-white px-4 sm:px-6 lg:px-12 py-10 sm:py-14 flex flex-col justify-center items-center">
        
        {/* Images */}
        <div className="flex gap-4 mb-8 sm:mb-12 w-full max-w-md">
          
          {/* Floating Nuts */}
          <div className="relative w-1/2 bg-[#F3D7D7] rounded-[40px] sm:rounded-[60px] overflow-hidden aspect-[4/5] flex items-center justify-center p-3 sm:p-4">
            <Image
              src="/img/floating-nuts-image.png"
              alt="Floating Walnuts"
              fill
              className="object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Hands */}
          <div className="relative w-1/2 rounded-tr-[50px] sm:rounded-tr-[80px] rounded-bl-[50px] sm:rounded-bl-[80px] overflow-hidden aspect-[4/5]">
            <Image
              src="/img/hand-nuts.png"
              alt="Pouring Nuts"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="max-w-md text-center md:text-left">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-semibold">
            Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur.
            Nulla facilisi cras fermentum odio feugiat pretium amet mattis.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="bg-[#faf6ea] px-4 sm:px-6 lg:px-12 py-10 sm:py-14 flex flex-col justify-center items-center relative">
        
        {/* Floating Badge */}
        <div className="absolute md:top-4 md:right-8 top-10 right-8 w-auto  md:h-90 z-10">
          <Image
            src="/img/show/4-hover.png"
            alt="Organic Badge"
            width={200}
            height={200}
            className="drop-shadow-2xl h-full w-full  "
          />
        </div>

        {/* Main Image */}
        <div className="relative mb-6 sm:mb-8 w-full max-w-sm sm:max-w-md group">
          <div className="absolute inset-0 opacity-40 blur-3xl rounded-full scale-110 group-hover:scale-125 transition-all duration-700"></div>
          <Image
            src="/img/leafnuts.png"
            alt="Organic Hazelnut"
            width={500}
            height={500}
            className="relative w-full h-auto drop-shadow-2xl"
          />
        </div>

        {/* Text */}
        <div className="text-center max-w-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose Organic Nuts?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Fringilla phasellus faucibus scelerisque eleifend donec pretium. Et
            molestie ac feugiat sed lectus vestibulum. Id aliquet risus feugiat
            in ante metus dictum at.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NutShowcase;