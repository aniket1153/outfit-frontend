import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import about from "../assets/about.jpg"

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={about} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>OutfitHub was born from a passion for style and a vision to transform the way people shop for fashion online. Our journey started with a simple idea: to create a platform where customers can effortlessly discover, explore, and shop the latest trends from the comfort of their homes.</p>
              <p>Since our launch, we’ve been committed to curating a wide range of stylish and high-quality fashion pieces that cater to every personality and preference. From chic clothing and accessories to footwear and athleisure, our collection is thoughtfully sourced from trusted brands and designers to bring you the best in style and comfort.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At OutfitHub, our mission is to empower customers with choice, convenience, and confidence. We’re dedicated to delivering a seamless shopping experience that exceeds expectations—from browsing and ordering to fast and reliable delivery.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>At OutfitHub, we handpick and thoroughly vet every product to ensure it meets our uncompromising quality standards, giving you the best in fashion and lifestyle.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>Our intuitive and user-friendly interface, paired with a seamless ordering process, makes shopping at OutfitHub effortless and enjoyable.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our dedicated team of professionals is always ready to assist you at every step, ensuring your satisfaction remains our top priority. </p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
