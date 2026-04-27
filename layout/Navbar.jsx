// components/Header.jsx
"use client";

import React, { useState } from "react";
import { FiSearch, FiHeart, FiUser, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import Cart from "@/components/svg/Cart";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [wishlistCount] = useState(0); // Connect to global state later
  const [cartCount] = useState(0);     // Connect to global state later

  // Simple nav data - easy to update
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Categories", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* ========== LOGO ========== */}
          <Link href="/" className="flex-shrink-0" aria-label="GreenPath Home">
            <Image
              src="/img/logo.png"
              alt="GreenPath Logo"
              className="h-8 lg:h-10 w-auto object-contain"
              width={150}
              height={40}
              priority
            />
          </Link>

          {/* ========== DESKTOP NAVIGATION ========== */}
          <nav 
            className="hidden lg:flex items-center space-x-1"
            role="navigation" 
            aria-label="Main Menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-colors rounded-lg hover:bg-green-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ========== MOBILE NAVIGATION (Horizontal Scroll) ========== */}
          <nav 
            className="lg:hidden flex-1 mx-4 overflow-x-auto scrollbar-hide"
            role="navigation"
            aria-label="Mobile Menu"
          >
            <ul className="flex items-center space-x-2 whitespace-nowrap pb-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="px-3 py-1.5 text-sm text-gray-700 hover:text-green-600 font-medium transition-colors rounded-lg hover:bg-green-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ========== ACTION BUTTONS ========== */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            
            {/* Search Toggle / Inline Search */}
            {isSearchOpen ? (
              <form 
                className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 focus-within:border-green-400 focus-within:ring-2 focus-within:ring-green-100 transition-all"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Add search logic here
                }}
              >
                <FiSearch className="text-gray-400 flex-shrink-0" />
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-32 sm:w-48 bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-gray-700 placeholder-gray-400"
                  autoFocus
                  onBlur={(e) => {
                    if (!e.currentTarget.value) setIsSearchOpen(false);
                  }}
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1 text-gray-400 hover:text-gray-600 lg:hidden"
                  aria-label="Close search"
                >
                  <FiX className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Open search"
              >
                <FiSearch className="h-5 w-5" />
              </button>
            )}

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-2 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Wishlist"
            >
              <FiHeart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center min-w-[16px]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Shopping Cart"
            >
              <Cart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center min-w-[16px]">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login - Icon on mobile, Icon + Text on desktop */}
            <Link
              href="/my-account"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-gray-700 hover:text-green-600 font-medium rounded-lg hover:bg-green-50 transition-colors"
              aria-label="My Account"
            >
              <FiUser className="h-4 w-4" />
              <span className="hidden lg:inline">Login</span>
            </Link>
            
            {/* Mobile Login (Icon Only) */}
            <Link
              href="/my-account"
              className="sm:hidden p-2 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="My Account"
            >
              <FiUser className="h-5 w-5" />
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;