import BestsellerSection from '@/components/BestsellerSection'
import GallerySection from '@/components/GallerySection'
import Hero from '@/components/Hero'
 import TestimonialsSection from '@/components/TestimonialsSection'
import React from 'react'
import ProductShowcase from '@/components/ProductShowcase'
const page = () => {
  return (
  <div className="bg-[#FEF9F3]">
  <Hero/>
  <BestsellerSection/>
  <GallerySection/>
  <TestimonialsSection/>
  <ProductShowcase/>
  </div>
  )
}

export default page