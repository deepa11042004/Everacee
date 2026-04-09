"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    rating: 3,
    title: "Good for the price.",
    content:
      "Elit eget gravida cum sociis natoque. Tellus integer feugiat scelerisque varius morbi enim. Auctor elit sed vulputate mi sit amet mauris commodo tolis ante est moarai.",
    author: "Dylan Renfro",
  },
  {
    id: 2,
    rating: 4,
    title: "Lots of organic products.",
    content:
      "At tellus at urna condimentum mattis pellentesque id nibh. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Suspendisse in est ante in nibh.",
    author: "Alcina Dimitrova",
  },
  {
    id: 3,
    rating: 3,
    title: "Great vegan items.",
    content:
      "Imperdiet proin fermentum leo vel orci porta. Ac turpis egestas maecenas pharetra. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Nisl rhoncus mattis rhoncus urna.",
    author: "Otto Porter",
  },
  {
    id: 4,
    rating: 5,
    title: "Excellent quality!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    author: "Sarah Johnson",
  },
  {
    id: 5,
    rating: 4,
    title: "Fast delivery",
    content:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Donec pretium vulputate sapien nec sagittis aliquam.",
    author: "Michael Chen",
  },
];


const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="py-20 mb-10 px-4 h-full w-full">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center h-32 mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-3">
            Our customers love us
          </h2>
          <p className="text-gray-600 text-2xl   max-w-xl mx-auto">
            Lectus velum mattis suis amet expertuim...
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
         
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="max-w-md mx-auto text-left transition duration-300 hover:-translate-y-1">

                <StarRating rating={item.rating} />

                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.content}
                </p>

                <p className="font-bold text-gray-900">
                  {item.author}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

         

      </div>
    </section>
  );
}