"use client";
import Image from "next/image";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= Math.floor(rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-gray-500 ml-1">{rating.toFixed(2)}</span>
    </div>
  );
};

const ProductJar = ({ title, subtitle, description, weight, image }) => {
  return (
    <div className="relative group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Label Overlay */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 bg-white/95 backdrop-blur-sm p-4 rounded shadow-lg text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 tracking-wider">
            EVERACE
          </h3>
          <div className="border-t border-b border-gray-300 py-2 my-2">
            <p className="text-sm font-medium text-gray-800">{title}</p>
          </div>
          <p className="text-xs text-gray-600 mb-1">{subtitle}</p>
          <p className="text-xs text-gray-500 mb-1">{description}</p>
          <p className="text-xs font-medium text-gray-700">{weight}</p>
        </div>
      </div>
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
      className={`p-2.5 border-2 rounded-lg transition-all duration-300 flex items-center justify-center ${variants[variant]}`}
      aria-label={label}
    >
      {icon}
    </button>
  );
};

export default function ProductShowcase() {
  const productData = {
    name: "Deluxe Roasted Salted Mixed Nuts in Sea Salt",
    rating: 4.0,
    price: 24.0,
    currency: "₹",
    image: "/api/placeholder/400/500",
  };

  return (
    <div className="h-screen w-full flex items-center justify-center ">
      {/* Left Side - Product Jars */}

      <div className="relative h-full w-1/2 p-5 ">
        <Image
          src="/img/left.jpeg"
          alt="Almond background"
         fill
          className="object-contain w-full h-full"
        />
      </div>

      {/* Right Side - Product Card with Background */}
      <div className="relative h-full w-1/2 flex justify-center items-center">
        <Image
          src="/img/right.jpg"
          alt="Almond background"
          fill
          className="object-contain w-full h-full"
        />
        {/* Background Almonds Pattern */}

         

        {/* Product Card */}
        <div className="relative  bg-white rounded-xl shadow-2xl overflow-hidden max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300">
          {/* Badge */}
          <span className="absolute top-4 left-4 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            New
          </span>

          {/* Product Image */}
          <div className="relative h-80 bg-gray-100">
            <Image
              src="/img/13.jpeg"
              alt={productData.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Product Info */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {productData.name}
            </h3>

            <div className="mb-3">
              <StarRating rating={productData.rating} />
            </div>

            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-bold text-gray-900">
                {productData.currency}
                {productData.price.toFixed(2).split(".")[0]}
                <sup className="text-sm font-normal">00</sup>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <ActionButton
                variant="primary"
                label="Add to cart"
                onClick={() => console.log("Add to cart")}
                icon={
                  <>
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="font-medium">Add to cart</span>
                  </>
                }
              />
              <ActionButton
                label="Quick view"
                onClick={() => console.log("Quick view")}
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                }
              />
              <ActionButton
                label="Add to wishlist"
                onClick={() => console.log("Add to wishlist")}
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                }
              />
              <ActionButton
                label="Compare"
                onClick={() => console.log("Compare")}
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
