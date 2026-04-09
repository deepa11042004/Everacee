import React from 'react';
 import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterestSquare } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#2B99B9] text-white py-12 px-6 md:px-16 font-sans relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold max-w-xl leading-tight text-center md:text-left">
            Sign up and get <span className="text-[#FFD700]">20% discount</span> on your next purchase
          </h2>
          
          <div className="relative w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              className="w-full lg:w-[400px] py-4 px-6 rounded-sm text-gray-800 outline-none bg-white"
            />
            <button className="font-bold text-gray-500 px-6 rounded-xl transition-colors bg-white py-4 px-2 uppercase tracking-wider text-sm">
              Submit
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10   flex items-center justify-center text-black font-bold">
                <img className='h-full  w-full ' src="/img/site-icon.png" alt="" />
              </div>
              <span className="text-xl font-bold">1111111111</span>
            </div>
            <div className="flex items-center gap-3 text-base   font-semibold">
              <IoIosMail size={20} />
              <span>greenpath@example.com</span>
            </div>
            <div className="flex items-center gap-3  text-base font-semibold">
              <FaMapMarkerAlt size={20} />
              <span>14 Main Road, New York 1001</span>
            </div>
          </div>

          {/* Menu */}

          
          <div>
            <h3 className="text-xl font-bold mb-6">Menu</h3>
            <ul className="space-y-3 text-base opacity-90">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Landing</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            <ul className="space-y-3 text-base opacity-90">
              <li><a href="#" className="hover:underline">Vegetables</a></li>
              <li><a href="#" className="hover:underline">Fruits</a></li>
              <li className="flex items-center gap-1">
                <a href="#" className="hover:underline">Organic</a>
                <span className="text-yellow-400 text-xs">★</span>
              </li>
              <li><a href="#" className="hover:underline">Detox</a></li>
              <li><a href="#" className="hover:underline">Protein Bars</a></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-xl font-bold mb-6">My Account</h3>
            <ul className="space-y-3 text-base opacity-90">
              <li><a href="#" className="hover:underline">Gift Vouchers</a></li>
              <li><a href="#" className="hover:underline">Wishlist</a></li>
              <li><a href="#" className="hover:underline">Order Tracking</a></li>
              <li><a href="#" className="hover:underline">Shopping Cart</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs opacity-80">
            2024 Qode Interactive, All Rights Reserved
          </p>
          
          <div className="flex items-center gap-6">
            <FaFacebook size={18} className="cursor-pointer hover:scale-110 transition-transform" />
            <FaSquareInstagram size={18} className="cursor-pointer hover:scale-110 transition-transform" />
            <BsTwitterX size={18} className="cursor-pointer hover:scale-110 transition-transform" />
            <FaPinterestSquare size={18} className="cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* Back to Top Button */}
        <button className="absolute bottom-8 right-8 p-2 hover:bg-white/10 rounded-full rotate-90 transition-colors">
          <IoIosArrowBack  size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;