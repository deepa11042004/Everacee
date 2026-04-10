"use client";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FiShoppingCart, FiEye, FiHeart, FiRepeat } from "react-icons/fi";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) =>
          star <= Math.floor(rating) ? (
            <FaStar key={star} className="text-yellow-400 text-sm" />
          ) : (
            <FaRegStar key={star} className="text-gray-300 text-sm" />
          )
        )}
      </div>
      <span className="text-sm text-gray-500 ml-1">
        {rating.toFixed(2)}
      </span>
    </div>
  );
};

const ActionButton = ({ icon, label, onClick, variant = "default" }) => {
  const variants = {
    default: "border-gray-200 hover:border-blue-500 hover:text-blue-500",
    primary: "bg-blue-500 hover:bg-blue-600 text-white border-blue-500",
  };

  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 border rounded-lg flex items-center gap-2 transition ${variants[variant]}`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};

export default function ProductShowcase() {
  const productData = {
    name: "Deluxe Roasted Salted Mixed Nuts in Sea Salt",
    rating: 4.0,
    price: 24.0,
    currency: "$",
    image: "/img/13.jpeg",
  };

  

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row text-black">
      
      {/* LEFT IMAGE */}
      <div className="relative w-full lg:w-1/2 md:h-75 h-100 lg:h-auto">
        <Image
          src="/img/left.jpeg"
          alt="Left"
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="relative  w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6">
        
        {/* Background */}
        <Image
          src="/img/right.jpg"
          alt="Right"
          fill
          className="object-cover opacity-80  "
        />

        {/* CARD */}
        <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-sm">
          
          {/* Badge */}
          <span className="absolute top-4 left-4 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            New
          </span>

          {/* Product Image */}
          <div className="relative h-60 sm:h-72">
            <Image
              src={productData.image}
              alt={productData.name}
              fill
              className="object-cover rounded-t-xl"
            />
          </div>

          {/* Info */}
          <div className="p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2">
              {productData.name}
            </h3>

            <StarRating rating={productData.rating} />

            <div className="mt-3 mb-5">
              <span className="text-2xl sm:text-3xl font-bold">
                {productData.currency}
                {productData.price.toFixed(0)}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2">
              <ActionButton
                variant="primary"
                
                onClick={() => {}}
                icon={<FiShoppingCart />}
              />
              <ActionButton
                
                onClick={() => {}}
                icon={<FiEye />}
              />
              <ActionButton
                
                onClick={() => {}}
                icon={<FiHeart />}
              />
              <ActionButton
                 
                onClick={() => {}}
                icon={<FiRepeat />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}