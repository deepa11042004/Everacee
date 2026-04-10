import React from "react";
import Image from "next/image";
const NutShowcase = () => {
  return (
    <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Section: Product Images */}
      <div className="bg-white p-8 md:p-16 flex flex-col justify-center items-center">
        <div className="flex flex-row gap-4 mb-12">
          {/* Floating Nuts Image */}
          <div className="w-1/2 bg-[#F3D7D7] rounded-[60px] overflow-hidden aspect-4/5 flex items-center justify-center p-4">
            <img
              src="/img/floating-nuts-image.png"
              alt="Floating Walnuts"
              className="object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Hands with Cone Image */}
          <div className="w-1/2 rounded-tr-[80px] rounded-bl-[80px] overflow-hidden aspect-4/5">
            <img
              src="/img/hand-nuts.png"
              alt="Pouring Nuts"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-xl text-center md:text-left">
          <p className="text-gray-800 text-lg leading-relaxed font-bold">
            Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur.
            Nulla facilisi cras fermentum odio feugiat pretium amet mattis.
          </p>
        </div>
      </div>

      {/* Right Section: Organic Benefits */}
      <div className="bg-[#faf6ea] p-8 md:p-16 flex flex-col justify-center items-center relative">
        {/* Floating "Boost Energy" Badge */}
        <div className="h-auto   absolute top-10 right-10   p-4 ">
          <Image
            src="/img/show/4-hover.png"
            alt="Organic Hazelnut"
            height={600}
            width={600}
            className="relative z-10  drop-shadow-2xl"
          />
        </div>

        {/* Hero Nut Image */}
        <div className="relative mb-8 group">
          {/* Decorative Blob behind the nut */}
          <div className="absolute inset-0  opacity-40 blur-3xl rounded-full scale-110 group-hover:scale-125 transition-all duration-700"></div>
          <img
            src="/img/leafnuts.png"
            alt="Organic Hazelnut"
            className="relative z-10 w-full  drop-shadow-2xl"
          />
        </div>

        <div className="text-center max-w-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Organic Nuts?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed ">
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
