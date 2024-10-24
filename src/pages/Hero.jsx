import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import LatestWorks from '../components/LatestWorks'
const Hero = () => {
  return (
    <>
      <section className='flex flex-col h-screen justify-between relative'>
        <Navbar/>
        <HeroSection/>
        <LatestWorks/>
      </section>
    </>
  )
}

export default Hero
