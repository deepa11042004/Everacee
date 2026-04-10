import BestsellerSection from '@/components/BestsellerSection'
import GallerySection from '@/components/GallerySection'
import Hero from '@/components/Hero'
 import TestimonialsSection from '@/components/TestimonialsSection'
import React from 'react'
import ProductShowcase from '@/components/ProductShowcase'
import NutGrid from '@/components/NutGrid'
import NutShowcase from '@/components/NutShowcase'
import Mockup from '@/components/Mockup'
import InfiniteMarquee from '@/components/InfiniteMarquee'
const page = () => {
  return (
  <div className="bg-[#FEF9F3] ">
  <Hero/>
  <BestsellerSection/>
  <GallerySection/>
  <TestimonialsSection/>
  <ProductShowcase/>
  <NutGrid/>
  <Mockup/>
  <NutShowcase/>
  <InfiniteMarquee/>
  </div>
  )
}

export default page