import React from 'react'
import { assets } from '../assets/assets'
import img1 from "../assets/img1.jpg"
import "./hero.css";


const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 main-box'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className=' font-medium text-sm md:text-base'>NEW SECTION IDEA
TRENDING COLLECTIONS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-4xl leading-relaxed'>TRENDING COLLECTIONS</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
      </div>
      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2' src={img1} alt="" />
    </div>
  )
}

export default Hero
