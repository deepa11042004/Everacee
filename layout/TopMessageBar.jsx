"use client";

import { useState } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

export default function TopMessageBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-[#2596BE] text-white text-sm relative">
      
      {/* Centered Content */}
      <div className="max-w-7xl mx-auto px-4 py-2 text-center font-bold">
        <Link href="#" target="_blank" className="hover:underline">
          -Free shipping for orders over ₹30-
        </Link>
      </div>

      {/* Cross at extreme right */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition"
        aria-label="Close"
      >
        <RxCross2 size={20} />
      </button>

    </div>
  );
}