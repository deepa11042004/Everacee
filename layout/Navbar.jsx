// Header.jsx
"use client";
import React, { useState } from "react";
import {
  FiChevronDown,
  FiStar,
  FiX,
  FiSearch,
  FiPhone,
  FiMenu,
} from "react-icons/fi";
import Cart from "@/components/svg/Cart";
import Link from "next/link";
import Image from "next/image";
import Person from "@/components/svg/Person";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Menu data structure for cleaner rendering
  const menuItems = [
    {
      id: "home",
      label: "Home",
      hasDropdown: true,
      type: "narrow",
      children: [
        { label: "Main Home", href: "https://greenpath.qodeinteractive.com/" },
        {
          label: "Organic Juice Store",
          href: "https://greenpath.qodeinteractive.com/organic-juice-store/",
        },
        {
          label: "Organic Produce",
          href: "https://greenpath.qodeinteractive.com/organic-produce/",
        },
        { label: "Nut Shop", href: "index.htm", active: true },
        {
          label: "Healthy Food",
          href: "https://greenpath.qodeinteractive.com/healthy-food/",
        },
        {
          label: "Organic Market",
          href: "https://greenpath.qodeinteractive.com/organic-market/",
        },
        {
          label: "Landing",
          href: "https://greenpath.qodeinteractive.com/landing/",
        },
      ],
    },
    {
      id: "pages",
      label: "Pages",
      hasDropdown: true,
      type: "narrow",
      children: [
        {
          label: "About Us",
          href: "https://greenpath.qodeinteractive.com/about-us/",
        },
        {
          label: "Gift Cards",
          href: "https://greenpath.qodeinteractive.com/gift-cards/",
        },
        {
          label: "Reviews",
          href: "https://greenpath.qodeinteractive.com/reviews/",
        },
        {
          label: "FAQ Page",
          href: "https://greenpath.qodeinteractive.com/faq-page/",
        },
        {
          label: "Terms & Conditions",
          href: "https://greenpath.qodeinteractive.com/terms-conditions/",
        },
      ],
    },
    {
      id: "shop",
      label: "Shop",
      hasDropdown: true,
      type: "wide",
      featured: true,
      children: [
        {
          label: "Shop Lists",
          children: [
            {
              label: "Shop Filter",
              href: "https://greenpath.qodeinteractive.com/shop-filter/",
            },
            {
              label: "Shop Filter Wide",
              href: "https://greenpath.qodeinteractive.com/shop-filter-wide/",
            },
            {
              label: "Shop Grid Filter",
              href: "https://greenpath.qodeinteractive.com/shop-grid-filter/",
            },
            {
              label: "Shop Grid List",
              href: "https://greenpath.qodeinteractive.com/shop-grid-list/",
            },
            {
              label: "Shop Horizontal Filter",
              href: "https://greenpath.qodeinteractive.com/shop-horizontal-filter/",
            },
            {
              label: "Shop Catalog Images",
              href: "https://greenpath.qodeinteractive.com/shop-catalog-images/",
            },
            {
              label: "Shop Category List",
              href: "https://greenpath.qodeinteractive.com/shop-category-list/",
            },
          ],
        },
        {
          label: "Shop Layouts",
          children: [
            {
              label: "Two Columns",
              href: "https://greenpath.qodeinteractive.com/two-columns-shop/",
            },
            {
              label: "Three Columns",
              href: "https://greenpath.qodeinteractive.com/three-columns-shop/",
            },
            {
              label: "Four Columns Grid",
              href: "https://greenpath.qodeinteractive.com/four-columns-shop-grid/",
            },
            {
              label: "Four Columns Wide",
              href: "https://greenpath.qodeinteractive.com/four-columns-shop-wide/",
            },
            {
              label: "Five Columns Wide",
              href: "https://greenpath.qodeinteractive.com/five-columns-shop-wide/",
            },
          ],
        },
        {
          label: "Product Types",
          children: [
            {
              label: "Standard",
              href: "https://greenpath.qodeinteractive.com/product/deluxe-roasted-salted-mixed-nuts-in-sea-salt/",
            },
            {
              label: "Big Gallery",
              href: "https://greenpath.qodeinteractive.com/product/caramelized-peanuts-cereal-energy-bar/",
            },
            {
              label: "Big Images",
              href: "https://greenpath.qodeinteractive.com/product/avocado-the-most-nutrient-dense-superfood-available/",
            },
            {
              label: "Countdown Product",
              href: "https://greenpath.qodeinteractive.com/product/organic-avocado-packed-with-healthy-fats/",
            },
            {
              label: "Variable Flavors Product",
              href: "https://greenpath.qodeinteractive.com/product/healthy-cereal-energy-bars-in-three-different-flavours/",
            },
            {
              label: "Variable Weight Product",
              href: "https://greenpath.qodeinteractive.com/product/handmade-orange-with-passion-fruit-marmelade/",
            },
            {
              label: "Variable Colors Product",
              href: "https://greenpath.qodeinteractive.com/product/energy-bar-dark-chocolate-and-peanut-butter/",
            },
            {
              label: "Sale Product",
              href: "https://greenpath.qodeinteractive.com/product/jam-jar-handmade-created-from-raspberry-fruit/",
            },
            {
              label: "New Product",
              href: "https://greenpath.qodeinteractive.com/product/sparkling-water-flavored-with-fresh-lemon-juice/",
            },
            {
              label: "Grouped Product",
              href: "https://greenpath.qodeinteractive.com/product/nut-mixes-pistachio-almond-and-cashews/",
            },
            {
              label: "Thumbnail Images Left",
              href: "https://greenpath.qodeinteractive.com/product/pineapple-tropical-fruit-sweat-fresh-organic/",
            },
          ],
        },
        {
          label: "Shop Pages",
          children: [
            {
              label: "My Account",
              href: "https://greenpath.qodeinteractive.com/my-account/",
            },
            {
              label: "Cart",
              href: "https://greenpath.qodeinteractive.com/cart/",
            },
            {
              label: "Checkout",
              href: "https://greenpath.qodeinteractive.com/checkout/",
            },
            {
              label: "Order Tracking",
              href: "https://greenpath.qodeinteractive.com/order-tracking/",
            },
          ],
        },
      ],
    },
    {
      id: "blog",
      label: "Blog",
      hasDropdown: true,
      type: "narrow",
      children: [
        {
          label: "Standard",
          children: [
            {
              label: "Right Sidebar",
              href: "https://greenpath.qodeinteractive.com/right-sidebar/",
            },
            {
              label: "Left Sidebar",
              href: "https://greenpath.qodeinteractive.com/left-sidebar/",
            },
            {
              label: "No Sidebar",
              href: "https://greenpath.qodeinteractive.com/no-sidebar/",
            },
          ],
        },
        {
          label: "Masonry",
          href: "https://greenpath.qodeinteractive.com/masonry-list/",
        },
        {
          label: "Post Formats",
          children: [
            {
              label: "Standard",
              href: "https://greenpath.qodeinteractive.com/tips-for-a-healthier-lifestyle/",
            },
            {
              label: "Gallery",
              href: "https://greenpath.qodeinteractive.com/all-you-can-find-at-local-market/",
            },
            {
              label: "Quote",
              href: "https://greenpath.qodeinteractive.com/organic-nuts-are-a-popular-choice/",
            },
            {
              label: "Link",
              href: "https://greenpath.qodeinteractive.com/find-out-how-to-support-local-markets/",
            },
            {
              label: "Audio",
              href: "https://greenpath.qodeinteractive.com/podcast-eat-feel-good-ep-4/",
            },
            {
              label: "Video",
              href: "https://greenpath.qodeinteractive.com/our-go-to-picks-at-local-markets/",
            },
            {
              label: "No Sidebar",
              href: "https://greenpath.qodeinteractive.com/read-our-guide-about-organic-food/",
            },
          ],
        },
      ],
    },
    {
      id: "contact",
      label: "Contact",
      href: "https://greenpath.qodeinteractive.com/contact/",
      hasDropdown: false,
    },
  ];

  return (
    <header className="relative bg-white/60 sticky top-0 z-50 " role="banner">
      {/* Main Header */}
      <div className="container mx-auto py-8 flex items-center justify-between">
        <div className="flex items-center justify-start space-x-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/img/logo.png"
              alt="GreenPath Logo"
              className="h-10 w-auto object-contain"
              width={150}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center"
            role="navigation"
            aria-label="Top Menu"
          >
            <ul className="flex items-center space-x-1">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`relative group ${
                    item.featured ? "font-semibold" : ""
                  }`}
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.id)
                  }
                  onMouseLeave={() =>
                    item.hasDropdown && setActiveDropdown(null)
                  }
                >
                  <Link
                    href={item.href || "#"}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        toggleDropdown(item.id);
                      }
                    }}
                    className={`flex items-center px-3 py-2 text-gray-700 hover:text-green-600 transition-colors ${
                      item.active ? "text-green-600 font-medium" : ""
                    }`}
                  >
                    <span>{item.label}</span>

                    {item.hasDropdown && (
                      <FiChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    )}

                    {item.featured && (
                      <FiStar className="ml-1 h-4 w-4   fill-yellow-400 stroke-yellow-400" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.hasDropdown && activeDropdown === item.id && (
                    <div
                      className={`absolute z-50 bg-white shadow-lg rounded-md min-w-max ${
                        item.type === "wide"
                          ? "left-1/2 -translate-x-1/2 w-screen max-w-6xl p-6 grid grid-cols-4 gap-6"
                          : "left-0 mt-1 w-56"
                      }`}
                    >
                      {item.type === "wide" ? (
                        item.children?.map((column, idx) => (
                          <div key={idx} className="space-y-2">
                            <h4 className="font-semibold text-gray-900 mb-2 pb-1 border-b border-gray-100">
                              {column.label}
                            </h4>
                            <ul className="space-y-1">
                              {column.children?.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <Link
                                    href={subItem.href || "#"}
                                    className="block px-2 py-1 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      ) : (
                        <ul className="py-2">
                          {item.children?.map((subItem, idx) => (
                            <li key={idx}>
                              <Link
                                href={subItem.href || "#"}
                                className={`block px-4 py-2 text-sm ${
                                  subItem.active
                                    ? "text-green-600 font-medium bg-green-50"
                                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Header Widgets */}
        <div className="flex items-center space-x-4">
          {/* Phone */}
          <div className="hidden md:flex items-center text-sm">
            
            <span className="text-gray-600">Call:</span>
            <a
              href="tel:+911111111111"
              className="ml-1 font-medium text-gray-900 hover:text-green-600 transition-colors"
            >
              +91 1111111111
            </a>
          </div>

          {/* User Account */}
          <a
            href="https://greenpath.qodeinteractive.com/my-account"
            className="p-2 text-gray-600 hover:text-green-600 transition-colors rounded-full hover:bg-gray-100"
            aria-label="My Account"
          >

            <Person className="h-5 w-5"/>
            
          </a>

          {/* Cart */}
          <div className="relative">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="p-2 text-gray-600 hover:text-green-600 transition-colors rounded-full hover:bg-gray-100 relative"
              aria-label="Shopping Cart"
            >
              <Cart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 text-green-600 font-bold bg-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                0
              </span>
            </button>
            


             

           

            {/* Cart Dropdown */}
            {isCartOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 z-50 border border-gray-100">
                <div className="flex items-center justify-between mb-3 pb-3 border-b">
                  <h3 className="font-semibold text-gray-900">
                    My Shopping Cart
                  </h3>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FiX className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 text-center py-4">
                  No products in the cart.
                </p>
                <div className="text-right text-sm text-gray-600">
                  Total: <span className="font-semibold">₹0.00</span>
                </div>
              </div>
            )}
          </div>
            

          {/* Search Toggle */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-gray-600 hover:text-green-600 transition-colors rounded-full hover:bg-gray-100 lg:hidden"
            aria-label="Search"
          >
            <FiSearch className="h-5 w-5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-green-600 transition-colors rounded-full hover:bg-gray-100"
            aria-label="Toggle Menu"
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-2">
          <nav className="container mx-auto px-4">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded transition-colors"
                      >
                        <span>{item.label}</span>
                        <FiChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === item.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === item.id && (
                        <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-3">
                          {item.children.map((subItem, idx) => (
                            <li key={idx}>
                              <a
                                href={subItem.href}
                                className={`block px-3 py-2 text-sm ${
                                  subItem.active
                                    ? "text-green-600 font-medium"
                                    : "text-gray-600 hover:text-green-600"
                                }`}
                              >
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Sticky Header (appears on scroll) */}
      <div
        className="hidden lg:block fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-40 transform -translate-y-full transition-transform duration-300"
        id="sticky-header"
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <a
            href="https://greenpath.qodeinteractive.com/"
            className="flex-shrink-0"
          >
            <Image
              src="/img/logo.png"
              alt="GreenPath Logo"
              className="h-8 w-auto object-contain"
              width="120"
              height="32"
              loading="lazy"
            />
          </a>

          <nav className="flex-1 mx-8">
            <ul className="flex items-center justify-center space-x-1">
              {menuItems.slice(0, -1).map((item) => (
                <li key={`sticky-${item.id}`} className="relative group">
                  <a
                    href={item.href || "#"}
                    className="flex items-center px-3 py-1.5 text-sm text-gray-700 hover:text-green-600 transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <FiChevronDown className="ml-1 h-3 w-3" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-3">
            <a
              href="tel:+911111111111"
              className="text-sm font-medium text-gray-700 hover:text-green-600"
            >
              +91 1111111111
            </a>
            <a
              href="https://greenpath.qodeinteractive.com/my-account"
              className="p-1.5 text-gray-600 hover:text-green-600"
            >
              <Person className="h-4 w-4" />
            </a>
            <a
              href="https://greenpath.qodeinteractive.com/cart/"
              className="p-1.5 text-gray-600 hover:text-green-600 relative"
            >
              <Cart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-3.5 w-3.5 flex items-center justify-center text-[10px]">
                0
              </span>
            </a>

            <div className="h-5 w-5 text-black"> sdfds0.00</div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-4 relative animate-fade-in">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-600"
            >
              <FiX className="h-5 w-5" />
            </button>
            <form className="flex items-center">
              <FiSearch className="text-gray-400 ml-3 mr-2" />
              <input
                type="search"
                placeholder="Search here..."
                className="w-full py-3 px-2 text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0"
                autoFocus
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
