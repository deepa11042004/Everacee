"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaEye ,FaHeart} from "react-icons/fa";

import { FaArrowRightArrowLeft } from "react-icons/fa6";

const products = [
  {
    id: 1,
    name: "Rosted almond - health crunchy snack",
    price: 44.00,
    rating: 4.50,
    reviews: 12,
    image: "/img/Roasted-almond.jpeg",
    badge: "New",
    badgeColor: "bg-orange-500",
    originalPrice: null
  },
  {
    id: 2,
    name: "Nuts snacks mix with diferent exotic fruits",
    price: 21.00,
    rating: 4.00,
    reviews: 8,
    image: "/img/kawa.jpeg",
    badge: "-12%",
    badgeColor: "bg-yellow-400 text-black",
    originalPrice: 24.00
  },
  {
    id: 3,
    name: "Nuts snacks mix big pack for everyday life",
    price: 36.00,
    rating: 3.00,
    reviews: 5,
     image: "/img/honey.jpeg",
    badge: "New",
    badgeColor: "bg-orange-500",
    originalPrice: null
  },
  {
    id: 4,
    name: "Rosted almond - health crunchy snack",
    price: 44.00,
    rating: 4.50,
    reviews: 12,
    image: "/img/Roasted-almond.jpeg",
    badge: "New",
    badgeColor: "bg-orange-500",
    originalPrice: null
  },
  {
    id: 5,
    name: "Nuts snacks mix with diferent exotic fruits",
    price: 21.00,
    rating: 4.00,
    reviews: 8,
    image: "/img/kawa.jpeg",
    badge: "-12%",
    badgeColor: "bg-yellow-400 text-black",
    originalPrice: 24.00
  },
  {
    id: 6,
    name: "Nuts snacks mix big pack for everyday life",
    price: 36.00,
    rating: 3.00,
    reviews: 5,
     image: "/img/honey.jpeg",
    badge: "New",
    badgeColor: "bg-orange-500",
    originalPrice: null
  },
   
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-gray-500">{rating}</span>
    </div>
  );
};

export default function BestsellerSection() {
  return (
  <section className=" py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">

    {/* TOP CONTENT */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

      {/* TEXT */}
      <div className="max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-3">
          Bestseller
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur.
          Neque ornare aenean euismod.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3">
        <button className="bestseller-prev p-2.5 sm:p-3 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="bestseller-next p-2.5 sm:p-3 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>

    {/* CARDS */}
    <Swiper
      modules={[Navigation]}
      spaceBetween={16}
      slidesPerView={1}
      navigation={{
        prevEl: ".bestseller-prev",
        nextEl: ".bestseller-next",
      }}
      breakpoints={{
        480: { slidesPerView: 1.2 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2.5 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="pb-10"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">

            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 sm:h-60 object-cover group-hover:scale-110 transition duration-500"
              />

              {product.badge && (
                <span className={`absolute top-3 left-3 px-2 py-1 text-xs text-white rounded ${product.badgeColor}`}>
                  {product.badge}
                </span>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="font-medium mb-2 line-clamp-2 text-sm sm:text-base text-black">
                {product.name}
              </h3>

              <div className="mb-2">
                <StarRating rating={product.rating} />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-bold text-lg text-black">
                  ${product.price.toFixed(2)}
                </span>

                {product.originalPrice && (
                  <span className="text-black line-through text-sm">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* ACTIONS */}
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm transition">
                  Add
                </button>

                <button className="p-2 border rounded-lg text-sky-500 hover:scale-110 transition">
                  <FaEye />
                </button>

                <button className="p-2 border rounded-lg text-red-500 hover:scale-110 transition">
                  <FaHeart />
                </button>

                <button className="p-2 border rounded-lg text-blue-500 hover:scale-110 transition">
                  <FaArrowRightArrowLeft />
                </button>
              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</section>
  );
}