"use client"

import MainLayout from './layouts/MainLayout'
import CarouselComp from './components/CarouselComp'
import SponsoreCarousel from './components/carousel/SponsoreCarousel'
import AuctionsCarousel from './components/carousel/AuctionsCarousel'
import CoberCarousel from './components/carousel/CoberCarousel'
import RealEstateCarousel from './components/carousel/RealEstateCarousel'




export default function Home() {

  

  return (
    <MainLayout>
      <CarouselComp />
      <div className='border-b'/>
      <div className='max-w-[1300px] max-auto'>
        <AuctionsCarousel />
        <SponsoreCarousel />
        <CoberCarousel />
        <RealEstateCarousel />
      </div>
    </MainLayout>
  )
}
