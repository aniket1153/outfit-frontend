import React from 'react'
import Marquee from 'react-fast-marquee';
import img1 from '../assets/finalimg10.jpg';
import img2 from '../assets/finalimg9.jpg';
import img3 from '../assets/finalimg8.jpg';
import img4 from '../assets/finalimg7.jpg';
import img5 from '../assets/finalimg6.jpg';
import img6 from '../assets/finalimg5.jpg';
import img7 from '../assets/finalimg4.jpg';
import img8 from '../assets/finalimg3.jpg';
import img9 from '../assets/finalimg2.jpg';
import img10 from '../assets/finalimg1.jpg';
import "./Carousel.css";
import Title from './Title';
const Carousel = () => {
  return (
   <div className='my-10 wrapper box'>

    <div className='hero-dv text-center py-8 text-3xl '>
    <Title text1={'Our Collections'} text2={'of Week'} />
    </div>
   <div className='main text-center py-8 text-3xl'>
 
 
  
   <Marquee  direction="left" speed={120} delay={3}>
         
            
         <div className="image_wrapper">
        
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>

          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
          
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
        </Marquee>
   </div>
   
   </div>
  )
}

export default Carousel