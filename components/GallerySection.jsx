"use client";

const galleryItems = [
  {
    id: 1,
    mainImage: "/img/show/1.jpeg",
    hoverImage: "/img/show/1-hover.png",
    alt: "Gallery item 1",
  },
  {
    id: 2,
    mainImage: "/img/show/2.jpeg",
    hoverImage: "/img/show/2-hover.png",
    alt: "Gallery item 2",
  },
  {
    id: 3,
    mainImage: "/img/show/3.jpeg",
    hoverImage: "/img/show/3-hover.png",
    alt: "Gallery item 3",
  },
  {
    id: 4,
    mainImage: "/img/show/4.jpeg",
    hoverImage: "/img/show/4-hover.png",
    alt: "Gallery item 4",
  },
];

export default function GallerySection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8  ">
  <div className="max-w-9xl mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

      {galleryItems.map((item) => (
        <div
          key={item.id}
          className="relative group overflow-hidden rounded-sm"
        >
          {/* MAIN IMAGE */}
          <img
            src={item.mainImage}
            alt={item.alt}
            className="w-full h-auto object-cover transition duration-500 group-hover:scale-110"
          />

          {/* HOVER IMAGE */}
          <img
            src={item.hoverImage}
            alt="hover"
            className="absolute inset-0 w-full h-auto object-cover opacity-0 group-hover:opacity-100 transition duration-500"
          />

          {/* OPTIONAL OVERLAY */}
          <div className="absolute top-0 left-0 inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
             
          </div>
        </div>
      ))}

    </div>

  </div>
</section>
  );
}
