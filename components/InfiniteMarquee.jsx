import React from 'react';

const InfiniteMarquee = () => {
  const text = "One of the main benefits of eating organic nuts is that they are packed with essential nutrients that are important for overall health and wellbeing.";

  return (
    <div className="w-full bg-[#2B99B9] py-6 border-y border-black/10 overflow-hidden relative">
      {/* Injecting the keyframes directly so you don't need tailwind.config.js 
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
      `}} />

      <div className="animate-marquee-infinite">
        {/* We repeat the text enough times to fill the width and loop seamlessly */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-lg md:text-3xl font-semibold text-white px-8  whitespace-nowrap ">
              {text}
            </span>
            {/* Decorative separator */}
            <span className="text-3xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;