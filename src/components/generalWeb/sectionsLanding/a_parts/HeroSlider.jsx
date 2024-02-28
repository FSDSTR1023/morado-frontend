/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
import line from '../../../../assets/line.png'

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import Img1 from '../../../../assets/heroSlider/1.jpg'	
import Img2 from '../../../../assets/heroSlider/2.jpg'
import Img3 from '../../../../assets/heroSlider/3.jpg'

const slides =[
  {
    title: 'El Mejor Hotel para tus Vacaciones',
    bg: Img1,
    // btnText: 'Ver Nuestras Habitaciones'
  },
  { bg: Img2, },
  { bg: Img3, }
]

const HeroSlider = () => {
  return (
    <Swiper
        effect={'fade'}
        navigation={true}
        loop = {true}
        autoplay={{
          delay:4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className='heroSlider h-[600px] lg:h-[650px]'
      >
      
      {slides.map((slide, index) => {
        const {title, bg, btnText} = slide
        return (
        <SwiperSlide key={index} className='h-full relative flex justify-center items-center'>
           <div className='z-20 text-white text-center'>
              <div className='flex flex-col justify-center items-center text-white tracking-[2px]'>
                <span className=' text-3xl place-self-start'>Hotel</span>
                <strong className='text-4xl lg:text-6xl uppercase'><span className='text-7xl lg:text-9xl'>M</span>anzanares</strong>
                  <h1 className='text-3xl lg:text-5xl tracking-[2px] leading-tight mb-6 drop-shadow-xl place-self-end font-tang'>
                    {/* {title} */}
                    tu hogar lejos de casa...
                  </h1>
                <img src={line} alt="" className='w-[300px] mb-10 drop-shadow-xl' />
              </div>
           </div>
           <div className='absolute top-0 w-full h-full'>
              <img 
              className='object-cover h-full w-full' 
              src={bg} 
              alt="" />
           </div>
           <div className='absolute w-full h-full bg-black/50'></div>
          </SwiperSlide>
          );
      })}
    </Swiper>
  )
};

export default HeroSlider;
